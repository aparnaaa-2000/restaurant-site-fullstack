import axios from 'axios';

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './wishlist.css'

export default function Wishlist() {

    const [wish,setWish]=useState([])
    console.log("wish",wish);

    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem("token"))
        console.log("token",token);
        axios.get(`http://localhost:8000/wishlist/viewwish`,{
          headers:{
            'Content-Type': 'application/json',
            "Authorization":`barer ${token}`    
          }

        }).then((response)=>{
            console.log("response",response);
            setWish(response.data.data)

        })
       
    },[])

    const dele =(id)=>{
      window.location.reload()
      console.log("id",id);
      axios.get(`http://localhost:8000/wishlist/delete/${id}`).then((response)=>{
        console.log("res",response);
      })

    }





  return (

    <div className='container-fluid' >
    <div className='row'>
        <div className='col' >


        <div class="row row-cols-2 row-cols-md-2 g-4" id='hey'>
  <div class="col-sm-3" >
    {/* {wish.map((datas)=>( */}
    {wish.map((values)=>(

    <div class="card"  >
      <img src={`/images/${values.image}`}
      //  src={`/images/${datas.image}`} 
       class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{values.fooditem}</h5>
        <p class="card-text">{values.price}</p>
        
       <div className='col' > <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>dele(values._id)}  width="25" height="25" fill="red" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                          </svg> <br />remove wishlist </div>
      </div>
    </div>
    ))}
     {/* ))}  */}
  </div>
  </div>


        </div>
    </div>
    </div>
  )
}
