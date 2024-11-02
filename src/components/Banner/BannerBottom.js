import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { CgRedo } from "react-icons/cg";
function BannerBottom() {
  return (
    <div className='w-full bg-white border-b-[1px] py-4 border-b-gray-200 px-4'>
      <div className='mx-auto container h-20 flex justify-between items-center md:flex-row flex-col'>
        <div className='flex items-center gap-2 bg-white shadow-sm hover:shadow-md w-72 duration-300'>
            <span className='w-6 text-center font-bold'>2</span>
            <p className='text-center text-gray-500'>Two years warranty</p>
        </div>
        <div className='flex items-center gap-2 bg-white shadow-sm hover:shadow-md w-72 duration-300'>
            <span className='w-6 text-center font-bold ml-2'>
                <MdLocalShipping/>
            </span>
            <p className='text-center text-gray-500'>Free shipping</p>
        </div>
        <div className='flex items-center gap-2 bg-white shadow-sm hover:shadow-md w-72 duration-300'>
            <span className='w-6 text-center font-bold ml-2'>
                <CgRedo/>
            </span>
            <p className='text-center text-gray-500'>Return policy in 30 days</p>
        </div>
      </div>
    </div>
  )
}

export default BannerBottom;
