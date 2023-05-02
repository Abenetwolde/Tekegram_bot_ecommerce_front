import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";
import ScrollButtonMenu from '../Scroll/scrollmenu';
import Search from '../Search/Search';
import Searchbar from '../Search/Search';
// import logo1 from "./img"

const products = [

    {id: '1', img:"https://api.ashewa.com/media/products-thumbnails/1664127713.webp",title: 'product1', price: 12000, description: 'discription of a product1'},
    {id: '2', img:"https://api.ashewa.com/media/products-thumbnails/1672655372_mRgSFR5.webp",title: 'product2', price: 13400, description: 'discription of a product2'},
    {id: '3', img:"https://api.ashewa.com/media/products-thumbnails/1658335920.jpg",title: 'product3', price: 1600, description: 'discription of a product3'},
    {id: '4', img:"https://api.ashewa.com/media/products-thumbnails/1680164708_KQhfMUU.webp",title: 'product4', price: 5986, description: 'discription of a product4'},
    {id: '5', img:"https://api.ashewa.com/media/products-thumbnails/1680178332_Ej3hxX8.webp",title: 'product5', price: 7456, description: 'discription of a product5'},



]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();
console.log(tg )
console.log(queryId )
    const onSendData = useCallback(() => {
        const data = {
             products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,

        }
        fetch('http://localhost:8000/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, [addedItems])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])


    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Buy ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div>
            <Searchbar/>
            <ScrollButtonMenu/>
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
        </div>
    );
};

export default ProductList;
