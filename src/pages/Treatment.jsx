import React from 'react'
import image41 from '../assets/images/image 41.png'
import image42 from '../assets/images/image 42.png'
import image43 from '../assets/images/image 43.png'

const Treatment = () => {
  return (
    <div className='mb-[120px]' >
      <div className='flex flex-col container lg:ml-[20rem] lg:mr-[20rem] gap-[3rem]'>
        <h2 className=' heading leading-9 text-headingColor font-[700] '>Dedicated to provide the best treatment.</h2>
        <p className='text_para'>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine.
        </p>

        <div className='flex flex-col items-center lg:flex-row justify-between gap-[8.5rem]'>
            <div className='relative'>
                <img src={image41} className='w-[23rem]'  alt="" />
                <div className='bg-primaryColor w-[15rem] flex flex-col items-center text-white rounded-[10px] p-4 absolute left-5 bottom-[-37px]'>
                    <h4>For your health</h4>
                    <h2 className='text-xl '>Pediatrician</h2>
                </div>
            </div>
            <div className='relative'>
                <img src={image42} className='w-[23rem]'  alt="" />
                <div className='bg-primaryColor w-[15rem] flex flex-col items-center text-white rounded-[10px] p-4 absolute left-5 bottom-[-37px]'>
                    <h4>For your health</h4>
                    <h2 className='text-xl '>Cardiologist</h2>
                </div>
            </div>
            <div className='relative'>
                <img src={image43} className='w-[23rem]'  alt="" />
                <div className='bg-primaryColor w-[15rem] flex flex-col items-center text-white rounded-[10px] p-4 absolute left-5 bottom-[-37px]'>
                    <h4>For your health</h4>
                    <h2 className='text-xl '>Darmatologist</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Treatment