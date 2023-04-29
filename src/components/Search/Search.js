import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Search.css';


const Search = () => {

    return (
        <div className='searchContainer'>
        
        <input placeholder='Search' autoFocus={true} />
        {/* <input onChange={e => setQuery(e)} onKeyPress={e => handleKey(e)} autoFocus={true} /> */}
        {/* <img onClick={search} className="glass" alt="magnifying glass" src={glass} /> */}
      </div>
    );
};

export default Search;
