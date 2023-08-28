import "./Footer.scss";
import React from 'react'
import {FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";


const Footer = () => {
  return (
    <footer className="footer"> 
    <div className="footer-content">
      <div className="col">
       <div className="title">About</div>
       <div className="text">Web-based systems often lie at the heart of digitalisation. 
       Transforming your website from a one-way communication channel into a truly useful,
        interactive tool is a good first step in a web-development project.</div>
      </div>
      
      <div className="col">
      <div className="title">Contact</div>
      <div className="c-item">
        <FaLocationArrow />
         <div className="text"> A-44 T04 Noida sector2 Uttar Pradesh India
         </div>
              </div>
      <div className="c-item">
        <FaMobileAlt />
         <div className="text">Phone: 01204158051 </div>
              
      </div>
      <div className="c-item">
      <FaEnvelope />
      <div className="text">Email: info@mayawebtech.com
      </div>
      </div>
        
      </div>
      

      <div className="col">
      <div className="title">Categories</div>
      <span className="text">Headphones</span>
      <span className="text">Smart Watches</span>
      <span className="text">Bluetooth Speakers</span>
      <span className="text">Wireless Earbuds</span>
      <span className="text">Home Theatre</span>
      <span className="text">Projectors</span>

      
    </div>
    
    <div className="col">
      <div className="title">Pages</div>
      <span className="text">Home</span>
      <span className="text">About</span>
      <span className="text">Privacy Policy</span>
      <span className="text">Returns</span>
      <span className="text">Terms & Conditions</span>
      <span className="text">Contact Us</span>
      </div>
    </div>
    <div className="bottom-bar">
      <div className="bottom-bar-content">
        <div className="text">
          MAYA WEB TECH 2023 CREATED BY JS DEV. PREMIUM E-COMMERCE SOLUTION.
        </div>
        <img src={Payment} />
      </div>
    </div>
    
    
    </footer>
  )
}

export default Footer;