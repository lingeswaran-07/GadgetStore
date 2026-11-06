import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img 
          src="https://cdn2.iconfinder.com/data/icons/e-commerce-and-online-shopping-5/100/gadgets-128.png" 
          alt="Gadgets Store Logo"  
          height='60px' 
          width='60px'
        />
        <p>SHOPIFY</p>
      </div>
      <ul className='footer-links'>
        <li>Home</li>
        <li>Products</li>
        <li>Categories</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <div className='footer-social-icon'>
        <div className='foot-icons-container'>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png" 
            alt="Instagram" 
            height='40px' 
            width='40px' 
          />
        </div>
        <div className='foot-icons-container'>
          <img 
            src="https://icons.veryicon.com/png/128/business/third-party-sharing-payment/linkedin-98.png" 
            alt="LinkedIn" 
            height='40px' 
            width='40px' 
          />
        </div>
        <div className='foot-icons-container'>
          <img 
            src="https://cdn0.iconfinder.com/data/icons/tuts/256/whatsapp.png" 
            alt="WhatsApp" 
            height='40px' 
            width='40px' 
          />
        </div>
      </div>
      {/* Optional copyright section */}
      <div className='footer-copyright'>
        <hr />
        <p>© 2024 Gadgets Store. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
