import React from 'react'

export default function Bestbooks() {
  return (
    <div className="Bestbooks w-full h-[20rem] bg-red-300 flex flex-col justify-end">
        <div className="flex flex-col items-start px-3 py-3 gap-3 w-full h-[7rem] bg-gray-700 bg-opacity-50">
            <h1 className="text-xl text-white">Best Books of the month</h1>
            <button className="w-[6rem] h-[2rem] border-white border-[1px] flex justify-center items-center text-white">Read More</button>
        </div>
    </div>
  )
}
