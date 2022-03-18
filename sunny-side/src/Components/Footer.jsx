import React from 'react'

export default function Footer() {
  return (
      <div>
          <div className='bg-middleBlueGreen'>
                <h1 className='text-3xl text-center font-barlow text-desCyan font-bold py-3'>sunnyside</h1>
            <div className='flex justify-center pt-6'>
                <p className='px-10 font-barlow text-desCyan'>About</p>
                <p className='px-10 font-barlow text-desCyan'>Services</p>
                <p className='px-10 font-barlow text-desCyan'>Projects</p>
            </div>
              
              <div className='flex justify-center py-10'>
                  <img src="./images/icon-facebook.svg" alt="facebook" className='px-5 '/>
                  <img src="./images/icon-instagram.svg" alt="instagram" className='px-5'/>
                  <img src="./images/icon-twitter.svg" alt="twitter" className='px-5'/>
                  <img src="./images/icon-pinterest.svg" alt="pinterest" className='px-5'/>
              </div>
              
  
  
  




              




              <div class="text-center pt-5 pb-2 text-[8px] text-desBlue"> Challenge by{" "} <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor</a>. Coded by <a href="#">Ameley Kwei-Armah</a>.
              </div>
          </div>
          
          
    </div>
  )
}

