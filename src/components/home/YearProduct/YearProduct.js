import React from 'react'
import { Link } from 'react-router-dom'
import { productOfTheYear } from "../../../assets/images";
function YearProduct() {
    return (
        <Link to={'/shop'}>
            <div className='w-full h-80 bg-[#f3f3f3] mb-20 md:bg-transparent relative font-titleFont'>
                <img src={productOfTheYear} className='w-full h-full object-cover md:inline-block' alt="" />
                <div className='w-full md:w-2/3 xl:w-1/2 px-4 md:px-0 gap-5 absolute top-0 right-0 h-80 flex flex-col items-start justify-center'>
                    <h1 className="text-3xl font-semibold text-primeColor">
                        Product of The year
                    </h1>
                    <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
                        cupiditate modi amet! Facilis, aperiam quaerat.
                    </p>
                    <button className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold">
                        Shop Now
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default YearProduct
