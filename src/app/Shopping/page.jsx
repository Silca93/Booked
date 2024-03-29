import React from 'react'

export default function Shopping() {
  return (
    <div className="w-full flex">
        <div className="Left w-[60%] h-[40rem] bg-black">

        </div>
        <div className="Right w-[40%] h-[40rem] pl-5">
          <div className="flex w-full h-full flex-col justify-center gap-4">
            <h1 className="text-2xl font-bold">My order</h1>
            <p>1x This Book</p>
            <hr className="bg-gray-400 h-[2px]"></hr>
            <div className="flex w-[40rem] h-[2.5rem] bg-white">
              <input className="input w-[85%] h-full"></input>
              <div className="send w-[15%] h-full bg-black text-white">
                <button className="w-full h-full text-white">Redeem</button>
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
