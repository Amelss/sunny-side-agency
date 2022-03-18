import React from 'react'

export default function PhotoTile() {
  return (
      <div>
          <div className='grid grid-cols-2 md:grid-cols-4 mt-20'>
              {/* ------- MOBILE IMAGES------- */}
              <img src="./images/mobile/image-gallery-milkbottles.jpg" alt="milk bottles" className='md:hidden' />
              <img src="./images/mobile/image-gallery-orange.jpg" alt="milk oranges" className='md:hidden' />
              <img src="./images/mobile/image-gallery-cone.jpg" alt="ice-cream cone" className='md:hidden' />
              <img src="./images/mobile/image-gallery-sugar-cubes.jpg" alt="sugar cubes" className='md:hidden' />
              
              {/* ------- DESKTOP IMAGES------- */}
                  <img src="./images/desktop/image-gallery-milkbottles.jpg" alt="milk bottles" className='hidden md:flex' />
              <img src="./images/desktop/image-gallery-orange.jpg" alt="milk oranges" className='hidden md:flex' />
              <img src="./images/desktop/image-gallery-cone.jpg" alt="ice-cream cone" className='hidden md:flex' />
              <img src="./images/desktop/image-gallery-sugarcubes.jpg" alt="sugar cubes" className='hidden md:flex' />

         </div>
          
    </div>
  )
}

