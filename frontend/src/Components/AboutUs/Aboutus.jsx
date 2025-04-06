import React from 'react'
import './Aboutus.css'
const Aboutus = () => {
  return (
    <>
      <div className='about-container'>
        <div className='about-main-container'>
          <div className='image-container'>
            <img src='./pic.png' alt='About Us Image' />
          </div>
          <div className='about-text-container'>
            <h1>About us</h1>
            <p>
              Here, in 3not3 we are as pleased as punch for a new era gaming under automation mechanics that help both the
              upright of e-sport infrastructure for players and organizers. Introducing striation for player monitor and asset service through which teams or service providers can easily communicate and arrange new features and services by exploring web-technology of 3not3.
            </p>
            <button className='btn-about'>Know More</button>
          </div>
        </div>
      </div>
    </>
 
  )
}

export default Aboutus
