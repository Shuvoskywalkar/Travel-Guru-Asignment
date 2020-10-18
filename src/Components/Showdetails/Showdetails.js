import React from 'react';
import { useParams } from 'react-router-dom';
import Bookingform from '../BokkingForm/Bookingform';
import fakedata from '../BookNow/Fakedata'
import Details from '../Details/Details'
import Header from '../Header/Header';
import './showdetails.css'
const Showdetails = () => {
    const {proKey}=useParams()
    console.log(proKey)
    const product=fakedata.find(pd=>pd.key==proKey)
    console.log(product)
    // const ishtyle={{}}
    return (<body >
              <Header></Header>
        <div className="p-5 mx-5 showdetails">
            
         <Details Product={product}></Details>
         
   
             </div>
             </body>
    );
};

export default Showdetails;