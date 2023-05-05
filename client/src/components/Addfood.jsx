import React from 'react'
// import Footer from './Footer'
import Navbar from './Navbar'
import './addfood.css'
import { useState } from 'react'
import axios from 'axios';



export default function Addfood() {
  const [add, setadd] = useState({
    fooditem: "",
    price: "",


  });
  console.log(add);


  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);



  const [file, setfile] = useState("");
  console.log("addfood==>", add);



  const setfood = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setadd({ ...add, [name]: value });

  }
  console.log("foodorder==>", add);

  console.log("formerror", formErrors);

  const validate = (value) => {
    const error = {};


    if (!value.fooditem) {
      error.fooditem = "*food item must be required"
    }
    if (!value.price) {
      error.price = "*price must be required"
    }

    return error;

  }

  const submitB = (e) => {
    e.preventDefault()
    setFormErrors(validate(add));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(add);
      if (file) {
        const data = new FormData();
        const filename = file.name
        data.append("name", filename)
        data.append("file", file)
        console.log("filedatas", data);
        axios.post(`http://localhost:8000/addfood/upload`, data).then((response) => {
          console.log(response);
        }).catch((err) => {
          console.log(err);
        })
      }
      axios.post(`http://localhost:8000/addfood`, add).then((response) => {
        console.log(response);
      })

    }

  }
  return (

    <div>
      <div className='row'>
        <Navbar />
      </div>
      <div className='container-fluid ' id='add' >
        <div className='row'  >
          <div className='col'>
            <label style={{ color: "white" }}>CATEGORY</label>

          <select class="form-select" name='category' onChange={setfood} aria-label="Default select example">
  <option selected>CATEGORIES:</option>
  <option value="drink">Drinks</option>
  <option value="pasta">Pasta</option>
  <option value="burger">Burgers</option>
  <option value="rice">Rice</option>
  <option value="bakes">Bakes</option>
  <option value="icecream">Icecreams</option>
</select>
           <br />




            {/* <label for="exampleInputEmail1" class="form-label" style={{color:"white"}}>UPLOAD AN IMAGE</label>
  <input type="image" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> */}

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label" style={{ color: "white" }}>FOOD ITEM</label>
              <input type="name" class="form-control" id="exampleInputEmail1" onChange={setfood} name='fooditem' aria-describedby="emailHelp" />
              <span style={{ color: "red" }}>{formErrors.fooditem}</span>

              {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
            </div>





            {/*                 
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" style={{color:"white"}}>ABOUT FOOD ITEM </label>
    <input type="name" class="form-control" id="exampleInputEmail1" name='about' aria-describedby="emailHelp"/>
  </div> */}
            


            <div class="form-floating">
              <p style={{ color: "white" }}>ABOUT FOOD ITEM</p>
              <textarea class="form-control" placeholder="Leave a comment here" name='about' onChange={setfood} id="floatingTextarea"></textarea>

              {/* <label for="exampleInputPassword1"  class="form-label" style={{color:"white"}}  >about</label> */}
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label" style={{ color: "white" }}>PRICE</label>
              <input type="name" class="form-control" onChange={setfood} name='price' id="exampleInputPassword1" />
              <span style={{ color: "red" }}>{formErrors.price}</span>
            </div>
            <div class="mb-3" className='img2'>
              <label for="image" style={{ color: "white" }}>UPLOAD AN IMAGE:</label>
              <input type="file" onChange={(e) => { setfile(e.target.files[0]); setadd({ ...add, image: e.target.files[0].name }); }} id="image" name="image"></input>

            </div>

            <button class="btn btn-primary" onClick={submitB}>Submit</button>






          </div>
        </div>


      </div>
    </div>

  )
}
