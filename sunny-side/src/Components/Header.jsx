import React, { useState } from 'react'
import Hamburger from './Hamburger'

export default function Header() {


    const [navBarOpen, setNavBarOpen] = useState(false)

    const handleOpen = () => {
        setNavBarOpen(!navBarOpen)
    }


  return (
      <div>
          <div className='flex justify-between py-7 items-center'>
              <h1 className='font-barlow font-bold text-white tracking-wide text-xl px-5 '>sunnyside</h1>
              
              <button onClick={handleOpen} className="relative">
                  {navBarOpen ? <ul className='absolute top-0 right-10 bg-white py-4 mt-8 px-20 w-80'>
                      <li className=" px-4 mx-4  py-2 text-grayBlue font-bold tracking-wide font-barlow text-sm">About</li>
                      <li className=" px-4 mx-4  py-2 text-grayBlue font-bold tracking-wide font-barlow text-sm">Services</li>
                      <li className=" px-4 mx-4  py-2 text-grayBlue font-bold tracking-wide font-barlow text-sm">Projects</li>
                      <li className=" px-4 mx-4 mt-2 font-fraunces bg-softYellow px-4 py-3 rounded-full font-bold uppercase text-xs"> Contact</li> </ul>
                      : <div></div>
                  }
                  <img src="./images/icon-hamburger.svg" alt="menu" className='px-5 lg:hidden' />
                 
              </button>



              <nav className='hidden lg:flex '>
                  <ul className='hidden lg:flex px-5 items-center'>
                       <li className='ml-4 text-white font-barlow text-sm'>About</li> 
                       <li className='ml-4 text-white font-barlow text-sm'>Services</li> 
                       <li className='ml-4 text-white font-barlow text-sm'>Projects</li> 
                       <li className='ml-8 font-fraunces bg-white px-4 py-2 rounded-full uppercase text-xs'>Contact</li>  
                  </ul>
              </nav>
             
         
              


          </div>
          <h1 className='font-fraunces text-white text-[50px] uppercase font-bold text-center tracking-widest'>We are creatives</h1>
          <img src="./images/icon-arrow-down.svg" alt="arrow" className='mx-auto mt-10 pt-10' />
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <img src="./images/mobile/image-header.jpg" alt="orange" className='absolute top-0 -z-10  lg:hidden' />
              <img src="./images/desktop/image-header.jpg" alt="orange" className='hidden lg:block absolute top-0 -z-10 col-span-2' />
              
          </div>
      </div>
  )
}

