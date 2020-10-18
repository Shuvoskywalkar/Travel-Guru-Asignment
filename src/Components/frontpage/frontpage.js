import React from 'react';
import BookNow from '../BookNow/BookNow';
import Header from '../Header/Header';
import './forntpage.css'
const Frontpage = () => {
    return (
        
            <div className="Home">
            <Header></Header>
            <BookNow ></BookNow>
        </div>
      
        
    );
};

export default Frontpage;