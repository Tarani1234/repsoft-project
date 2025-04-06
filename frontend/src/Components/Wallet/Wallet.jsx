import React from 'react';
import './Wallet.css'

const Wallet = () => {
  return (
    // <div className='flex justify-center items-center min-h-screen  p-6'>
    //   <div className='w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8  text-white p-8 rounded-lg shadow-lg'>
    //     <div className='text-center md:text-left flex-1'>
    //       <h1 className='lg:text-5xl md:text-5xl font-semibold'>Wallet & <span className='shop'>Rewards</span></h1>
    //       <p className='mt-4 text-lg max-w-md'>
    //         Play & Earn exciting rewards in the form of <span className='shop'>crypto</span>, merchandise, or game items.
    //       </p>
    //       <button className=' show-btn'>
    //         JOIN NOW
    //       </button>
    //     </div>

    //     <div className='flex justify-center flex-1'>
    //       <img src='./coin.png' alt='Crypto Coin' className='shop-image img' />
    //     </div>
    //   </div>
    // </div>
    <div className='about-container'>
        <div className='about-main-container'>
        <div className='about-text-container'>
            <h1>Wallet &  <span className='shop'>Rewards</span></h1>
            <p>
            Play & Earn exciting rewards in the form of <span className='shop'>crypto</span> , merchandise or game items
            </p>
            <button className='btn-about'>Know More</button>
          </div>
          <div className='image-container'>
            <img src='./coin.png' alt='About Us Image' />
          </div>
          
        </div>
      </div>
  );
};

export default Wallet;
