import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div>
       
        {/* <section>Footer Example 4</section> */}
        <footer className="footer-distributed">
          <div className="footer-left">
            <h3>EPICURE<span>logo</span></h3>
            <p className="footer-links">
              <a href="/home" className="link-1">Home</a>
              <a href="/login">Login</a>
              <a href="/registration">Registration</a>
              <a href="/profile">Profile</a>
              <a href="/addfood">Add-food</a>
              <a href="/cart">Cart</a>
              <a href="/wishlist">Wishlist</a>
              {/* <a href="#">Contact</a> */}
            </p>
            <p className="footer-company-name">EPICURE © 2015</p>
          </div>
          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker" />
              <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
            </div>
            <div>
              <i className="fa fa-phone" />
              <p>+1.555.555.5555</p>
            </div>
            <div>
              <i className="fa fa-envelope" />
              <p><a href="mailto:support@company.com">support@company.com</a></p>
            </div>
          </div>
          <div className="footer-right">
            <p className="footer-company-about">
              <span>About the company</span>
              Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
            </p>
            <div className="footer-icons">
              <a href="#"><i className="fa fa-facebook" /></a>
              <a href="#"><i className="fa fa-twitter" /></a>
              <a href="#"><i className="fa fa-linkedin" /></a>
              <a href="#"><i className="fa fa-github" /></a>
            </div>
          </div>
        </footer>
      

    </div>
  )
}
