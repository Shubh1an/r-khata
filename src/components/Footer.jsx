import React from 'react'
import CommonContainer from './CommonContainer'
import { FacebookIcon, InstIcom, TwitterIcon } from '../assets/svg'
import { images } from '../assets/images'

const Footer = () => {
  return (
    <div  id="contact-us">
        <CommonContainer className={"bg-blue-dark text-white py-14 px-3 md:px-2"}>
            <p className='text-3xl font-medium'>Let’s Talk.</p>
            <div className='smol-flexbox-grid gap-4 mt-11 '>
             <div className=''>
             <label className='block'>Your Name</label>
             <input className='h-12 border-white border mt-1 w-full bg-transparent' />
             </div>
             <div className=''>
             <label className='block'>Your Email</label>
             <input className='h-12 border-white border mt-1 w-full bg-transparent' />
             </div>
             <div className=''>
             <label className='block'>Phone Number</label>
             <input className='h-12 border-white border mt-1 w-full bg-transparent' />
             </div>
            </div>
            <div className='mt-3'>
             <label className='block'>Message</label>
             <input className='h-12 border-white border mt-1 w-full bg-transparent' />
             </div>
             <div className='flex justify-end w-full mt-4'>
                <img src={images.SendButton} alt='send-button' />
             </div>
             <div className='flex justify-center items-center flex-col w-full mt-28'>
                 <p>LET’S GET IN TOUCH</p>
                <div className='flex justify-center gap-1'>
                    <FacebookIcon/>
                    <InstIcom/>
                    <TwitterIcon/>
                </div>

             </div>
        </CommonContainer>
    </div>
  )
}

export default Footer