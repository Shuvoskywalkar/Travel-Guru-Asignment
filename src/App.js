import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Frontpage from './Components/frontpage/frontpage';
import Header from './Components/Header/Header';
import Showdetails from './Components/Showdetails/Showdetails';
// import fakedata from './Components/BookNow/Fakedata'
import Details from './Components/Details/Details'
import Login from './Components/Login/Login'
import Nomatch from './Nomatch/Nomatch';
import Registration from './Components/REgistration/Registration';
import Roominfo from './Components/Roominfo/Roominfo';
import PrivateRoute from '../src/Components/Protected/Protected'
export const Context=createContext()
function App() {
  const [loggedUser,setloggedUser]=useState({})
 const {email,name}=loggedUser
  return (
    <Context.Provider value={[loggedUser,setloggedUser]}>
     {/* <h1>{email}</h1> */}
    <Router>
      <Switch>
        <Route exact path="/">
         <Frontpage></Frontpage>
        </Route>
        <Route path="/frontpage">
          <Frontpage></Frontpage>
        </Route>
        <Route path="/header">
          <Header email={email}></Header>
        </Route>
        <Route path="/Showdetails/:proKey">
          <Showdetails></Showdetails>
        </Route>
        <Route path="/Details">
          <Details></Details>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/Registration">
          <Registration/>
        </Route>
      
        <PrivateRoute path="/RoomInfo/:number">
          <Roominfo/>
          </PrivateRoute> 
         
                            <Route path="*">
          <Nomatch/>
        </Route>
      </Switch>
    </Router>
    </Context.Provider>
      );
}

export default App;
