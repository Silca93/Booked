'use client';
import React from 'react'
import Link from 'next/link'


//image//
import Image from 'next/image';
import { IoSearch } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import logo from './../assets/images/logos/BOOKED.png';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



export default function Header() {

  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.value.length);
  const favItems = useSelector((state) => state.favourites.value.length);

  const [show, setShow] = useState(false)

  

  return (
    <div className='w-vw h-[10rem] flex flex-col justify-center items-center bg-[#f5f4f3] relative'>
        <div className="navbar w-[70%] h-[10%] bg-[#dedcd6] rounded-md mx-[6rem] flex items-center fixed top-1 z-30">
            <div className="Left w-[30%] h-full  rounded-l-full flex items-center">
                <div className="flex items-center justify-center  w-[40%] h-full  rounded-l-full">
                    <Image
                    className="rounded-full"
                    src={logo}
                    alt='logo of booked'
                    width="300"
                    height={300}
                    />
                </div>
                <div className="w-[20%] h-full flex justify-center items-center">
                   <Link href="/">
                     <p className="font-bold">HOME</p>
                   </Link> 
                </div>
                <div className="w-[50%] h-full flex justify-center items-center ">
                    <div onClick={() => {setShow(!show);console.log(show);}} className="w-[85%] h-[60%]  cursor-pointer flex border-black border-[1px] rounded-md">
                        <div className="flex justify-center items-center w-[25%] h-full flex-col gap-1">
                            <span className="w-[1.5rem] h-[2px] bg-black"></span>
                            <span className="w-[1.5rem] h-[2px] bg-black"></span>
                            <span className="w-[1.5rem] h-[2px] bg-black"></span>
                        </div>  
                        <div className="flex justify-center  items-center w-[75%] h-full px-1 py-1">
                            <p className="text-[13px]">All Categories</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Mid w-[40%] h-[2.5rem] ml-[3rem] rounded-lg flex">
                <div className="w-[10%] h-full bg-gray-200 rounded-l-lg flex justify-center items-center">
                 <IoSearch size={25} />
                </div>
                <div className="w-[80%] h-full  rounded-r-lg">
                 <input type="text" placeholder='Search' className="px-3 w-[100%] h-full rounded-r-lg" />
                </div>
            </div>
            <div className="Right w-[30%] h-full  rounded-r-full flex">
                <div className="w-[50%] h-full flex gap-2 justify-end items-center">
                    <CgProfile size={25} />
                    <p>Account</p>
                </div>
                <div className="w-[50%] h-full flex gap-2 justify-center items-center relative">
                     <FaHeart size={25}/>
                    <span className="mr-2">{favItems}</span>
                <Link href="/Shopping">
                <div className="flex gap-3 justify-start items-center pl-3 w-[5rem] h-[2.5rem] bg-white rounded-full border-black border-[1px]">
                    <SlBasket size={25} />
                    <span className="text-orange-500 text-lg font-bold">{basketItems}</span>
                </div>
                </Link>

                </div>
            </div>
        </div>
        {/* {show?  */}
        
        <div className={`Slidedown fixed  top-[6rem] w-[67%] ${show? "h-[3rem] text-black border-[1px]" : "h-0 text-transparent border-none"}  bg-white duration-300 flex gap-5 justify-center items-center rounded-b-sm text-sm border-gray-300`}>
            <button className="hover:underline hover:underline-offset-4">Sci-fi</button>
            <button className="hover:underline hover:underline-offset-4">Fantasy</button>
            <button className="hover:underline hover:underline-offset-4">Thriller</button>
            <button className="hover:underline hover:underline-offset-4">Historical</button>
            <button className="hover:underline hover:underline-offset-4">Adult</button>
            <button className="hover:underline hover:underline-offset-4">Children</button>
            <button className="hover:underline hover:underline-offset-4">Classics</button>
            <button className="hover:underline hover:underline-offset-4">Philosophy</button>
            <button className="hover:underline hover:underline-offset-4">Academic</button>
            <button className="hover:underline hover:underline-offset-4">Fiction</button>
            <button className="hover:underline hover:underline-offset-4">Horror</button>
            <button className="hover:underline hover:underline-offset-4">Young Adult</button>
            <button className="hover:underline hover:underline-offset-4">Crime</button>
            <button className="hover:underline hover:underline-offset-4">Adventure</button>
            <button className="hover:underline hover:underline-offset-4">Psychology</button>
            <button className="hover:underline hover:underline-offset-4">Biography</button>
            <button className="hover:underline hover:underline-offset-4">Cultural</button>
        </div>
         {/* :""} */}
    </div>
  )
}
