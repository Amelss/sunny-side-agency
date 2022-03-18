import React from 'react'

export default function TestimonialCard({ img, quote, personName, position }) {
    
  return (
    <div>
      <div className="text-center px-6">
        <img src={img} alt="emily" className="rounded-full mx-auto mt-20" />

        <p className='py-14 px-10 font-barlow text-grayishBlue md:px-1 lg:px-4 xl:px-14'>{quote}</p>
        <p className='font-fraunces font-bold text-xl'>{personName}</p>
        <p className='pt-4 text-grayBlue font-barlow'>{position}</p>
      </div>
    </div>
  );
}

