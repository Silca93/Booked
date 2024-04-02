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
import { CiPower } from "react-icons/ci";

import logo from './../assets/images/logos/booked.png';

import { logIn } from '@/Redux/slices/loginSlice';

import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchVal } from '@/Redux/slices/searchSlice';
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

return (
    <div className='w-vw h-[10rem] flex flex-col justify-center items-center bg-[#f5f4f3] relative'>
        <div className="navbar w-[70%] h-[10%] bg-[#dedcd6] rounded-md mx-[6rem] flex items-center fixed top-1 z-30 border-[1px] border-black border-opacity-30">
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
                    <div onClick={() => {setShow(!show)}} className="w-[85%] h-[60%]  cursor-pointer flex border-orange-500 border-[1px] rounded-md">
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
            <div className="Mid w-[40%] h-[2.5rem] ml-[3rem] rounded-md flex">
                <div className="w-[10%] h-full bg-orange-500 rounded-l-md flex justify-center items-center">
                <IoSearch size={25} style={{color: 'white'}} />
                </div>
                <div className="w-[80%] h-full  rounded-r-md">
                <input onChange={handleChange} value={searchValue} type="text" placeholder='Under construction...' className="px-3 w-[100%] h-full rounded-r-md" />
                {/* <Searchbar/> */}
                </div>
            </div>
            <div className="Right w-[30%] h-full  rounded-r-full flex">
                <div className="w-[50%] h-full flex gap-2 justify-end items-center">
                    {/* <Link href="/login"> */}

                    <details className="dropdown flex gap-2">
                       
                        
                        <summary className="m-1 btn rounded-md border-black border-[1px] "><CgProfile size={25} style={connected? {color:'#F97316'}: ""}  />{connected? name : "Account"}</summary>
                        
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
                        {/* <div className="flex w-[6rem] h-[2.5rem]  justify-center items-center border-black border-[1px] rounded-md">

                        
                        <p>Account</p>
                        </div> */}
                    {/* </Link> */}
                </div>
                <div className="w-[50%] h-full flex gap-2 justify-center items-center relative ">
                    {connected ?
                    <Link href="/Favourites">
                   
                        <div className="flex w-[4rem] h-[2.5rem] bg-white rounded-md justify-center items-center border-black border-[1px]">
                            <div className="flex w-[65%] h-full justify-center items-center">
                               <FaHeart className={isPulsing ? 'pulse' : ''} size={27}/>
                            </div>
                            <div className="amount w-[35%] h-full flex justify-center items-center bg-black rounded-r-md">
                                <span className="text-red-500 text-lg font-bold">{favItems}</span>
                            </div>
                        </div>
                    </Link>
                    :
                    <div className="w-[4rem] h-[2.5rem]  flex justify-center items-center">
                        <CiPower size={25} style ={{color: 'red'}}/>

                    </div>
                    }
                        
                <Link href="/Shopping">
                <div className="flex gap-3 justify-center items-center w-[5rem] h-[2.5rem] bg-white rounded-md border-black border-[1px]">
                    <div className="cart w-[65%] h-full flex  justify-end items-center">
                    <SlBasket size={25} />
                    </div>
                    <div className="amount w-[35%] h-full flex justify-start items-center">
                        <span className="text-orange-500 text-lg font-bold">{basketItems > 0 && basketItems}</span>
                    </div>
                </div>
                </Link>
                </div>
            </div>
        </div>
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
    </div>
)
}
