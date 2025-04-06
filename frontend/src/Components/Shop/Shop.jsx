import React from 'react'
import './Shop.css';
const Shop = () => {
  return (
    <div className='about-container'>
    <div className='about-main-container'>
      
    <div className='about-text-container'>
        <h1>Visit Our <span className='shop'>shop</span></h1>
        <p>
        Visit our shop to buy game items and our <span className='shop'>new merchandise</span> and enter giveaways!
        </p>
        <button className='btn-about'>Know More</button>
      </div>

      <div className='image-container'>
        <img src='./Groups.png' alt='About Us Image' />
      </div>
      
    </div>
  </div>

   

  )
}

export default Shop
