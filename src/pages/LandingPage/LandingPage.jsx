import React from 'react'
import CommonContainer from '../../components/CommonContainer'
import { images } from '../../assets/images'
import GroceryContainer from './Components/GroceryContainer/GroceryContainer'
import AboutContainer from './Components/AboutUsContainer/AboutContainer'
import ProductContainer from './Components/ProductContainer/ProductContainer'


const LandingPage = () => {
  return (
    <div className=''>
    
   <CommonContainer className={" bg-blue-dark grocery-container"}>
      <GroceryContainer/>
   </CommonContainer>
   
   <AboutContainer/>
   <ProductContainer/>

    </div>
  )
}

export default LandingPage