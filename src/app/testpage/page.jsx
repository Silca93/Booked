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

   const [count, setCount] = useState(false)

    
    // const filterByGenres = () => {
    //   // Check if there is an active search query
    //   if (searchVal.length > 0) {
    //     // Filter by both search query and genre
    //     const Filtered = data.filter((book) =>
    //       book.title.toLowerCase().includes(searchVal.toLowerCase()) &&
    //       book.genres.includes("Fantasy")
    //     );
    //     setFilteredBooks(Filtered);
    //   } else {
    //     // If there is no search query, filter only by genre
    //     const Filtered = data.filter((book) => book.genres.includes("Fantasy"));
    //     setFilteredBooks(Filtered);
    //   }
    // };


   
    //copy array of my data API that will be used to filter with searchbar"
    const [filteredBooks, setFilteredBooks] = useState(data);

    const filterByGenres = (genre) => {

      const Filtered = data.filter((book) => book.genres.includes(genre))
      setCount(!count)
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
        book.title.toLowerCase().includes(searchVal.toLowerCase())
      );
      setFilteredBooks(filteredBySearch);
    };
   
    filterBySearch();
   
  }, [searchVal] );

  // useEffect(() => {
  //   const filterByGenres() => {
  //   const Filtered = data.filter((book) => book.genres.includes("Fantasy"))
  //   }
  // }, [input]);
  //!filter by genres//
  // const filterByGenres = () => {
  //   const Filtered = data.filter((book) => book.genres.some(genres => genres === "Fantasy"))
  
  //   setFilteredBooks(Filtered);
  // }



  //if the searchbar is empty, we will map data instead of filteredBooks. Otherwise the mapping will be empty upon page reload.
  const booksToDisplay = searchVal.length === 0 && !count? data : filteredBooks
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

        <button className="w-[8rem] bg-orange-500 text-white h-[2rem] flex justify-center items-center rounded-sm" onClick={() => setShow(!show)}>Filter genres <IoMdArrowDropdown />
        </button>
        
        </div>
         <div className={`w-full ${show? "h-[3rem] text-black border-[1px]" : "h-0 text-transparent border-none"}  bg-white duration-300 flex gap-5 justify-center items-center rounded-b-sm text-sm border-gray-300`}>
            <button className="hover:underline hover:underline-offset-4">Sci-fi</button>
            <button onClick={() => filterByGenres("Fantasy")} className="hover:underline hover:underline-offset-4">Fantasy</button>
            <button className="hover:underline hover:underline-offset-4">Thriller</button>
            <button className="hover:underline hover:underline-offset-4">Historical</button>
            <button className="hover:underline hover:underline-offset-4">Adult</button>
            <button className="hover:underline hover:underline-offset-4">Children</button>
            <button className="hover:underline hover:underline-offset-4">Classics</button>
            <button className="hover:underline hover:underline-offset-4">Philosophy</button>
            <button className="hover:underline hover:underline-offset-4">Academic</button>
            <button className="hover:underline hover:underline-offset-4">Fiction</button>
            <button className="hover:underline hover:underline-offset-4">Horror</button>
            <button className="hover:underline hover:underline-offset-4">Young Adult</button>
            <button className="hover:underline hover:underline-offset-4">Crime</button>
            <button className="hover:underline hover:underline-offset-4">Adventure</button>
            <button className="hover:underline hover:underline-offset-4">Psychology</button>
            <button className="hover:underline hover:underline-offset-4">Biography</button>
            <button className="hover:underline hover:underline-offset-4">Cultural</button>
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