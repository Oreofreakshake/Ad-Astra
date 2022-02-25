import React from 'react';
import assest from '../Assets/image.jpg';

const Slider = () => {
  return <div className='flex justify-center mt-1'>
      <img src={assest} className="max-w-full h-auto" alt=""></img>
  </div>;
};

export default Slider;
