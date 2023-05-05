import React from 'react'
import './home.css'
import Navbar from './Navbar'
import bgImage from '../video/videobg2.mp4'
import Footer from './Footer'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Homepage() {


  const [menu, setmenu] = useState([]);
  console.log(menu);

  const cat = (data) => {
    console.log(data);
    axios.get(`http://localhost:8000/addfood/category/${data}`).then((details) => {
      setmenu(details.data.details);
    })
  }
  const all = () => {
    axios.get(`http://localhost:8000/addfood/categories`).then((detailss) => {
      console.log(detailss.data.details);
      setmenu(detailss.data.details);
    })
  }
const navigate = useNavigate()
  const viewpage = (id) => {
    console.log(id);
    navigate(`/singleview/${id}`)
  }





  return (
    <div>
      <div className='row'><Navbar /></div>
      <div className='container-fluid'>

        <div className='row'>
          <div className='col-sm-3'>
            <video autoPlay loop muted className='video'>
              <source src={bgImage} type='video/mp4'></source>
            </video>
          </div>
          <div className='col-sm-3'></div>
          <div className='col-sm-3 '><h1 className='root'>EPICURE</h1>
            <h3 className='type'> good food good life</h3></div><br /><br />
            
          {/* <div className='row'>
              <div className='col-sm-3' id='burger'><img src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="img-fluid" alt="..."></img></div>
            <div className='col-sm-3' id='pizza'> <img src="c" class="img-fluid" alt="..."></img></div>
            <div className='col-sm-3' id='brownie'><img src="https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="img-fluid" alt="..."/></div>
            </div> */}
          {/* <div className='col-sm-4'><img src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="img-fluid" alt="..."/></div> */}
          <div className='row ' >
            <div className='del'>SPECIAL MENUS</div></div>
          <div className='row' id='sel' >

            <div className='col'><button type="button" class="btn btn-secondary" style={{ height: "10vh", width: "10vw" }} onClick={all}>ALL</button></div>
            <div className='col'><button type="button" class="btn btn-secondary" style={{ height: "10vh", width: "10vw" }} onClick={() => { cat("drink") }} >DRINKS </button></div>
            <div className='col'> <button type="button" class="btn btn-secondary" style={{ height: "10vh", width: "10vw" }} onClick={() => { cat("pasta") }}>PASTA</button></div>
            <div className='col'> <button type="button" class="btn btn-secondary" style={{ height: "10vh", width: "10vw" }} onClick={() => { cat("burger") }}>BURGER</button></div>
            <div className='col'> <button type="button" class="btn btn-secondary" style={{ height: "10vh", width: "10vw" }} onClick={() => { cat("icecreams") }}>ICECREAMS</button></div>
            <div className='col'> <button type="button" class="btn btn-secondary" style={{ height: "10vh", width: "10vw" }} onClick={() => { cat("rice") }}>RICE</button></div>
            <div className='col'> <button type="button" class="btn btn-secondary" style={{ height: "10vh", width: "10vw" }} onClick={() => { cat("bakes") }}>BAKES</button></div>
          </div>

          <br /> <br />






          {/* <div id="root"></div> */}



          ________________________________________________________________________________________________________________________________________________________________________________________________________________________________







          <div className='row'>

            {menu.map((data) =>
              <div className='col-sm-3' id='card1'>
                <div class="card-group">
                  <div class="card">
                    <img src={`/images/${data.image}`} />
                    <div class="card-body">
                      <h5 class="card-title">{data.fooditem}</h5>
                      {/* <p class="card-text">{data.about}</p> */}
                      <p class="card-text">PRICE: ₹{data.price}</p>
                      <button type="button" class="btn btn-dark" onClick={() => { viewpage(data._id) }}>View</button>
                    </div>
                  </div>
                </div>
              </div>

            )}
          </div>  <br />


          <div className='row'>

            <Footer />
          </div>


        </div>
      </div>
    </div>
    // </div>

  )
}
