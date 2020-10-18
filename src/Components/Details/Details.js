import React from 'react';
import Bookingform from '../BokkingForm/Bookingform';
import Header from '../Header/Header';

const details = (props) => {
console.log(props)
const {Destination,Description,key}=props.Product
    return (
   
        
                        <div className="row d-flex justify-content-between">
                <div className="col-md-12">
    <div className="col-md-6 ">
        <h1><b>{Destination}</b></h1><br/><h4 className="text-danger">
                {Description}
                    </h4></div>
                    <div className="col-md-6 "> 
                    <Bookingform Dest={Destination} Key={key}></Bookingform>
                    </div></div>
        </div>
    
        
    );
};

export default details;