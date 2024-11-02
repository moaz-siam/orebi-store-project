import React from 'react'
import Bannner from '../../components/Banner/Bannner'
import BannerBottom from '../../components/Banner/BannerBottom'
import Sale from '../../components/home/Sale/Sale'
import NewArrival from '../../components/home/New Arrivals/NewArrival'
import Bestsellers from '../../components/home/Bestsellers/Bestsellers'
import YearProduct from '../../components/home/YearProduct/YearProduct'
import SpecialOffers from '../../components/home/Special Offers/SpecialOffers'

function Home() {
  return (
    <div className='w-full mx-auto'>
           <Bannner/>
          <BannerBottom/>
          <div className='container mx-auto'>
          <Sale/>
          <NewArrival/>
          <Bestsellers/>
          <YearProduct/>
          <SpecialOffers/>
          </div>
    </div>
  )
}

export default Home
