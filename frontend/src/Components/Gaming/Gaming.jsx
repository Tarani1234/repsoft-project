import React from 'react'
import './Gaming.css'
const Gaming = () => {
  return (
   <div className='about-container'>
   <div className='about-main-container'>
   <div className='about-text-container'>
       <h1>Future of <span className='shop'>Gaming</span></h1>
       <p>
       with <span className='shop'>VR,Metaverse & cloud gaming</span> Next level Graphics and sounds no matter where you are with our <span className='shop'>VR and cloud gaming</span> compatibility
       </p>
       <button className='btn-about'>Know More</button>
     </div>

     <div className='image-container'>
       <img src='./Vitual.png' alt='About Us Image' />
     </div>
     
   </div>
 </div>
  )
}

export default Gaming
