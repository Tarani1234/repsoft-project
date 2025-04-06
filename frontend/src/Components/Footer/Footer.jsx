import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
        <p className='footer-para'>Lorem Ipsum is simply dummy text of the </p>
          <div className='footer-images'>
             <img src='./facebook.png' alt='./'/>
             <img src='./google.png' alt='./'/>
             <img src='./message.png' alt='./'/>
             <img src='./Twitter.png' alt='./'/>
             <img src='./messanger.png' alt=''/>
          </div>
          <p className='coypright'>Copyright ® 2021 Lorem All rights Rcerved</p>
      </div>
      <nav className="footer-nav">
        <ul>
          <li><a href="#about">About us</a></li>
          <li><a href="#portfolio">Zeux</a></li>
          <li><a href="#contact">Portfolio</a></li>
          <li><a href="#portfolio">Careers</a></li>
          <li><a href="#contact">Contact us</a></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer





