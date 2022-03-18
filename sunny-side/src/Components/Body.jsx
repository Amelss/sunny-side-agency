import React from 'react'

export default function Body() {
  return (
    <div className='grid grid-cols-1 mt-20 lg:grid-cols-2 auto-rows-auto lg:mt-96 pt-10 w-full 2xl:pt-72'>
      <img src="./images/mobile/image-transform.jpg" alt="egg" className=' lg:hidden' />
     
      <div className='bg-white'>
          <div className='py-20 px-6'>
            <h1 className='font-fraunces font-bold text-center text-4xl tracking-wide lg:text-left lg:w-96  '>Transform your brand</h1>
            <p className='py-8 font-barlow text-grayishBlue'>We are a full-service creative agency specializing in helping brands grow fast. 
            Engage your clients through compelling visuals that do most of the marketing for you.</p>
          
           <button className='uppercase font-fraunces py-8'>Learn More</button>
        </div>
       
      </div>
        <img src="./images/desktop/image-transform.jpg" alt="egg" className='hidden lg:flex w-full' />
       
      
    </div>
  )
}

