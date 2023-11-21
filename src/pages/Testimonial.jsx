import React from 'react'
import TestimonialPage from '../components/Testimonial/TestimonialPage';

const Testimonial = () => {
  return (
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">What our patient say</h2>
          <p className="text_para text-center">
            World-class care for everyone. Our health System Offers unmatched,
            expert health care.
          </p>
        </div>
        <TestimonialPage/>
      </div>
    </section>
  );
}

export default Testimonial