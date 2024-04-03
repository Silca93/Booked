import React from 'react'

export default function Kidsread() {
  return (
    <div className="Kidsread w-full h-[15rem] bg-yellow-300 flex flex-col justify-end">
        <div className="flex flex-col items-start px-3 py-3 gap-3 w-full h-[7rem] bg-gray-700 bg-opacity-50 max-[768px]:h-[5rem] max-[768px]:justify-start max-[768px]:py-0">
            <h1 className="text-xl text-white max-[1300px]:text-sm max-[768px]:text-[11px]">How to make your kids read</h1>
            <button className="w-[6rem] h-[2rem] border-white border-[1px] flex justify-center items-center text-white">Read More</button>
        </div>
    </div>
  )
}
