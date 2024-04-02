import React from 'react'

export default function Validation() {
  return (
    <div className="w-full h-[40rem] flex justify-center items-center">
        <div className="flex gap-3 justify-center items-center bg-red-400 w-[25rem] h-[25rem]">
          <span className="loading loading-ball loading-xs"></span>
          <span className="loading loading-ball loading-sm"></span>
          <span className="loading loading-ball loading-md"></span>
          <span className="loading loading-ball loading-lg"></span>
        </div>
    </div>
  )
}