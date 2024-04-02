import React from 'react'

export default function Validation() {
  return (
    <div className="w-full h-[40rem] flex justify-center items-center">
        <div className="flex gap-3 justify-center items-center  w-[25rem] h-[25rem]">
          <span className="loading loading-ball loading-xs bg-orange-500"></span>
          <span className="loading loading-ball loading-sm bg-orange-500"></span>
          <span className="loading loading-ball loading-md bg-orange-500"></span>
          <span className="loading loading-ball loading-lg bg-orange-500"></span>
        </div>
    </div>
  )
}