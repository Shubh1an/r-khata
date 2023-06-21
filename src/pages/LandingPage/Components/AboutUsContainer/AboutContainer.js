import React from 'react'
import CommonContainer from '../../../../components/CommonContainer'

const AboutContainer = () => {
  return (
    <div className='mb-48'  id='about-us'>
        <CommonContainer>
            <p className='text-blue-dark text-xl font-medium px-4 md:px-0'>ABOUT US</p>
            <div className='flex md:flex-row flex-col justify-between items-center mt-9 md:gap-8'>
              <p className='md:text-3xl text-xl font-bold max-w-[662px]'>Welcome to <span className='text-yellow-600'>RKhata</span>, the ultimate B2B platform designed to revolutionize the way local vendors connect and do business.</p>  
              <div className='px-[1px] bg-slate-200 h-36 hidden md:block'></div>
              <p className='md:text-xl text-base mt-8 md:mt-0  max-w-[748px] px-4 md:px-0'>Our platform serves as a dynamic hub where local vendors can showcase their products and services to a targeted audience of businesses and buyers. By joining RKhata, vendors gain instant access to a vast network of potential customers who are actively seeking quality products and services within their local communities.</p>
            </div>
        </CommonContainer>
    </div>
  )
}

export default AboutContainer