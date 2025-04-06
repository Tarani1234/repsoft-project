import React from 'react'
import './Devices.css'
const Devices = () => {
  return (
    <div className='about-container'>
    <div className='about-main-container'>
      <div className='image-container'>
        <img src='./device.png' alt='About Us Image' />
      </div>
      <div className='about-text-container'>
        <h1>Compare <span className='shop'>Devices</span></h1>
        <p>
        Select from various numbers of <span className='shop'>gaming devices</span>, compare them and select which is best for you
        </p>
        <button className='btn-about'>Know More</button>
      </div>
    </div>
  </div>
  )
}

export default Devices
