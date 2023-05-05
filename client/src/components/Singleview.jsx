import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './singleview.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



// import { response } from 'express';

export default function Singleview() {

  const { id } = useParams()
  console.log("id", id);

  const [view, setview] = useState({})
  console.log("view", view);

  useEffect(() => {
    axios.get(`http://localhost:8000/addfood/singleview/${id}`).then((response) => {
      console.log("res", response.data);

      setview(response.data.data)
    }).catch(error => {
      console.log(error);
    })



  }, [])
  const addCart = (data) => {
    console.log("data",data);
const id = JSON.parse(localStorage.getItem("login_id"))
console.log("id",id)
    var cartData={
      productId:data,
      loginId:id,

    }
    axios.post(`http://localhost:8000/cart`,cartData).then((values) => {
      console.log(values);
      toast.success(values.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    })
  }
  
  const addwish =(datas)=>{
    console.log("datas",datas);
    const token = JSON.parse(localStorage.getItem("token"))
console.log("token",token);

var wishData ={
  productId:datas,
}
axios.post('http://localhost:8000/wishlist',wishData,{
  headers:{
     
    'Content-Type': 'application/json',
     "authorization":`barer ${token}`   
  }

}).then((response)=>{
  console.log("response",response);
  toast.success(response.data.message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  
  
}).catch((error)=>{
  console.log("errr",error);
}
)
  }






  return (
    <div>


      <div className='container-fluid' id='single'>
        <div className='col'>
          <div className='row'>
          <div>
        {/* <button >Successfully added to cart</button> */}
        <ToastContainer />
      </div>

            {/*                 
                <article className="cta">
          
          <img src={`/images/${view.image}`} />
          <div className="cta__text-column">
            <h2 style={{color:"black"}}>{view.fooditem}</h2>
            <p>{view.about}</p>
            <p>PRICE: ₹{view.price}</p>
           
          </div>
        </article> */}


            <div className="main">
              <ul className="cards" id='main'>
                <li className="cards_item">
                  <div className="card">
                    <div className="card_image">
                      <img src={`/images/${view.image}`} alt="mixed vegetable salad in a mason jar." />
                      <span className="card_price"><span>₹</span>{view.price}</span>
                    </div>
                    <div className="card_content">
                      <h2 className="card_title">{view.fooditem}</h2>
                      <div className="card_text">
                        <h7>{view.about}</h7>
                        {/* <hr /> */}
                        {/* <p>Served with your choice of dressing on the side: <strong>housemade ranch</strong>, <strong>cherry balsamic
                      vinaigrette</strong>, <strong>creamy chipotle</strong>, <strong>avocado green goddess</strong>, or <strong>honey mustard</strong>. Add your choice
                    of protein for $2 more. 
                  </p> */}
                        <div className='row'>

                          <small className='col' onClick={()=>{addCart(view._id)}}>   <br /><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                          </svg> <br /> add to cart </small>
                          {/* <div className='col'></div> */}

                          <small className='col' onClick={()=>{addwish(view._id)}}> <br />  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                          </svg> <br /> wishlist </small>
                        </div></div>
                    </div>
                  </div>

                </li>

              </ul>
            </div>


          </div>

        </div>

      </div>
    </div>
  )
}
