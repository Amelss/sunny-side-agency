import React from 'react'
import TestimonialCard from './TestimonialCard';
import TestimonialData from './TestimonialData';


export default function Testimonials({img, quote, personName, position}) {

      const testimonies = TestimonialData.map((testimony) => {
        return <TestimonialCard key={testimony.id} {...testimony} />;
      });

  return (
      <div>
          

          <div className='grid grid-cols-1 md:grid-cols-3'>
                  {testimonies}
          
          </div>
      
    </div>
  );
}

