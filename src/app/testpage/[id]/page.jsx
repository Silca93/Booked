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
    <div className="w-screen h-[35rem] flex">

        <div className="w-1/2 h-full flex justify-center items-center">
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
        <div className="w-1/2 h-full flex justify-center items-center px-5">
          {
          details?
          
          <div className="flex flex-col gap-4 items-start ">
            <p className="text-2xl font-bold">{details[params.id].title}</p>
            <p>By:  {details[params.id].authors}</p>
            <div className="flex w-full gap-5 pr-5 text-sm">
              <p>Rating: {details[params.id].rating} /5 ({details[params.id].rating_count.toLocaleString()})</p>
              <p>Edition: {details[params.id].edition == ""? "Unknown" : details[params.id].edition}</p>
              <p>Page count: {details[params.id].num_pages}</p>
              <p>Genre: {firstThreeGenres.join(", ")}</p>
            </div>
            <hr className="h-[1px]"></hr>
            <p>{details[params.id].description}</p>
              <div className="flex flex-col w-[17rem] h-[2.5rem]  items-start justify-center gap-2 my-3">
                <p className="font-bold">Format: <span className="font-light">&nbsp;{details[params.id].format}</span></p>
                <p >Price: <span className="font-bold text-orange-500">&nbsp;{(details[params.id].rating*3).toFixed(2)}€ </span> </p>
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
