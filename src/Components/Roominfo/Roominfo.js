import React from 'react';
import { useParams } from 'react-router-dom';
import fakedata from '../BookNow/Fakedata'
import Header from '../Header/Header';
import "./Roominfo.css"
import Roomdata from "../Roomdata/Roomdata"
const Roominfo = () => {
    const {number}=useParams()
    const product=fakedata.find(pd=>pd.key==number)
console.log(product)
const Room=Roomdata.find(pd=>pd.key==number)

    return (
        <div className="body bg-light">
            
            <Header></Header>
            <hr/>
            <div className="row mx-5 ">
            <div className="col-md-6">
            <small>252 stays Apr 13-17 3 guests</small>
                <p className="destination">Stay in {product.Destination}</p>
                 {Roomdata.map(room=>
                  
                    <div className="roomDetails my-3 d-flex justify-content-between">  
                    <img className="image img-fluid " src={room.photo} alt="photo not found"/>
                    <div className="mx-3">                 <p className="dest">{room.Description}</p>
                 <p className="rooms">{room.rooms}</p>
                 <p className="facilites">{room.facilites}</p>
                 <p className="cancel">{room.canceletion}</p>
                 <div className="star"><img  src="https://imgur.com/974530E.png"  alt="showing not error"/> {room.Rating}
                 <span className="price ml-4">{room.price}/Night</span>
                 <small className="sub"> subtotal::{room.sub}</small>
                 </div>
                 </div>

                 </div>
                    )}
                    
                    </div>
                <div className="col-md-6 bg-light">
                <iframe src={Room.map}
                 width="600" height="730" frameborder="2"  allowfullscreen="" alt="মামা।।wait koren...ম্যাপ আইতেসে" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
            </div>
            );
};

export default Roominfo;