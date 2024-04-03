import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import Image from 'next/image'

export default function Bestsellers() {
   const data = useSelector((state) => state.content.contents)
   const desiredIndexes = [22, 42, 87, 200];
   const newArray = desiredIndexes.filter((index) => index < data.length) 
  .map((index) => data[index]);
//   max-[1200px]:h-[50rem]
  return (
    <div className="Bestsellers w-full h-[50.6rem] bg-white flex flex-col max-[1350px]:h-[23rem] max-[768px]:h-[23rem] max-[550px]:h-[50rem]">
        <div className="w-full h-[7%] bg-[#F4F4F2] flex justify-between items-center px-4 py-4">
            <h1 className="text-xl font-bold">Bestsellers</h1>
            <p>View More</p>
        </div>
               
         
        <div className="w-full h-[90%] flex flex-col pt-4 pr-5 justify-start items-start gap-4 max-[1350px]:flex-row max-[1350px]:items-center max-[1350px]:justify-start max-[1200px]:gap-0 max-[1200px]:items-start max-[550px]:flex-col">
         {
            newArray.map((element, index) => (
            <div key ={index}className="flex w-full h-[10rem]  justify-start items-center  gap-4 pl-[2rem] max-[1200px]:flex-col max-[550px]:flex-row">
               <h1 key={index} className="text-2xl font-medium">{index + 1}</h1>
               <img key={index} src={element.image_url} alt="" width="100px" className="" />
               <div key={index} className="flex flex-col gap-2">
                  <p className="max-[1350px]:text-[12px] max-[1200px]:text-center max-[550px]:text-[10px] max-[550px]:text-start">{element.title}</p>
                  <p className="mb-4 text-gray-600 max-[1350px]:text-[12px] max-[1200px]:text-center max-[768px]:text-[8px] max-[550px]:text-start">{element.authors}</p>
               </div>
            </div>
           ))
         }  
        </div>
        
         
    </div>
  )
}
