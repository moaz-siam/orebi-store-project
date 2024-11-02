import React from 'react'
// import { newArrOne } from '../../../assets/images'
import Badge from './Badge'
import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/orebiSlice';
function Product(props) {
    const _id = props.productName;
    const idString = (_id) => {
        return String(_id).toLowerCase().split(" ").join("");
    };
    const rootId = idString(_id);

    const navigate = useNavigate();
    const productItem = props;
    const handleProductDetails = () => {
        navigate(`/product/${rootId}`, {
            state: {
                item: productItem,
            },
        });
    };
    const dispatch = useDispatch();
    return (
        <div className='w-full relative group'>
            <div className='max-w-80 max-h-80 relative overflow-y-hidden'>
                <div>
                    <img src={props.img} className='w-full h-full' alt="" />
                </div>
                <div className='absolute top-6 left-8 '>
                    {props.badge && <Badge text='New' />}
                </div>
                <div className='w-full absolute h-32 bg-white -bottom-[130px] group-hover:bottom-0 duration-700'>
                    <ul className='w-full h-full font-titleFont flex flex-col items-end justify-center px-2 border-l border-r gap-2'>
                        <li className='w-full cursor-pointer text-[#767676] duration-300 font-normal text-sm hover:text-primeColor hover:border-primeColor flex items-center justify-end border-b gap-2 pb-1'>
                            Compare
                            <span>
                                <GiReturnArrow />
                            </span>
                        </li>
                        <li
                        onClick={() =>{
                            dispatch(addToCart({
                                _id: props._id,
                                name: props.productName,
                                quantity: 1,
                                image: props.img,
                                badge: props.badge,
                                price: props.price,
                                colors: props.color,
                              }))
                        }}
                         className='w-full cursor-pointer text-[#767676] duration-300 font-normal text-sm hover:text-primeColor hover:border-primeColor flex items-center justify-end border-b gap-2 pb-1'>
                            Add to Cart
                            <span>
                                <FaShoppingCart />
                            </span>
                        </li>
                        <li
                        onClick={handleProductDetails}
                         className='w-full text-[#767676] cursor-pointer duration-300 font-normal text-sm hover:text-primeColor hover:border-primeColor flex items-center justify-end border-b gap-2 pb-1'>
                            View Details
                            <span>
                                <MdOutlineLabelImportant />
                            </span>
                        </li>
                        <li className='w-full text-[#767676] cursor-pointer duration-300 font-normal text-sm hover:text-primeColor hover:border-primeColor flex items-center justify-end border-b gap-2 pb-1'>
                            Add to Wish List
                            <span>
                                <BsSuitHeartFill />
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='max-w-80 border-[1px]  border-t-0 flex flex-col gap-1 px-4 py-4'>
                <div className='flex justify-between items-center font'>
                    <h2 className='text-lg font-titleFont text-primeColor'>{props.productName}</h2>
                    <p className='text-[#767676] text-[14px]'>${props.price}</p>
                </div>
                <div>
                    <p className='text-[#767676] text-[14px]'>{props.color}</p>
                </div>
            </div>
        </div>

    )
}

export default Product
