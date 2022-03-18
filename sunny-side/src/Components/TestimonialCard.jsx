import React from 'react'

export default function TestimonialCard({ img, quote, personName, position }) {
    
  return (
    <div>
      <div className="">
        <img src={img} alt="emily" className="rounded-full" />

        <p>{quote}</p>
        <p>{personName}</p>
        <p>{position}</p>
      </div>
    </div>
  );
}

