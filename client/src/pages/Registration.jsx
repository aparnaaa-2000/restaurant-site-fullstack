import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import './registration.css'
// import { useEffect } from 'react'
// import { json } from 'express'



export default function Registration() {
  const[state,setstate]=useState({
    name:"",
    email:"",
    address:"",
    username:"",
    password:"",

  });
  
  console.log(state);
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);



  const setRegisterr= (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setstate({...state,[name]:value});
  }
  const submitb=(e)=>{
    e.preventDefault()
    setFormErrors(validate(state));
    setIsSubmit(true);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log("username",state);
    axios.post("http://localhost:8000/register/",state).then((response)=>{
      console.log("response",response);
      


    }).catch((err)=>{
      console.log(err);
    })

    }
    // setstate(state)
    
  }
  const validate = (value)=>{
    const error = {};
    const regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        var phoneno = /^[6-9]\d{9}$/;
        var mailformat = /^\w+([1.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        var strongPassword = new RegExp('(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[^A-Za-z0-9])(?=.{8,})')
        var passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 

    if(!value.name){
      error.name = "*name is required"
    }
    if(!value.email){
      error.email = "*email is required"
    }
    else if(!regex.test(value.email)){
      error.email = "this is not a valid email format!"
    }
    if(!value.address){
      error.address = "*address is required"
    }
    if(!value.username){
      error.username ="*username is required"
    }
    if(!value.password){
      error.password = "*password is required"
    }
    // if(!value.repassword){
    //   error.repassword = "*confirmation password is required"
    // }
    else if(!passwordRegExp.test(value.password)){
      error.password = "password must contain  alphabet, digit, special characters"

    }
    // if(value.password!==value.repassword){
    //   error.repassword = "Enter same password"
    // }
    return error ;
  }
  console.log(formErrors);
  
  
  return (
    // <body classNam/e='body '>
    <div class="container-fluid bin">
    <div class="screen1">
      <div class="screen__content1">
        <form class="login1">
          <h3 className='reg1'>REGISTRATION</h3>
        <div class="login__field1">
            <i class="login__icon1 fas fa-user"></i>
            <input type="text" class="login__input1 " placeholder="Fullname"  onChange={setRegisterr} name="name"/>
            <br />
            <span style={{color:"red"}}>{formErrors.name}</span>
          </div>
          <div class="login__field1">
            <i class="login__icon1 fas fa-user"></i>
            <input type="text" class="login__input1" placeholder=" Email"onChange={setRegisterr}  name="email"/> <br />
            <span style={{color:"red"}}>{formErrors.email}</span>
          </div>
          <div class="login__field1">
            <i class="login__icon1 fas fa-lock"></i>
            <input type="name" class="login__input1" placeholder="Address"onChange={setRegisterr} name="address"/> <br />
            <span style={{color:"red"}}>{formErrors.address}</span>
          </div>
          <div class="login__field1">
            <i class="login__icon1 fas fa-user"></i>
            <input type="text" class="login__input1" placeholder="User name " onChange={setRegisterr} name="username"/> <br />
            <span style={{color:"red"}}>{formErrors.username}</span>
          </div>
          <div class="login__field1">
            <i class="login__icon1 fas fa-lock"></i>
            <input type="password" class="login__input1" placeholder="Password"onChange={setRegisterr} name="password"/> <br />
            <span style={{color:"red"}}>{formErrors.password}</span>
          </div>
          <button class="button login__submit" onClick={submitb}  >
            <span class="button__text1">Create Account</span> 
            <i class="button__icon1 fas fa-chevron-right"></i>
          </button>				
        </form>
        <div class="social-login1">
          {/* <h3>log in via</h3> */}
          <div class="social-icons1">
            <a href="#" class="social-login__icon1 fab fa-instagram"></a>
            <a href="#" class="social-login__icon1 fab fa-facebook"></a>
            <a href="#" class="social-login__icon1 fab fa-twitter"></a>
          </div>
        </div>
      </div>
      <div class="screen__background">
        <span class="screen__background__shape screen__background__shape4"></span>
        <span class="screen__background__shape screen__background__shape3"></span>		
        <span class="screen__background__shape screen__background__shape2"></span>
        <span class="screen__background__shape screen__background__shape1"></span>
      </div>		
    </div>
  </div>
  // </body>
  )
  
  
}
