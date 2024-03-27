import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { IoSearch } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";

import { FaRegHeart } from "react-icons/fa";


import logo from './../assets/images/logos/booked.png'



export default function Header() {
  return (
    <div className='w-vw h-[10rem] flex justify-center items-center'>
        <div className="navbar w-[70%] h-[60%] bg-slate-400 rounded-full mx-[6rem] flex items-center">
            <div className="Left w-[30%] h-full  rounded-l-full flex items-center">
                <div className="flex items-center justify-center w-[30%] h-full  rounded-l-full">
                    <Image
                    className="rounded-full"
                    src={logo}
                    alt='logo of booked'
                    width={90}
                    height={90}
                    />
                </div>
                <div className="w-[20%] h-full flex justify-center items-center">
                    <p className="font-bold">HOME</p>
                </div>
                <div className="w-[50%] h-full flex justify-center items-center ">
                    <div className="w-[85%] h-[60%]   flex border-black border-[1px] rounded-lg">
                        <div className="flex justify-center items-center w-[30%] h-full flex-col gap-2">
                            <span className="w-[1.5rem] h-[2px] bg-black"></span>
                            <span className="w-[1.5rem] h-[2px] bg-black"></span>
                            <span className="w-[1.5rem] h-[2px] bg-black"></span>
                        </div>  
                        <div className="flex justify-center items-center w-[70%] h-full ">
                            <p>All Categories</p>


                        </div>
                    </div>
                </div>
            </div>
            <div className="Mid w-[40%] h-[4rem] bg-slate-100 rounded-lg">
              <div className="w-full h-full flex">
                <div className="w-[7rem] h-full bg-gray-200 rounded-l-lg flex justify-center items-center">
                 <IoSearch />
                </div>
                <div className="w-[23rem] h-full bg-red-800 rounded-r-lg">
                 <input type="text" placeholder='Search' className="w-[27rem] h-full rounded-r-lg" />
                </div>
              </div>
                    
            </div>
            <div className="Right w-[30%] h-full  rounded-r-full flex">
                <div className="w-[50%] h-full flex gap-2 justify-end items-center">
                    <CgProfile size={25}/>
                    <p>Account</p>
                </div>
                <div className="w-[50%] h-full flex gap-5 justify-center items-center">
                    <FaRegHeart size={25} />
                <div className="flex gap-3 justify-start items-center pl-3 w-[5rem] h-[2.5rem] bg-white rounded-full border-black border-[1px]">
                    <SlBasket size={25} />
                     0
                </div>


                </div>

            </div>

        </div>
      
    </div>
  )
}
