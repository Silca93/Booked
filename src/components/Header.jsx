'use client';
import React from 'react'
import Link from 'next/link'

//image//
import Image from 'next/image';
import { IoSearch } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { BsArrowThroughHeart } from "react-icons/bs";

import { FaHeart } from "react-icons/fa";
import { CiPower } from "react-icons/ci";

import { logIn } from '@/Redux/slices/loginSlice';

import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchVal } from '@/Redux/slices/searchSlice';
import { setGenre, clearGenre } from "@/Redux/slices/genreSlice";
import Searchbar from './Searchbar';


export default function Header() {

const connected = useSelector((state) => state.login.value.logged)
const name = useSelector((state) => state.login.value.username)
const dispatch = useDispatch();
const [searchValue, setSearchValue] = useState('');

const handleChange = (event) => {
    setSearchValue(event.target.value);
    dispatch(setSearchVal(event.target.value));
}

const data = useSelector((state) => state.content.contents);
const genre = useSelector((state) => state.genre.genre);




const basketItems = useSelector((state) => state.basket.value.length);
const favItems = useSelector((state) => state.favourites.value.length);
const previousLength = useRef(favItems);

const pulseIcon = () => {
    if (favItems)  
    setIsPulsing(!isPulsing);
    setTimeout(() => setIsPulsing(false), 300);
    };

useEffect(() => {
    if (previousLength.current !== favItems) {
      pulseIcon();
      previousLength.current = favItems; 
    }
  }, [favItems, pulseIcon]);

const [isPulsing, setIsPulsing] = useState(false);



const [show, setShow] = useState(false)


const handleGenre = (genre) => {
    dispatch(setGenre(genre))
    setShow(false)
}


return (
    <div className='w-vw h-[7rem]  flex flex-col justify-center items-center bg-[#f5f4f3] relative max-[768px]:h-[3.5rem]'>
        <div className="navbar w-[70%] h-[8%]  bg-[#dedcd6] rounded-md mx-[6rem] flex items-center fixed top-1 z-30 border-[1px] border-black border-opacity-30 max-[768px]:w-full max-[768px]:rounded-none max-[768px]:top-0 max-[768px]:border-b-2 max-[768px]:border-t-0 max-[768px]:border-l-0 max-[768px]:border-r-0 max-[768px]:bg-[#efefed]">
            <div className="Left w-[30%]  h-full   flex items-center max-[768px]:w-[50%]">
                <div className="Booked flex items-center justify-center  w-[40%] h-full  rounded-l-full">
                </div>
                <div className="w-[20%] mx-2  h-full flex justify-center items-center max-[768px]:w-[30%]">
                <Link href="/">
                    <p className="font-bold">HOME</p>
                </Link> 
                </div>
                <div className="w-[50%]  h-full flex justify-center items-center max-[768px]:w-[30%] ">
                    <div onClick={() => {setShow(!show)}} className="w-[85%] h-[55%] cursor-pointer p-1 flex border-orange-500 border-[1px] rounded-sm max-[1400px]:w-[30%] max-[850px]:rounded-md max-[768px]:h-[2rem] max-[768px]:w-[2rem]">
                        <div className="flex justify-center  items-center w-[25%] h-full flex-col gap-1 max-[1400px]:w-full">
                            <span className="px-2 w-[1.5rem] h-[2px] bg-black max-[1200px]:w-[1rem]  "></span>
                            <span className="px-2 w-[1.5rem] h-[2px] bg-black max-[1200px]:w-[1rem] "></span>
                            <span className="px-2 w-[1.5rem] h-[2px] bg-black max-[1200px]:w-[1rem] "></span>
                        </div>  
                        <div className="flex justify-center  items-center w-[75%]  h-full px-1 py-1 max-[1400px]:hidden">
                            <p className="text-[12px] max-[1650px]:text-[8px] ">All Categories</p>
                            
                        </div>
                    </div>
                   
                    <label className="swap swap-rotate  ml-3 mr-1">

                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="theme-controller" value="synthwave" />
                    
                    {/* sun icon */}
                    <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                    
                    {/* moon icon */}
                    <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                    
                    </label>
                </div>
            </div>
            <div className="Mid w-[40%] h-[2.5rem]  ml-[3rem] rounded-md flex max-[1400px]:w-[30%] max-[768px]:w-0 max-[768px]:hidden">
                <Searchbar/>
            </div>
            <div className="Right w-[30%] h-full  flex gap-1 max-[768px]:w-[50%]">
                <div className="w-[40%]   h-full flex justify-end items-center max-[768px]:justify-start">
                    
                    <details className="dropdown flex gap-1 ">
                        
                        <summary className={`m-1 btn rounded-md min-h-[2rem] h-[2.5rem] max-h-[5rem]   ${connected? "border-green-500" : "border-black"}  border-[1px] max-[1400px]:w-[4rem] max-[1100px]:w-[3rem] max-[1100px]:h-[2rem] max-[768px]:h-[2.5rem] max-[768px]:w-[4.5rem]`}>
                            <div className="flex gap-1 max-[1100px]:flex-col max-[1100px]:items-center max-[768px]:flex-row ">
                                <CgProfile className=" max-[1100px]:pl-0 max-[1100px]:pt-1 mb-[-2px] max-[768px]:pt-0" size={16} style={connected? {color:'#F97316'}: ""}  />
                                <span className="max-[1400px]:text-[10px] pr-2  max-[1100px]:text-[8px] max-[1100px]:pr-0 max-[1000px]:mb-3 max-[768px]:mb-0 max-[768px]:text-[10px]">{connected? name : "Account"}</span>
                            </div>
                        </summary>
                        
                        <ul className="p-2 shadow menu dropdown-content z-[1]  bg-white rounded-md w-52">
                            {!connected&&
                            <>
                            <li><Link href="/login">Login</Link></li>
                            <li><Link href="/register">Register </Link></li>
                            </>
                            }
                            {connected&&
                            <li> <button onClick={() =>dispatch(logIn()) }>Disconnect</button></li>
                            }
                        </ul>
                    </details>
                </div>
                <div className="w-[60%] ml-2 mr-1 h-full flex gap-2 justify-center items-center relative ">
                    {connected ?
                    <Link href="/Favourites">
                        <div className="flex w-[4rem]  h-[2.5rem] bg-white rounded-md justify-center items-center border-black border-[1px] max-[1100px]:w-[2.5rem] max-[1100px]:h-[2rem] max-[768px]:w-[3.2rem] max-[768px]:h-[2.5rem]">
                            <div className="flex w-[65%] h-full justify-center items-center ">
                                <BsArrowThroughHeart className={isPulsing ? 'pulse' : 'max-[1100px]:w-[60%]'}  size={20} />
                            </div>
                            <div className="amount w-[35%] h-full flex justify-center items-center bg-black rounded-r-md">
                                <span className="text-red-500 text-lg font-bold pb- max-[1100px]:text-sm">{favItems}</span>
                            </div>
                        </div>
                    </Link>
                    :
                    <div className="w-[4rem] h-[2.5rem]  flex justify-center items-center">
                        <CiPower size={25} style ={{color: 'red'}} className="max-[1400px]:w-[70%]"/>
                    </div>
                    }
                        
                <Link href="/Shopping">
                <div className="flex gap-3 justify-center items-center mr-3  w-[5rem] h-[2.5rem] bg-white rounded-md border-black border-[1px] max-[1400px]:w-[3.5rem] max-[1100px]:w-[2.5rem] max-[1100px]:h-[2rem] max-[768px]:w-[3.2rem] max-[768px]:h-[2.5rem]">
                    <div className="cart w-[65%] h-full flex  justify-end items-center">
                    <SlBasket size={25} className="max-[1400px]:w-[70%]" />
                    </div>
                    <div className="amount w-[35%] h-full flex justify-start items-center">
                        <span className="text-orange-500 text-lg font-bold pb-1 max-[1100px]:pr-1 max-[1100px]:text-sm">{basketItems > 0 && basketItems}</span>
                    </div>
                </div>
                </Link>
                </div>
            </div>
        </div>
        <div className={`Slidedown fixed flex flex-col left-0 top-0 w-[10%] ${show? "h-screen  max-[1500px]:w-[20%] max-[900px]:w-[25%] max-[600px]:w-[33%]  text-black border-[1px]  sidebar-active" : "w-0 text-transparent border-none opacity-0 z-0 cursor-default"}  bg-white flex-wrap  z-50 duration-100 flex gap-6 justify-center items-center rounded-b-sm text-sm border-gray-300`}>
            <button onClick={() => handleGenre("")} className="hover:underline  text-[17px] hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">All</button>
            <button onClick={() => handleGenre("Science Fiction")} className="hover:underline  text-[17px] hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Sci-fi</button>
            <button onClick={() => handleGenre("Fantasy")} className="hover:underline hover:underline-offset-4 text-[17px] duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Fantasy</button>
            <button onClick={() => handleGenre("Thriller")} className="hover:underline hover:underline-offset-4 text-[17px] duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Thriller</button>
            <button onClick={() => handleGenre("Historical")} className="hover:underline hover:underline-offset-4 text-[17px] duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Historical</button>
            
            <button onClick={() => handleGenre("Childrens")} className="hover:underline hover:underline-offset-4 text-[17px] duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Children</button>
            <button onClick={() => handleGenre("Classics")} className="hover:underline hover:underline-offset-4 text-[17px] duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Classics</button>
            <button onClick={() => handleGenre("Philosophy")} className="hover:underline hover:underline-offset-4 text-[17px] duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Philosophy</button>
            <button onClick={() => handleGenre("Academic")} className="hover:underline hover:underline-offset-4 text-[17px] duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Academic</button>
            <button onClick={() => handleGenre("Fiction")} className="hover:underline hover:underline-offset-4 text-[17px] duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Fiction</button>
            <button onClick={() => handleGenre("Horror")} className="hover:underline hover:underline-offset-4 text-[17px] duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Horror</button>
            <button onClick={() => handleGenre("Adult")} className="hover:underline hover:underline-offset-4 text-[17px] duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Young Adult</button>
            <button onClick={() => handleGenre("Crime")} className="hover:underline hover:underline-offset-4 text-[17px] duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Crime</button>
            <button onClick={() => handleGenre("Adventure")} className="hover:underline hover:underline-offset-4 text-[17px] duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Adventure</button>
            <button onClick={() => handleGenre("Psychology")} className="hover:underline hover:underline-offset-4 text-[17px] duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Psychology</button>
            <button onClick={() => handleGenre("Biography")} className="hover:underline hover:underline-offset-4 text-[17px] duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Biography</button>
            <button onClick={() => handleGenre("Cultural")} className="hover:underline hover:underline-offset-4 text-[17px] duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Cultural</button>
            <button onClick={() => handleGenre("War")} className="hover:underline hover:underline-offset-4 text-[17px] duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">War</button>
        </div>
    </div>
)
}
