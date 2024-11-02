import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { logo, logoLight } from "../../../assets/images";
import { navBarList } from "../../../constants";

function Header() {
    const [sidenav, setSidenav] = useState(false);
    const [category, setCategory] = useState(false);
    const [brand, setBrand] = useState(false);

    
    return (
        <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
            <div className="h-full container mx-auto px-4 relative">
                <div className="flex justify-between items-center h-full">
                    <Link to="/">
                        <div>
                            <img src={logo} className="w-20 object-cover" alt="not img" />
                        </div>
                    </Link>
                    <motion.ul
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="md:flex hidden justify-between items-center w-auto p-0 z-50 gap-2">
                        <>
                            {navBarList.map(({ _id, title, link }) => (
                                <NavLink key={_id} className={'flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0'} to={link}>
                                    <li>{title}</li>
                                </NavLink>
                            ))}
                        </>
                    </motion.ul>
                    <HiMenuAlt2 onClick={() => setSidenav(!sidenav)} className="md:hidden inline-block w-8 h-6 cursor-pointer" />
                    {sidenav && (
                        <div className="bg-black h-screen w-full fixed top-0 left-0 bg-opacity-80 text-gray-200 z-50">
                            <motion.div className="w-[80%] h-full relative" 
                                initial={{ x: -300, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}>
                                <div className="w-full h-full bg-primeColor p-6">
                                    <img
                                        className="w-28 mb-6"
                                        src={logoLight}
                                        alt="logoLight"
                                    />
                                    <ul className="flex flex-col gap-2 text-gray-200">
                                        {navBarList.map((item) => (
                                            <li className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0" key={item._id}>
                                                <NavLink to={item.link}>
                                                    {item.title}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-4">
                                        <h1 className="flex justify-between items-center cursor-pointer font-normal  text-lg text-gray-200  hover:text-white " onClick={() => setCategory(!category)}>
                                            Shop by Category{" "}
                                            <span>{category ? '-' : '+'}</span>
                                        </h1>
                                        {category && (
                                            <motion.ul
                                                initial={{ y: 15, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.4 }}
                                                className="text-sm flex flex-col gap-1"
                                            >
                                                <li className="headerSedenavLi">New Arrivals</li>
                                                <li className="headerSedenavLi">Gudgets</li>
                                                <li className="headerSedenavLi">Accessories</li>
                                                <li className="headerSedenavLi">Electronics</li>
                                                <li className="headerSedenavLi">Others</li>
                                            </motion.ul>
                                        )}
                                    </div>
                                    <div className="mt-4">
                                        <h1 className="flex justify-between items-center cursor-pointer font-normal  text-lg text-gray-200  hover:text-white " onClick={() => setBrand(!brand)}>
                                            Shop by Brand{" "}
                                            <span>{brand ? '-' : '+'}</span>
                                        </h1>
                                        {brand && (
                                            <motion.ul
                                                initial={{ y: 15, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.4 }}
                                                className="text-sm flex flex-col gap-1"
                                            >
                                                <li className="headerSedenavLi">New Arrivals</li>
                                                <li className="headerSedenavLi">Gudgets</li>
                                                <li className="headerSedenavLi">Accessories</li>
                                                <li className="headerSedenavLi">Electronics</li>
                                                <li className="headerSedenavLi">Others</li>
                                            </motion.ul>
                                        )}
                                    </div>
                                </div>
                                <span
                                    onClick={() => setSidenav(false)}
                                    className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                                >
                                    <MdClose />
                                </span>
                            </motion.div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;