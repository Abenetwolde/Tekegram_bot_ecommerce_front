import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';


const Header = () => {
    const {user, onClose} = useTelegram();




// console.log(user)
    return (
        <div className={'header'}>
            <Button onClick={onClose}>back</Button>
            <span className={'username'}>
               hello {user?.queryId}

            </span>
        </div>
    );
};

export default Header;
