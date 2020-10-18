import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fakedata from './Fakedata'
import './booknow.css'
const BookNow = () => {
    // const{Fakedata2}=props.Fakedata
    // const fakedatas=fakedata.slice(0,3)
    const[jayga,setjayga]=useState(fakedata)
    // setjayga(jayga)
    // console.log(jayga)
    const{Description,Destination,key,image}=jayga
    return (
        <div className="p-5">
            <div className="row">
                
                    <div className="col-md-6 "><h1>Cox's Bazzar</h1><br/><p className="text-light">
                    Walla habilbi,this is a verry nice place to visit.there are are a very few beaches in the world which are truely awesome .<br/>This is one of em.Swag se karenge Tumhara swagat ....Aso Aso
                        </p>
                       <button className=" btn btn-warning">Book Now</button></div>
                    
    {jayga.map(faked=><div className="col-md-2 "> <Link to={"/Showdetails/"+faked.key}><img src={faked.image} alt="kisu naiikka kn eikhane..hmm??" srcset=""/></Link> </div>)}
                </div>
            </div>
        
    );
};

export default BookNow;