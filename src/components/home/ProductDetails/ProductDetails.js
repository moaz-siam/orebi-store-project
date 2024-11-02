import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../pageProps/Breadcrumbs'
import { useLocation } from 'react-router-dom';
import ProductsOnSale from '../pageProps/productDetails/ProductsOnSale';
import ProductInfo from '../pageProps/productDetails/ProductInfo';

function ProductDetails() {
    const location = useLocation();
    const [prevLocation, setPrevLocation] = useState("");
    const [productInfo, setproductInfo] = useState([]);
    useEffect(() => {
        setPrevLocation(location.pathname);
        setproductInfo(location.state.item);
    }, [prevLocation]);
    // console.log(prevLocation);
    // console.log(location.state.item);
    
  return (
    <div className='w-full mx-auto border-b-[1px] border-b-gray-300'>
      <div className='max-w-container mx-auto px-4'>
        <Breadcrumbs title={""} prevLocation={prevLocation}/>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4'>
        <div className='h-full'>
            <ProductsOnSale/>
        </div>
        <div className="h-full xl:col-span-2">
            <img
              className="w-full h-full object-cover"
              src={productInfo.img}
              alt={productInfo.img}
            />
          </div>
          <div className="h-full w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
            <ProductInfo productInfo={productInfo} />
          </div>
      </div>
    </div>
  )
}

export default ProductDetails
