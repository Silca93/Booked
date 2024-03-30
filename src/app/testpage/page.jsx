'use client'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchContent } from "@/Redux/slices/apiSlice"
import { randomPrice } from "@/Redux/slices/BookPrice"
import Link from "next/link"
import React from "react"

function Api() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.content.contents)
    useEffect(() => {
      dispatch(fetchContent());
      dispatch(randomPrice());
    }, [])
    
    const isLoading = useSelector((state) => state.content.isLoading)
    const error = useSelector((state) => state.content.error)
    const bookPrice = useSelector((state) => state.price.value)
    
    if (isLoading) {
      return <span className="loading loading-spinner loading-lg"></span>

    }
  
    if (error) {
      return error
    }
    
    // data.forEach((item) => {
    //   item.price = Math.floor(Math.random() * (20 - 5 + 1)) + 5; // Generate random price
      
    // });
    return (
      <>
        {
        data.slice(0, 18).map((element, id) => {
          return(
          <Link  href={`/testpage/${id}`}>
            <div key={id}  className="card w-[15rem] h-[25rem] flex flex-col bg-[#ebebe5] rounded-md overflow-hidden">
                <div className="w-full h-[18rem]  flex justify-center">
                    <img src={element.image_url} alt="" width="100%"  />
                    {/* <Image
                    src={element.image_url}
                    alt='image of the book cover'
                    width={100}
                    height={100}
                    /> */}
                </div>
                <div className="w-full h-[2rem]  flex flex-col justify-start items-center">
                    <h1 className="text-lg line-clamp-1 px-4">{element.title}</h1>
                </div>
                <div className="w-full h-[2rem] ">
                    <p className="text-start px-2">{element.authors}</p>
                </div>
                <div className="w-full h-[3rem]  flex">
                    <div className="left w-1/2 h-full flex justify-center items-center">
                      <p>Price: {bookPrice}€</p>                          
                    </div>
                    <div className="right w-1/2 h-full flex justify-center items-center">
                      <div className="flex w-[4rem] h-[2rem] bg-black rounded-sm border-white border-[2px]">
                        <button className="w-full h-full text-white">Buy</button>
                      </div>
                    </div>
                </div>
            </div>
          </Link> 
          )
        })
        }
    </>
          
        
    )
  }
  
  export default Api