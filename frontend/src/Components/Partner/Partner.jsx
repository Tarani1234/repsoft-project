import React from 'react'
import './Partner.css'
const Partner = () => {
  return (
    <div className='partner-container'>
    <div className='main-content-partner'>
      <div className='heading-partner'>
        <h1>Our <span className='partner'>Partners</span></h1>
      </div>
    </div>

    {/* Partner images in a row */}
    <div className='partner-container-image'>
       <img src='./marker.png' alt='Partner 1'/>
       <img src='./axie.png' alt='Partner 2'/>
       <img src='./theta.png' alt='Partner 3'/>
       <img src='./polygon.png' alt='Partner 4'/>
    </div>
</div>
  )
}

export default Partner
