import React from 'react'
import Breadcrumbs from '../../components/home/pageProps/Breadcrumbs'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div className='max-w-container mx-auto'>
            <Breadcrumbs title={'About'} prevLocation={'Shop'} />
            <div className='pb-10 px-4'>
                <h1 className='max-w-[600px] text-base text-lightText'>
                    <span className='text-primeColor font-semibold text-lg'>Orebi</span>
                    is one of the world's leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.
                </h1>
                <Link to={'/shop'}>
                    <button className='w-52 h-10 bg-primeColor text-white hover:bg-black duration-300 mt-4'>Continue Shopping</button>
                </Link>
            </div>
        </div>
    )
}

export default About
