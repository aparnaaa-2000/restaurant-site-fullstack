import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Navbar from './Navbar'
import './profile.css'

export default function Profile() {
  const [state,setstate]= useState([]);
  console.log("state",state);


  useEffect(()=>{
    const token= JSON.parse(localStorage.getItem("token"))
    console.log("token",token);

    
    axios.get(`http://localhost:8000/profile`,{
      headers:{
        'Content-Type': 'application/json',
        "Authorization":`barer ${token}`    
      }
    }).then((response)=>{
      console.log(response.data.data);
      setstate(response.data.data)
    })
  },[])



  
  return (
    <div >
        <div className='nav'><Navbar/></div>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col'>

              
<div className='h'>
<div class="card" id='card'>
      <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" id='img' class="card-img-top" alt="..."/>
      <br />
      {state.map((values)=>(
      <div class="card-body1">
       
        
        <div className='col'>
          NAME:{values.name}  </div>
         <div> EMAIL: {values.email}</div>
         <div> USERNAME: {values.username}</div>
         {/* <div> ADDRESS: {values.adress}</div> */}
        </div>
        
        ))}
      </div>
    </div>
    </div>
                
            </div>
        </div>
    // </div>
    // </div>
  )
}

