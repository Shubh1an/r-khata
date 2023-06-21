import React from 'react'
import CommonContainer from '../../../../components/CommonContainer'
import { images } from '../../../../assets/images'

const ProductContainer = () => {
  return (
    <div className='relative' style={{background:" rgba(0, 168, 255, 0.05)"}} id='service'>
        <CommonContainer>
            <div className='flex flex-col w-fit md:flex-row items-center justify-between md:px-14 px-[10%] gap-5 rounded-[50px] bg-white mb-32 absolute -top-[9.5rem] left-[11%] right-[11%] md:h-[300px] xl:w-[77%]'>
                <div><img src={images.ProductImage} alt='product-gif' /></div>
                <div className='md:text-lg max-w-[761px] '>We pride ourselves on offering a user-friendly and secure platform that ensures a seamless experience for both vendors and buyers. 
</div>
            </div>
            <div className='grid-container mt-48'>
                <div className='px-6 pt-7 bg-yellow-500 item-a'>
                    <p className='md:text-3xl text-lg text-white font-semibold mb-5'>Products for Sale:</p>
                    <p className='mb-28 text-left text-sm md:text-base'>Discover an extensive range of products available for purchase on Rkhata. From the latest gadgets and trendy fashion items to home appliances and health & wellness essentials, we have it all. Our diverse catalog ensures that you'll always find something that suits your style and meets your requirements.</p>
                </div>
                <div className='px-6 pt-7 bg-blue-dark item-a'>
                    <p className='md:text-3xl text-lg  font-semibold mb-5 text-yellow-600'>Pick Up Services:</p>
                    <p className='mb-28 text-left text-sm md:text-base text-white'>We understand that time is valuable, which is why we offer a convenient pick-up service for your purchased items. If you prefer to collect your products yourself, simply choose the pick-up option during checkout. We'll ensure your order is ready for you to pick up at your designated location.</p>
                </div>
                <div className='px-6 pt-7 bg-yellow-500 item-c flex md:flex-col flex-row justify-between items-center gap-7'>
                    <div>
                        <p className='md:text-3xl text-lg text-white font-semibold mb-5'>Online Shopping: </p>
                        <p className='mb-28 text-left text-sm md:text-base '>Explore our vast collection of products from renowned brands, carefully curated to offer you the best selection. With just a few clicks, you can browse through various categories and find exactly what you're looking for. Enjoy a convenient and secure shopping experience right from the comfort of your own home.</p>
                    </div>
                    <img src={images.ShopImage} alt='shop' className='mb-56 max-w-96 w-3/5' />
                </div>
                <div className='px-6 pt-7 bg-blue-dark item-d flex justify-between gap-7'>
                    <div>
                        <p className='md:text-3xl text-lg font-semibold mb-5 text-yellow-600'>Drop Services</p>
                        <p className='mb-28 text-left text-sm md:text-base text-white '>In addition to pick-up services, we also provide hassle-free drop services. If you find it more convenient to have your products delivered directly to your doorstep, we've got you covered. Our reliable delivery partners will ensure your items are safely transported to your specified address, saving you time and effort.</p>
                    </div>
                    <img src={images.ScooterImage} alt='shop' className=' w-2/5 aspect-auto' />
                </div>
            
                
               
            </div>
        </CommonContainer>
    </div>
  )
}

export default ProductContainer