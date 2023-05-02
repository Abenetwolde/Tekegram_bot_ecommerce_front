import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Search.css"
const Searchbar = () => {

    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // if(keyword.trim()){
        //     navigate(`/products/${keyword}`)
        // } else {
        //     navigate('/products');
        // }
    }

    return (
        <form onSubmit={handleSubmit} className="w-90w my-5 mx-5 sm:w-9/12  px-1 sm:px-4 py-1.5 flex justify-between items-center shadow-md  rounded-sm overflow-hidden">
            <input value={keyword} onChange={(e) => setKeyword(e.target.value)} className="text-sm flex-1 outline-none border-none " type="text" placeholder="Search for products, brands and more" />
            <button type="submit" className="text-primary-black"><SearchIcon /></button>
        </form>
    );
};

export default Searchbar;