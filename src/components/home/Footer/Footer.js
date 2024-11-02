import React, { useState } from 'react'
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import { paymentCard } from "../../../assets/images";
import { motion } from "framer-motion";
function Footer() {
    const [emailInfo, setEmailInfo] = useState("");
    const [subscription, setSubscription] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    const emailValidation = (emailInfo) => {
        return String(emailInfo).toLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    }

    const handleSubscription = () => {
        if (emailInfo === "") {
            setErrMsg("Please provide an Email !")  
        } else if (!emailValidation(emailInfo)) {
            setErrMsg("Please provide an Email !")
        } else {
            setSubscription(true);
            setErrMsg("");
            setEmailInfo("");
        }
    }
    return (
        <div className='w-full py-20 bg-[#F5F5F3]'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 px-4 gap-10'>
                <div className='col-span-2'>
                    <h3 className="text-xl font-bodyFont font-semibold mb-6"> More about Orebi Shop</h3>
                    <div className="flex flex-col gap-6">
                        <p className="text-base w-full xl:w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint ab ullam, numquam nesciunt in.</p>
                        <ul className='flex items-center gap-2'>
                            <a
                                href="https://www.youtube.com/@reactjsBD"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                                    <FaYoutube />
                                </li>
                            </a>
                            <a
                                href="https://github.com/noorjsdivs"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                                    <FaGithub />
                                </li>
                            </a>
                            <a
                                href="https://www.facebook.com/Noorlalu143/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                                    <FaFacebook />
                                </li>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                                    <FaLinkedin />
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bodyFont font-semibold mb-6">Shop</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                            Accesories
                        </li>
                        <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                            Clothes
                        </li>
                        <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                            Electronics
                        </li>
                        <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                            Home appliances
                        </li>
                        <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                            New Arrivals
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bodyFont font-semibold mb-6">Your account</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                            Profile
                        </li>
                        <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                            Orders
                        </li>
                        <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                            Addresses
                        </li>
                        <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                            Account Details
                        </li>
                        <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                            Payment Options
                        </li>
                    </ul>
                </div>
                <div className="col-span-2 w-full flex items-center flex-col px-4">
                    <h3 className="text-xl font-bodyFont font-semibold mb-6">Subscribe to our newsletter.</h3>
                    <div className='w-full'>
                        <p className="text-center mb-4">A at pellentesque et mattis porta enim elementum.</p>
                        {subscription ? (
                            <motion.p
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="w-full text-center text-base font-titleFont font-semibold text-green-600"
                            >
                                Subscribed Successfully !
                            </motion.p>
                        )
                            :
                            (
                                <div className='w-full flex flex-col xl:flex-row items-center justify-between gap-4'>
                                    <div className='flex flex-col w-full'>

                                        <input
                                            onChange={(e) => setEmailInfo(e.target.value)}
                                            type="text" placeholder="Insert your email ...*" className='w-full h-10 border-b px-4 border-gray-400 bg-transparent py-4 outline-none placeholder:text-base text-lg ' />
                                        {errMsg && (
                                            <p className="text-red-600 text-sm font-semibold font-titleFont text-center animate-bounce mt-2">
                                                {errMsg}
                                            </p>
                                        )}
                                    </div>
                                        <button onClick={handleSubscription} className="bg-white text-lightText w-[30%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide">Subscribe</button>
                                </div>
                            )
                        }
                        <img src={paymentCard} className={`w-[80%] lg:w-[60%] mx-auto ${subscription ? "mt-2" : "mt-6"}`} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
