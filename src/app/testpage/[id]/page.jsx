'use client'
import React from 'react'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchContent } from '@/Redux/slices/apiSlice' 
import { randomPrice } from '@/Redux/slices/BookPrice'
import { addBasket } from '@/Redux/slices/slices'
import { addFav, removeFav } from '@/Redux/slices/favSlice'

import Link from "next/link"
import Image from 'next/image'

export default function Details({params}) {
  
  const dispatch = useDispatch();
  // const id = params.id

  useEffect(() => {
    dispatch(fetchContent())
  }, [])

  const details = useSelector((state) => state.content.contents)
  const isLoading = useSelector((state) => state.content.isLoading)
  const error = useSelector((state) => state.content.error)
  
  const connected = useSelector((state) => state.login.value.logged)
  const bookPrice = useSelector((state) => state.price.value)
//checking//
  

  const [fav, setFav] = useState(false)

 
  
  //array for the genres of books//
  const firstThreeGenres = details[params.id].genres.split(", ").slice(0, 3);
  
  
    if (isLoading) {
      return (
      <div className="w-full flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
      )
    }
  
    if (error) {
      return error
    }
  
  
  return (
    <div className="w-vw h-[35rem]  my-5 flex max-[768px]:flex-col max-[768px]:h-[63rem]">

        <div className="w-[40%] h-full  flex justify-center items-center max-[1200px]:w-[40%] max-[768px]:w-full ">
          {
          details?
        <div className="flex w-[20rem]">
            <img src={details[params.id].image_url} alt="" width="100%" />
        </div>
          // <Image
          // src={details[params.id].image_url}
          // alt="book cover"
          // width={200}
          // height={200}
          // />
          : "no existing data"
          }
        </div>
        <div className="w-[60%] h-full  flex justify-center items-center px-5 py-5 max-[1200px]:w-[60%] max-[768px]:w-full">
          {
          details?
          
          <div className="flex flex-col gap-4 items-start ">
            <p className="text-2xl font-bold">{details[params.id].title}</p>
            <p><span className="font-bold">By:</span>   <span className="text-gray-600">{details[params.id].authors}</span></p>
            <div className="flex w-full gap-5 pr-5 text-sm">
              <p><span className="font-bold">Rating:</span> <span className="text-yellow-600"> {details[params.id].rating} /5 </span> ({details[params.id].rating_count.toLocaleString()}) </p>
              <p><span className="font-bold">Edition: </span> {details[params.id].edition == ""? "Unknown" : details[params.id].edition}</p>
              <p><span className="font-bold">Page count </span>: {details[params.id].num_pages}</p>
              <p><span className="font-bold">Genre: </span> {firstThreeGenres.join(", ")}</p>
            </div>
            <hr className="h-[1px]"></hr>
            <p className="max-[550px]:text-[12px]">{details[params.id].description.slice(0, 700)}</p>
              <div className="flex flex-col w-[17rem] h-[2.5rem]  items-start justify-center gap-2 my-3">
                <p className="font-bold">Format: <span className="font-light">&nbsp;{details[params.id].format}</span></p>
                <p><span className="font-bold">Price:</span> <span className="font-bold text-orange-500">&nbsp;{(details[params.id].rating*3).toFixed(2)}€ </span> </p>
              </div>
            <div className="flex gap-3 w-full pr-5">
              {connected&&
              <div className="flex w-[9rem] h-[2rem] border-[1px] border-black items-center justify-center  ">
                <button onClick={() => {dispatch(fav ? removeFav(details[params.id].id) : addFav(details[params.id])); setFav(!fav)} } className={`w-full h-full bg-black text-white hover:bg-white hover:text-black duration-150`}>{fav? "Unfavourite" : "Add to Favourites"}</button>
              </div>
              }
              <div className="flex w-[9rem] h-[2rem] border-[1px] border-black items-center justify-center ">
                <button onClick={() => {dispatch(addBasket(details[params.id]))}} className="w-full h-full bg-black text-white hover:bg-white hover:text-black duration-150">Add to Cart</button>
              </div>
                
                {/* <p>Price: {(element.rating * 3).toFixed(2) + "€"}</p> */}
            </div>
          </div>
          : "no existing data"
          }
        </div>
      
    </div>
  )
}
