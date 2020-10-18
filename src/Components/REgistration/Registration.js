import React, { useState } from 'react';
import Header from '../Header/Header';
import './Registration.css'
const Registration = () => {

    return (
   <body>
       <Header/>
         <div class="container ">
    <div class="row">
      <div class="col-lg-10 col-xl-9 mx-auto">
        <div class="card card-signin flex-row mx-25 my-3 w-75">
          
          <div class="card-body ">
            <h5 class="card-title text-center">Register</h5>
            <form class="form-signin ">
            <div class="form-label-group ">
                <input type="text" id="inputFirstname" class="form-control " placeholder="Username" required autofocus />
                <label for="inputUserame">First Name</label>
              </div>

              <div class="form-label-group">
                <input type="email" id="inputLastname" class="form-control " placeholder="Email address" required />
                <label for="inputEmail">Last Name</label>
              </div>
              
              <hr/>
              

              <div class="form-label-group">
                <input type="email" id="inputEmail" class="form-control " placeholder="Email address" required />
                <label for="inputEmail">Email address</label>
              </div>
              
              <hr/>

              <div class="form-label-group">
                <input type="password" id="inputPassword" class="form-control " placeholder="Password" required />
                <label for="inputPassword">Password</label>
              </div>
              
              <div class="form-label-group ">
                <input type="password" id="inputConfirmPassword" class="form-control  " placeholder="Password" required />
                <label for="inputConfirmPassword">Confirm pasword</label>
              </div>

              <button class="btn btn-lg btn-primary btn-block text-uppercase " type="submit">Register</button>
            
              <hr class="my-4"/>
              <button class="btn btn-lg btn-google btn-block text-uppercase " type="submit"><i class="fab fa-google mr-2"></i> Sign up with Google</button>
              <button class="btn btn-lg btn-facebook btn-block text-uppercase " type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign up with Facebook</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>


   </body>


    )}
export default Registration;