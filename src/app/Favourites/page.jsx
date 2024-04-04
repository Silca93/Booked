'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFav, removeFav } from '@/Redux/slices/favSlice'
import { addBasket } from '@/Redux/slices/slices'

import { BsHeartbreakFill } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Link from 'next/link'




export default function Page() {

    const dispatch = useDispatch();
    const faves = useSelector((state) => state.favourites.value)
    const basket = useSelector((state) => state.basket.value)
    
return (
<div className="w-full h-[40rem] flex flex-col justify-center items-center my-5">
        <div className="flex h-[10%] w-[45rem] bg-[#f5f4f3] justify-center items-center rounded-t-md max-[768px]:w-[35rem] max-[565px]:w-[27rem] max-[500px]:w-[24rem]">
            <h1 className="text-center text-[2rem] font-bold max-[768px]:text-[1.5rem]">Added to Favourites</h1>
        </div>
    <div className="w-[45rem] h-[35rem] rounded-sm bg-[#ebebe5] flex flex-col justify-center items-center relative max-[768px]:w-[35rem] max-[565px]:w-[27rem] max-[500px]:w-[24rem]">
        <div className="flex flex-col gap-3 w-[90%] h-[70%] overflow-y-scroll">
        {
        faves.map((element, index) => (
          <div key={index} className="relative">
            <div key={index} className="Separation flex  justify-between px-5 w-full h-[8rem]">
                <div className="flex gap-2 w-[25rem]  h-full">
                    <div className="w-[7rem] h-full  flex justify-center">
                    <img src={element.image_url} alt=""  style={{ width: '70px', height: '100px' }} />
                    </div>
                    <div className="flex flex-col gap-4 w-[10rem] max-[570px]:w-[7rem] max-[500px]:w-[5rem] ">
                        <h1 className="text-center line-clamp-1 max-[768px]:text-start">{element.title}</h1>
                        <p className="text-gray-600">{element.authors}</p>
                        <p className="font-bold text-orange-500 ">{(element.rating*3).toFixed(2)} €</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5 w-[15rem]  h-full  items-center justify-center">
                    <div className="flex gap-2">
                        <button className="flex gap-2" onClick={() => {dispatch(removeFav(element.id)); console.log("removed");} }>
                        <p className="text-gray-500">Unfavourite</p>
                        <BsHeartbreakFill  size={20} />
                        </button>
                    </div>
                    <div className="flex justify-center bg items-center gap-3 border-gray-300 border-[1px] w-full h-[2rem] bg-black">
                    <button onClick={()=> dispatch(addBasket(element))} className="text-white w-full h-full flex gap-3 justify-center items-center hover:bg-white hover:text-black max-[570px]:text-sm">Add to cart <HiOutlineShoppingCart size={20}/>
                    </button>
                    </div>
                </div>
            
            </div>
            {/* <hr className="bg-[#d4a373] opacity-50 h-[2px]"></hr> */}
         </div>   
        ))
            }
        </div>  
            
        <div className="flex w-[90%] h-[5rem] gap-[3rem] justify-center items-center absolute bottom-0">
            <div className="left w-[12rem] h-[3rem] bg-orange-500 hover:bg-white hover:text-orange-500 duration-150">
                <Link href="/Shopping">
                    <button className="w-full h-full text-center">Shopping cart</button>
                </Link>
            </div>
            <div className="right flex justify-center items-center w-[12rem] h-[3rem] bg-white hover:bg-black hover:text-white">
                <Link href="/">
                    <button className="w-full h-full flex gap-2 justify-center items-center"><MdOutlineKeyboardBackspace />Back to store</button>
                </Link>
            </div>

        </div>
    </div>
</div>
)
}
