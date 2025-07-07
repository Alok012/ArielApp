import React from 'react'
import { FaCheck } from "react-icons/fa6";
const CheckboxTick = () => {
  return (
    <div className='rounded-full h-6 w-6 bg-[#f7effb] flex justify-center items-center'>
      <FaCheck className='text-[#972dc5] ' size={12}/>
    </div>
  )
}

export default CheckboxTick;
