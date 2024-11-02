import React from 'react'
import Category from './shopBy/Category'
import Color from './shopBy/Color'
import Brand from './shopBy/Brand'
import Price from './shopBy/Price'

function ShopSideNav() {
  return (
    <div className='flex flex-col w-full gap-6'>
      <Category />
      <Color/>
      <Brand/>
      <Price/>
    </div>
  )
}

export default ShopSideNav
