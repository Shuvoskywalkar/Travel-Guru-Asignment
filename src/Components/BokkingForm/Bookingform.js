import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

const Bookingform = (props) => {
    // const{number}=useParams()
    // const{Dest,Key}=props
    console.log(props)
   console.log(props.Key)
   const history=useHistory()
   const loginPage=()=>{
       history.push("/RoomInfo/"+props.Key)
   }
    return (
         <div >
            <div className="form">
                <b>Origin:</b>
                <input type="text" value={'Bangladesh'} />
                <br/>
                <b>Destination:</b>
                <input type="text" value={props.Dest}/>
                <br/>
                <br/>
     {/* <Link to={"/RoomInfo/"+props.Key}> */}
         <button className="btn btn-warning pr-5 pl-5 text-light" onClick={loginPage}>Start Booking</button>
     {/* </Link> */}
      
             </div>
        </div>
    );
};

export default Bookingform;