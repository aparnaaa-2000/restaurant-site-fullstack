import React from 'react'

import './loginpage.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Loginpage() {
	const [data, setdata] = useState({
		username: "",
		password: "",

	})
	const navigate = useNavigate()


	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	console.log("dataaa", data);

	const setRegister = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setdata({ ...data, [name]: value });
	}
	console.log("user===>", data);
	const submitB = (e) => {
		e.preventDefault()
		setFormErrors(validate(data));
		setIsSubmit(true);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			console.log("username==>", data);
			axios.post("http://localhost:8000/login", data).then((values) => {
				console.log("values=====", values);
				localStorage.setItem("token", JSON.stringify(values.data.token))
				localStorage.setItem("login_id", JSON.stringify(values.data.datas._id))

				if (values.data.success == true) {

					navigate('/')
				}

			}).catch((err) => {
				console.log(err);
			})

		}


	}
	const validate = (value) => {
		const error = {};

		if (!value.username) {
			error.username = '*username is required';
		}
		if (!value.password) {
			error.password = '*password is required';
		}
		return error;


	}
	console.log(formErrors);


	return (

		//  <body className='body'>
		<div class="container-fluid box">
			<div class="screen1">
				<div class="screen__content2">
					<form class="login">
						<h3 className='log'>LOGIN</h3>
						<div class="login__field">
							<i class="login__icon fas fa-user"></i>
							<input type="text" class="login__input" placeholder="User name / Email" name='username' onChange={setRegister} /> <br />
							<span style={{ color: "red" }}>{formErrors.username}</span>
						</div>
						<div class="login__field">
							<i class="login__icon fas fa-lock"></i>
							<input type="password" class="login__input" placeholder="Password" name='password' onChange={setRegister} /> <br />
							<span style={{ color: "red" }}>{formErrors.password}</span>
						</div>
						<button class="button login__submit" onClick={submitB}>
							<span class="button__text">Log In Now</span>
							<i class="button__icon fas fa-chevron-right"></i>
						</button>
					</form>
					<div class="social-login">
						{/* <h3>log in via</h3> */}
						<div class="social-icons">
							<a href="#" class="social-login__icon fab fa-instagram"></a>
							<a href="#" class="social-login__icon fab fa-facebook"></a>
							<a href="#" class="social-login__icon fab fa-twitter"></a>
							{/* <i class="fa-sharp fa-solid fa-plate-utensils"></i> */}

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
