import React, { useState } from 'react'
import Breadcrumbs from '../../components/home/pageProps/Breadcrumbs'
import ShopSideNav from '../../components/pageProps/shopPage/ShopSideNav'
import ProductBanner from '../../components/pageProps/shopPage/ProductBanner'
import Pagination from '../../components/pageProps/shopPage/Pagination'

function Shop() {
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };
  return (
    <div className='max-w-container mx-auto'>
      <Breadcrumbs title={'Product'} prevLocation={' '}/>
      <div className='pb-10 w-full h-full flex gap-10'>
        <div className='w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full'>
            <ShopSideNav/>
        </div>
        <div className='w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10 px-4'>
            <ProductBanner/>
            <Pagination itemsPerPage={itemsPerPage}/>
        </div>
      </div>
    </div>
  )
}

export default Shop
