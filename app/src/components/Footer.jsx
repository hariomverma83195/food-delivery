import React from "react";
import { Link } from "react-router-dom";
import '../pages/Home.css'

const Footer = () => {
  return (
    <>
    <footer>
  <div className="footer-links">
    <Link to="/about">About Us</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/privacy">Privacy Policy</Link>
  </div>
  <div className="footer-download flex align-center justify-center flex-column w-100">
    <a href="#" target="_blank" rel="noopener noreferrer" className="w-60 my-5">
      <img
        src="https://th.bing.com/th/id/R.238bbd1132e38a6e4a442044c9bf4ed7?rik=uYAh1M7FStECgw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fget-it-on-google-play-png-download-app-1251.png&ehk=oLmCGyhysO4yoit9Ya1MtJcz%2bAWKs7mN09Te1t5GzVU%3d&risl=&pid=ImgRaw&r=0"
        alt="Download on Play Store"
      />
    </a>
  </div>
  <div className="social-links flex align-center justify-center flex-column w-100">
    <a href="#" target="_blank" rel="noopener noreferrer" className="w-40 my-5">
      <img src="https://www.seekpng.com/png/full/97-973992_facebook-twitter-instagram-logo-png-clip-art-free.png" alt="Facebook" />
    </a>
  </div>
  </footer>
  <div className="textCenter">&copy; 2025. FoodDelivery</div>
  </>
  )
}

export default Footer
