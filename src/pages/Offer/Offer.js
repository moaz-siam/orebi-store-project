import React from 'react'
import SpecialOffers from '../../components/home/Special Offers/SpecialOffers'
import Breadcrumbs from '../../components/home/pageProps/Breadcrumbs'

function Offer() {
  return (
    <div className='mx-w-container mx-auto'>
        <Breadcrumbs title={'offer'} prevLocation={''}/>
      <div className='pb-10'>
        <SpecialOffers/>
      </div>
    </div>
  )
}

export default Offer
