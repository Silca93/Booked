import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import Image from 'next/image'

export default function Bestsellers() {
   const data = useSelector((state) => state.content.contents)
   const desiredIndexes = [22, 42, 87, 200];
   const newArray = desiredIndexes.filter((index) => index < data.length) 
  .map((index) => data[index]);

  return (
    <div className="Bestsellers w-full h-[50.6rem] bg-white flex flex-col">
        <div className="w-full h-[7%] bg-[#F4F4F2] flex justify-between px-4 py-4">
            <h1 className="text-xl font-bold">Bestsellers</h1>
            <p>View More</p>
        </div>
               
         
        <div className="w-full h-[90%] flex flex-col pt-4  justify-start items-start gap-6">
         {
            newArray.map((element, index) => (
            <div className="flex w-full h-[10rem]  justify-start items-center  gap-4 pl-[3rem]">
               <h1 className="text-2xl font-medium">{index + 1}</h1>
               <img key={index} src={element.image_url} alt="" width="100px" />
               <div className="flex flex-col gap-2">
                  <p>{element.title}</p>
                  <p>{element.authors}</p>
               </div>
            </div>
           ))
         }  
        </div>
        
         
    </div>
  )
}
