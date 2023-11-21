import React from 'react'
import image36 from '../assets/images/image 36.png'
import check from '../assets/images/check.png'



const Choose = () => {
  return (
    <section className="container flex flex-col justify-between gap-y-[4.5rem]">
      <div className='flex flex-col lg:flex-row justify-between items-center gap-[8rem]'>
        <div className="w-full h-[350px]  mx-auto relative">
          <img
            src={image36}
            alt=""
            
            className="z-10 absolute bottom-0 right-[3.25rem] left-[30%] w-[40%] lg:w-[50%]"
          />
          <div className="bg-[#FFC567] w-[385px] h-[128px] rounded-[10px] absolute bottom-0 left-[20%]"></div>
        </div>
        <div className='w-full h-[350px] flex flex-col  space-y-4'>
          <h3 className='heading'>Why Choose Us?</h3>
          <ul className=' h-full flex flex-col justify-between'>
            <li className='flex items-center space-x-2'>
                <img src={check} alt="" className='w-[20px]' />
                <span>Safety First Quality Must</span>
            </li>
            <li className='flex items-center space-x-2'>
                <img src={check} alt="" className='w-[20px]' />
                <span>Patient Centric Approach</span>
            </li>
            <li className='flex items-center space-x-2'>
                <img src={check} alt="" className='w-[20px]' />
                <span>Focused Leadership</span>
            </li>
            <li className='flex items-center space-x-2'>
                <img src={check} alt="" className='w-[20px]' />
                <span>Cutting-Edge Technology</span>
            </li>
            <li className='flex items-center space-x-2'>
                <img src={check} alt="" className='w-[20px]' />
                <span>Transparent Pricing</span>
            </li>
            <li className='flex items-center space-x-2'>
                <img src={check} alt="" className='w-[20px]' />
                <span>Coordinated Care</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='p-5 lg:p-10 '>
        <h3 className='heading'>Welness, Compassion, Quality</h3>
        <p className='lg:w-[70%] text-xl'>They live in Bookmarks grove right at the cost of Semantics, a large language ocean. A small river named Duden flows by their place and supplies it.</p>
        <button className='btn'>Take An Appointment</button>
      </div>
    </section>
  );
}

export default Choose