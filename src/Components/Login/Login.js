import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Context, UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import Header from '../Header/Header';



const Login = () => {
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    let history = useHistory();
    let location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

   
    const [loggedUser, setloggedUser] = useContext(Context);
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSignedIn: false,
        newUser: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',

    })

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const googleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email
                }
                setUser(signedInUser);
                setloggedUser(signedInUser);
                history.replace(from);
            })
            .catch(err => (err))
    }

    const fbSignIn = () => {
        firebase.auth().signInWithPopup(fbProvider)
        .then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            
            const { displayName, email } = user;
            const signedInUserFB = {
                isSignedIn: true,
                name: displayName,
                email: email
            }
            setUser(signedInUserFB);
            setloggedUser(signedInUserFB);
            history.replace(from);
            console.log(user)
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            var email = error.email;
            var credential = error.credential;
          });
    }

    const googleSigOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    error: '',
                    success: false

                }
                setUser(signedOutUser)
            })
            .catch(err => (err))
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            isFieldValid = e.target.value.length > 6 && /\d{1}/.test(e.target.value);
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
        else{
            const validation='please input a valid email/password'
            
        }
    }

    const handleSubmit = (e) => {
   
        if (newUser && user.email && user.password) {
           

            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    
            const { displayName, email } = res.user;
            const signedInUserCreate = {
                isSignedIn: true,
                name: displayName,
                email: email
            }
            setUser(signedInUserCreate);
            setloggedUser(signedInUserCreate);
                  
                    history.replace(from)
                })
                .catch(error => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }

        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = { ...user }
                newUserInfo.error = '';
                newUserInfo.success = true;
                
                setUser(newUserInfo);
                setloggedUser(newUserInfo);
                history.replace(from);
            })
            .catch(function(error) {
                const newUserInfo = { ...user }
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo)
                console.log(user)
                console.log(error.message)
                var errorCode = error.code;
             
              });
        }
        e.preventDefault()
    }

    // const updateUserName = name => {
    //     var user = firebase.auth().currentUser;

    //     user.updateProfile({
    //       displayName: name
    //     })
    //     .then(function() {
    //     }).catch(function(error) {
    //     });
    // }

    return (
        <div className="LoginPage " style={{backgroundColor:"white",height:'1000px'}}>
            <div className="LoginContainer "  >
                <Header/>
            <div style={{width:'500px',marginLeft:"400px"}} className="row login align-items-center d-flex ">
            
                <div className="col-md-12 login_form ">
                    <form className="ml-5 justify-content-center" onSubmit={handleSubmit} action="">
                        <h1>Login</h1>
                        {newUser && <input type="text" onBlur={handleBlur}  required placeholder="write your First name" className="w-75" name="name" />}
                        <br />
                        {newUser && <input type="text" onBlur={handleBlur}   className="w-75" placeholder="write your Last Name" name="name" />}
                        <br />
                        <input type="email" onBlur={handleBlur} name="email" className="w-75" placeholder="write your email" required />
                        <br />
                        <input type="password" onBlur={handleBlur} name="password" className="w-75" placeholder="password" id="" required />
                        <br/>
                        {newUser && <input type="password" className="w-75 my-5" onBlur={handleBlur} name="password" placeholder="confirm password" id="" required />}
                        <br />
                        <button type="submit">
                        {newUser ? "Sign Up" : "Sign In"} </button> 
                    </form>
                    <input className="ml-5" type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser"/>
                    <label htmlFor="newUser">Create an account</label>
                
                    {
                         user.isSignedIn ? <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'logged in'} Successfully</p>:    <p style={{ color: 'red' }}>{user.error}</p>
                    }
                    
                    <button className="btn btn-warning sign" onClick={fbSignIn}>Continue With Facebook</button>
                    <br />
                    {user.isSignedIn ? <button className="btn btn-warning sign" onClick={googleSigOut}>Sign Out from Google</button> : <button className="btn btn-warning sign" onClick={googleSignIn}>Continue with Google</button>

                    }
                    {
                        user.isSignedIn && <p>welcome , {user.name}</p>
                    }
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;