import React from 'react'
import { images } from '../../../../assets/images'

const GroceryContainer = () => {
  return (
    <div className='flex md:flex-row flex-col  justify-between md:gap-8'>
        <div className='flex flex-col justify-between flex-1'>
          <div>
              <p className=' max-w-[748px] md:w-[90%]  lg:text-5xl md:text-3xl sm:text-lg text-lg text-white font-semibold relative gr-head-text'>
              Simplify Your <span className='text-yellow-600'>Shopping</span> Routine with Our <span className='text-yellow-600'>Grocery</span> App</p>
              <p className=' max-w-[700px] text-white text-left md:text-base text-sm py-6 my-6'>
              We are dedicated to empowering local businesses by providing them with an intuitive and efficient online marketplace to streamline their operations and enhance their growth potential.</p>
          </div>
          <div className='flex md:justify-start justify-center items-center mb-24 gap-7 px-4 md:px-0'>
           <div className='button-1'>
            <img src={images.AppStore} alt='app-store' />
           </div>
           <div className='button-1'>
            <img src={images.PlayStore} alt='app-store' />
           </div>
          </div>
        </div>
        <div className='flex-1 px-4 md:px-0'>
            <img src={images.MobImage} alt='mob-im' />
        </div>
       </div>
  )
}

export default GroceryContainer