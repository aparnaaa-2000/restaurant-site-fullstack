import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './cart.css'
 


import './cart.css'

export default function Cart() {



const[cart,setcart]=useState([]);
console.log("cart=====",cart);



const[price,setprice]= useState([]);
console.log("price===",price);


useEffect(()=>{
  let sum = 0;
  cart.forEach((forprice)=>{
    sum = sum + forprice.price * forprice.quantity
  })
  console.log("sum=====",sum);
  setprice(sum)
})

useEffect(()=>{
	const id =JSON.parse(localStorage.getItem("login_id"))
	console.log("loginid",id);
	axios.get(`http://localhost:8000/cart/viewcart/${id}`).then((response)=>{
		console.log("res==>",response);
		setcart(response.data.data)
	})
},[])

const delet = (id)=>{
  window.location.reload()
  console.log("id",id);
  axios.get(`http://localhost:8000/cart/delete/${id}`).then((response)=>{
    console.log("res",response);

  })
}



const increment = (id)=>{
  window.location.reload()
  axios.post(`http://localhost:8000/cart/increment/${id}`).then((addqnty)=>{
    console.log("addqnty",addqnty);
  })
}


const decrement = (idd)=>{
  window.location.reload()
  axios.post(`http://localhost:8000/cart/decrement/${idd}`).then((decqnty)=>{
    console.log("decqnty",decqnty);
  })
}





  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col'>
<div className="container mt-5 mb-5">
        <div className="d-flex justify-content-center row">
          <div className="col-md-8">
            <div className="p-2">
              <h2 style={{color:"white"}}>CART</h2>
              {/* <div style={{color:"white"}} className="d-flex flex-row align-items-center pull-right"><span className="mr-1">Sort by:</span><span className="mr-1 font-weight-bold">Price</span><i className="fa fa-angle-down" /></div> */}
            </div>
			       {cart.map((datas)=>(
            <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
              <div className="mr-1"><img className="rounded" src={`/images/${datas.image}`} width={70} /></div>
              <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{datas.fooditem}</span>
                <div className="d-flex flex-row product-desc">
                  {/* <div className="size mr-1"><span className="text-grey"></span><span className="font-weight-bold">&nbsp;M</span></div> */}
                  {/* <div className="color"><span className="text-grey">Color:</span><span className="font-weight-bold">&nbsp;</span></div> */}
                </div>
              </div>
              <div className="d-flex flex-row align-items-center qty"><i className="fa fa-minus text-danger" onClick={()=>{decrement(datas._id)}} />
                <h5 className="text-grey mt-1 mr-1 ml-1">{datas.quantity}</h5><i className="fa fa-plus text-success" onClick={()=>{increment(datas._id)}} /></div>
                <h5>₹{datas.price}</h5>
              <div>
                <h5 className="text-grey"></h5>
              </div>
              <div className="d-flex align-items-center" onClick={()=>{delet(datas._id)}}><i className="fa fa-trash mb-1 text-danger" /></div>
            </div>
			     ))} 
           
           
           
            
            <div className="d-flex flex-row align-items-center mt-3 p-4 bg-white rounded" ><a href='/payment'><button className="btn btn-warning btn-block btn-lg ml-2 pay-button" type="button">Proceed to Pay</button></a><b style={{color:"black",textAlign:"center",paddingLeft:"200px"}}> Total Price: {price}</b></div>
          </div>
        </div>
      </div>
                
            </div>
        </div>
    </div>
  )
}
