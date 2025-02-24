import React from 'react'
import './Footer.css'
import { FaBlog, FaLinkedin, FaYoutube } from 'react-icons/fa6';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        
      <div className='footer'>
        <div className="footer_content">
            <div className="footer_content_left">
                <h2><FaBlog /> React Blog</h2>
            </div>
            <div className="footer_content_center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Products</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer_content_right">
                <h2>GET IN TOUCH</h2>
                <ul>
               
                    <li>Phone: (+20) 1111-11111</li>
                    <li>Email: aliadam081194@gmail.com</li>
                    <li>Address:Egypt , Cairo</li>
                </ul>
            </div>
            <div className="footer_social-icons">
              <h2>CONNECT WITH US</h2>
                    <ul>
                        <li><FaFacebookSquare className='icon'/></li>
                        <li><FaTwitterSquare className='icon'/> </li>
                        <li><FaLinkedin className='icon'/> </li>
                        <li><FaYoutube className='icon'/> </li>
                        <li><FaInstagramSquare className='icon'/> </li>
                    </ul>
                </div>
        </div>
        <hr />
        <p className="footer_copyright">Copyright 2025 @ALI ADAM . All right Reserved</p>
    </div>
    </div>
  )
}

export default Footer