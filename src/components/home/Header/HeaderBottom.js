import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function HeaderBottom() {
    const [show, setShow] = useState(false);
    const [showUser, setShowUser] = useState(false);
    const products = useSelector((state) => state.orebiReducer.products)
    return (
        <div className="w-full bg-[#F5F5F3] relative px-4 md:px-0">
            <div className="mx-auto container">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full px-0 pb-4 lg:pb-0 h-full lg:h-24">
                    <div
                        onClick={() => setShow(!show)}
                        className="flex h-14 cursor-pointer items-center gap-2 text-primeColor">
                        <HiOutlineMenuAlt4 className="w-5 h-5" />
                        <p className="text-[14px] font-normal">Shop by Category</p>
                        {show && (
                            <motion.ul
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="bg-primeColor p-4 w-auto h-auto absolute top-20 z-50"
                            >
                                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                    Accessories
                                </li>
                                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                    Furniture
                                </li>
                                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                    Electronics
                                </li>
                                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                    Clothes
                                </li>
                                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                    Bags
                                </li>
                                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                    Home appliances
                                </li>
                            </motion.ul>
                        )}
                    </div>
                    <div className="w-full relative bg-white text-primeColor lg:w-[600px] h-[50px] flex justify-between items-center gap-2 px-6">
                        <input type="text" className="h-full  outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]" placeholder="Search Product" />
                        <FaSearch className="w-5 h-5" />
                    </div>
                    <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative" >
                        <div className="flex item-center mt-2 lg:mt-0" onClick={() => setShowUser(!showUser)}>
                            <FaUser />
                            <FaCaretDown />
                            {showUser && (
                                <motion.ul
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute top-6 right-3 z-50 bg-primeColor w-44 text-[#767676] h-auto p-4 pb-6"
                                >
                                    <Link to="/signin">
                                        <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                            Login
                                        </li>
                                    </Link>
                                    <Link onClick={() => setShowUser(false)} to="/signup">
                                        <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                            Sign Up
                                        </li>
                                    </Link>
                                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                        Profile
                                    </li>
                                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                        Others
                                    </li>
                                </motion.ul>
                            )}
                        </div>
                        <Link to="/cart">
                            <div className="relative">
                                <FaShoppingCart />
                                <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
                                    {products.length > 0 ? products.length : 0}
                                </span>
                            </div>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderBottom;