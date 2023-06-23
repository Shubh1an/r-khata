import React, { useState } from 'react'
import { BurgerIcon, CrossIcon, RkLogo } from '../assets/svg'

const Header = () => {
    const [open,setOpen]= useState(false)
    const [navlinks,setNavLinks] =useState([
        {to:"/",isActive:false,title:"About Us",id:"about-us"},
        {to:"/",isActive:false,title:"Service",id:"service"},
        {to:"/",isActive:false,title:"Contact Us",id:"contact-us"},
    ])
    const handleActiveClass=(nav)=>{
       let element= document.getElementById(nav?.id)
         
        const newNavlinks= navlinks.map(navt=>{if(navt.title===nav.title){return {...navt,isActive:true}} else return {...navt,isActive:false}})
        setNavLinks(newNavlinks)
        element.scrollIntoView({behavior:"smooth"})
    }
  return (
    <div className='w-full py-8 lg:px-[12%] md:px-[8%] bg-white relative'>
        <div className='mx-auto flex md:justify-between justify-center items-center'>
          <RkLogo />
          <div className='absolute right-4 block md:hidden' onClick={()=>setOpen(!open)}>
             {open?<BurgerIcon/>:<BurgerIcon/>}
          </div>
          <div className={`absolute w-full top-full ${!open&&"hidden"} md:block md:relative md:max-w-max z-10 bg-blue-dark md:bg-white`}>
            <ul className='flex flex-col  md:flex-row text-center justify-center gap-5 md:gap-12 list-none py-3 md:py-0 cursor-pointer'>
               {navlinks.map(nav=><li className={`md:pb-2 ${nav.isActive&&"border-b border-black"} text-white md:text-black my-2 md:my-2 pb-0`} onClick={()=>handleActiveClass(nav)}>{nav.title}</li>) }
               
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Header