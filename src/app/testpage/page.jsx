'use client'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchContent } from "@/Redux/slices/apiSlice"

import { IoMdArrowDropdown } from "react-icons/io";

import Searchbar from "@/components/Searchbar"
import Link from "next/link"
import React from "react"

function Api() {
    const [searchVal, setSearchVal] = useState("");
    const dispatch = useDispatch()
    const data = useSelector((state) => state.content.contents)
    useEffect(() => {
      if (!data.length) {

        dispatch(fetchContent());
      }
      
    }, [data.length] )
    
    const isLoading = useSelector((state) => state.content.isLoading)
    const error = useSelector((state) => state.content.error)
    const bookPrice = useSelector((state) => state.price.value)
    

    //Searchbar usestates//
    const searching = useSelector((state) => state.search.searchVal)

    
    
    
    
    
    //copy array of my data API that will be used to filter with searchbar"
    const [filteredBooks, setFilteredBooks] = useState(data);
    
    const [filter, setFilter] = useState(false)

    const filterByGenres = (genre) => {

      const Filtered = data.filter((book) => book.genres.includes(genre))
      setFilter(true)
      setFilteredBooks(Filtered);
      console.log(Filtered);
    }
    //used to toggle my genres bar//
    const [show, setShow] = useState(false) 
    
    //ensures that the clicked book(once filtered) brings you to the correct index
    const searchIndex = (element) => {
      const result = data.findIndex((x) => x.title === element.title);
      return result;
    };
  
  useEffect(() => {
    const filterBySearch = () => {
    
      if (searchVal.length == 0) {
        dispatch(fetchContent())
        setFilteredBooks(data);
        return;
      }
      
      const filteredBySearch = data.filter((book) =>
        book.title.toLowerCase().includes(searchVal.toLowerCase())||book.authors.toLowerCase().includes(searchVal.toLowerCase())

      );
      setFilteredBooks(filteredBySearch);
    };
   
    filterBySearch();
   
  }, [searchVal] );

  
  //!filter by genres//


  //if the searchbar is empty, we will map data instead of filteredBooks. Otherwise the mapping will be empty upon page reload. ALso filter needs to be false in order to map data, otherwise my filter by genres buttons don't do anything. 

  const booksToDisplay = searchVal.length === 0 && !filter? data : filteredBooks
  // const booksToDisplay = filteredBooks

 
    if (isLoading) {
      return <span className="loading loading-spinner loading-lg"></span>

    }
  
    if (error) {
      return error
    }
   
      return (
      <div className="flex flex-col gap-5 w-full">
        <div className="flex w-full justify-center">
          <button className="w-[8rem] bg-orange-500 text-white h-[2rem] flex justify-center items-center rounded-md" onClick={() => setShow(!show)}>Filter genres <IoMdArrowDropdown />
          </button>
        </div>
         <div className={`w-full ${show? "h-[3rem] max-[1560px]:h-[5rem] max-[825px]:h-[7rem] max-[576px]:h-[9rem] max-[471px]:h-[11.5rem] max-[393px]:h-[14rem] text-black border-[1px]" : "h-0 text-transparent border-none opacity-0"}  bg-white duration-300 flex-wrap flex  gap-5 justify-center items-center rounded-b-sm text-sm border-gray-300 px-2`}>
            <button onClick={() => filterByGenres("Science Fiction")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2  ">Sci-fi</button>
            <button onClick={() => filterByGenres("Fantasy")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Fantasy</button>
            <button onClick={() => filterByGenres("Thriller")}className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Thriller</button>
            <button onClick={() => filterByGenres("Historical")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Historical</button>
            <button onClick={() => filterByGenres("Adult")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Young Adult</button>
            <button onClick={() => filterByGenres("Childrens")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Children</button>
            <button onClick={() => filterByGenres("Classics")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Classics</button>
            <button onClick={() => filterByGenres("Philosophy")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Philosophy</button>
            <button onClick={() => filterByGenres("Academic")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Academic</button>
            <button onClick={() => filterByGenres("Fiction")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Fiction</button>
            <button onClick={() => filterByGenres("Horror")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Horror</button>
            <button onClick={() => filterByGenres("Crime")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Crime</button>
            <button onClick={() => filterByGenres("Adventure")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Adventure</button>
            <button onClick={() => filterByGenres("Psychology")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Psychology</button>
            <button onClick={() => filterByGenres("Biography")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Biography</button>
            <button onClick={() => filterByGenres("Cultural")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">Cultural</button>
            <button onClick={() => filterByGenres("War")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2">War</button>
        </div>
        <div className="flex w-full h-[5rem] justify-center items-center">
          <Searchbar searchVal={searchVal} setSearchVal={setSearchVal}/>
        </div>
        <div className="w-full justify-center flex flex-wrap gap-5">

          {
          booksToDisplay.slice(0, 28).map((element, id) => {
            return(
              <div key={id}  className="card w-[15rem] h-[25rem] flex flex-col  bg-[#ebebe5] rounded-md overflow-hidden">
                <Link  href={`/testpage/${searchIndex(element)}`}>
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
                      <h1 className="text-lg line-clamp-1 px-4 font-bold">{element.title}</h1>
                  </div>
                  <div className="w-full h-[2rem] ">
                      <p className="text-start px-2">{element.authors}</p>
                  </div>
                  <div className="w-full h-[3rem]  flex">
                      <div className="left w-1/2 h-full flex justify-center items-center">
                       <p>Price: {(element.rating * 3).toFixed(2) + "€"}</p>
                      </div>
                      <div className="right w-1/2 h-full flex justify-center items-center">
                        <div className="flex w-[4rem] h-[2rem] bg-black rounded-sm border-white border-[2px]">
                          <button className="w-full h-full text-white">View</button>
                        </div>
                      </div>
                  </div>
                </Link> 
              </div>
            )
          })
          
          }
        </div>
      </div>
        
    )
  }
  
  export default Api