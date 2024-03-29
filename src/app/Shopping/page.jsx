'use client'
import React from 'react'
import { basketSlice } from '@/Redux/slices/slices'
import { removeBasket } from '@/Redux/slices/slices'
import { useDispatch, useSelector } from 'react-redux'
import { TfiTrash } from "react-icons/tfi";


export default function Shopping() {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.value)
  return (
    <div className="w-full flex">
        <div className="Left w-[60%] h-[40rem] bg-black">

        </div>
        <div className="Right w-[40%] h-[40rem] pl-5">
          <div className="flex w-full h-full flex-col justify-center gap-4">
            <h1 className="text-[2rem] font-bold">My order</h1>
            {
              basket.map((element, index) => (
                <div key={index} className="w-full flex justify-between px-5" >
                  <div className="flex gap-2">
                    <button onClick={() => {dispatch(removeBasket(element.id)); console.log("removed");} }>
                      <TfiTrash size={25}/>
                    </button>
                  <p>1 x {element.title}</p>
                  </div>
                  <p>$Price</p>
                </div>
              ))
            }
            <hr className="bg-gray-400 h-[2px]"></hr>
            <div className="flex w-[40rem] h-[2.5rem] bg-white">
              <input placeholder='Enter coupon code' className="input w-[85%] h-full"></input>
              <div className="send w-[15%] h-full bg-black text-white">
                <button  className="w-full h-full text-white">Redeem</button>
              </div>
            </div>
            <hr className="bg-gray-400 h-[2px]"></hr>
            <div className="flex w-full justify-between px-3">
              <h1>Total</h1>
              <h1>$ Price</h1>
            </div>
            <div className="flex justify-center items-center mt-[10rem] ml-[7rem] w-[65%] h-[3rem] bg-orange-500 text-white">
              <button className="w-full h-full">Checkout</button>
            </div>
          </div>
        </div>
      
    </div>
  )
}
