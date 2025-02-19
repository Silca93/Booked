'use client'
import React from 'react'
import { useEffect } from 'react'
import { basketSlice } from '@/Redux/slices/slices'
import { removeBasket } from '@/Redux/slices/slices'
import { randomPrice } from '@/Redux/slices/BookPrice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { TfiTrash } from "react-icons/tfi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

import Link from 'next/link'
import Image from 'next/image'



export default function Shopping() {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.value)

  const totalPrice = basket.reduce((total, book) => total + (book.rating*3), 0);

  useEffect(() => {
    // to recalculate finalPrice whenever basket length changes
    const newTotalPrice = basket.reduce((total, book) => total + (book.rating * 3), 0);
    setFinalPrice(newTotalPrice);
  }, [basket])

  const [finalPrice, setFinalPrice] = useState(totalPrice)
  const [coupon, setCoupon] = useState('')
  const discount = (totalPrice*0.9)

  const checkDiscount = () => {
    if (coupon === "molengeek") {
      console.log("discount activated");
      setFinalPrice(discount)

    }
  }
  
  return (
    <div className="w-full flex max-[768px]:flex-col">
        <div className="Left w-[60%] h-[45rem] bg-[#F0F0F0] max-[768px]:w-full max-[768px]:h-[32rem]">
          <div className="flex w-full h-[5%]  justify-start px-3">
            <div className="flex w-[10rem] h-full my-3  justify-center items-center hover:border-[1px] hover:border-black rounded-sm">
                <button className="flex justify-center items-center gap-2   z-50 mt-3 mb-3">
              <Link href="/" className='flex gap-3 justify-center items-center'>
                  <MdOutlineKeyboardBackspace />
                    <span>Back to store</span>
              </Link>
                </button>
            </div>
          </div>
          <div className="w-full h-[95%]">
            <div className="flex flex-col gap-4 w-[90%] h-full overflow-y-scroll">
              <h1 className="text-[2rem] font-bold px-2 py-2 max-[768px]:text-[1.5rem]">My shopping cart</h1>
              {basket.map((element, index) => (
              <div key={index} className="relative">
                <div key={index} className="Separation flex justify-between px-5 w-full h-[8rem]">

                  <div className="flex gap-2 w-[25rem] h-full">
                    <div className="w-[7rem] h-full  flex justify-center">
                      <img src={element.image_url} alt="" height="50px" width="100px" />
                    </div>
                    <div className="flex flex-col gap-4">
                      <h1 className="text-center line-clamp-1 max-[768px]:text-sm">{element.title}</h1>
                      <p className="max-[768px]:text-sm">{element.authors}</p>
                      <p  className="font-bold text-orange-500">{(element.rating*3).toFixed(2)}€</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 w-[10rem] h-full  items-center justify-center">
                    <div className="flex gap-2">
                      <p className="text-gray-500 max-[768px]:text-sm">Remove</p>
                      <button onClick={() => {dispatch(removeBasket(element.id)); console.log("removed");} }>
                        <TfiTrash className="max-[550px]:w-[70%]" size={25}/>
                      </button>
                    </div>
                    <div className="flex justify-center bg items-center gap-3 border-gray-300 border-[1px] w-full h-[3rem] bg-[#ebebe5]">
                      <p className="max-[768px]:text-sm">Qty: </p>
                      {/* <p>{basket.length}</p> */}
                      <p>1</p>
                    </div>
                  </div>
                  
                </div>
              </div> 
              ))
              }
            </div>
          </div>
        </div>
        <div className="Right w-[40%] h-[45rem] pl-5 bg-[#ebebe5] max-[768px]:w-full">
        <div className="flex w-full h-[5%]  justify-start px-3">
        </div>
          <h1 className="text-[2rem] font-bold py-2 px-2 max-[768px]:text-[1.5rem]">My order</h1>
        <div className="w-full h-[20rem]">
          <div className="flex w-full h-full flex-col justify-center gap-4 overflow-y-scroll">
            {
              basket.map((element, index) => (
                <div key={index} className="w-full flex justify-between px-5" >
                  <div className="flex gap-2">
                    {/* <button onClick={() => {dispatch(removeBasket(element.id)); console.log("removed");} }>
                      <TfiTrash size={25}/>
                    </button> */}
                  <p key={index}>1 x {element.title}</p>
                  </div>
                  <p key={index} className="font-bold text-orange-500">{(element.rating*3).toFixed(2)}€</p>
                </div>
              ))
            }
          </div> 

            <hr className="bg-gray-400 h-[2px] mr-3"></hr>

           <div className="flex justify-center py-3">
              <div className="flex w-[70%] h-[2.5rem] bg-white">
                <input onChange={(e)=> setCoupon(e.target.value.toLocaleLowerCase())} placeholder='Enter coupon code' className="input w-[85%] h-full"></input>
                <div  className="send w-[20%] h-full bg-black text-white">
                  <button onClick={() => checkDiscount()}  className="w-full h-full text-white max-[1400px]:text-[10px]">Redeem</button>
                </div>
              </div>
            </div>

            <hr className="bg-gray-400 h-[2px] mr-3"></hr>

            <div className="flex w-full justify-between px-5 py-3">
              <h1 className="text-orange-500 font-bold text-xl">Total</h1>
              <h1 className="text-orange-500 font-bold text-xl">{finalPrice.toFixed(2)}€</h1>
            </div>

            <Link href='/Summary'>
              <div className="flex w-full justify-center items-center mt-5">
              {basket.length > 0 ?
                <div className="flex justify-center items-center  w-[65%] h-[3rem] bg-orange-500 text-white">
                    <button className="w-full h-full hover:bg-white hover:text-black duration-150">Confirm order</button>
                </div>
                :''
              }
              </div>
            </Link>
          </div>
        </div>
    </div>
  )
}
