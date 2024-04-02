'use client'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchContent } from "@/Redux/slices/apiSlice"
import { randomPrice } from "@/Redux/slices/BookPrice"
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
      dispatch(randomPrice());
    }, [data.length] )
    
    const isLoading = useSelector((state) => state.content.isLoading)
    const error = useSelector((state) => state.content.error)
    const bookPrice = useSelector((state) => state.price.value)
    

    //Searchbar usestates//
    const searching = useSelector((state) => state.search.searchVal)

   
    
    const [filteredBooks, setFilteredBooks] = useState(data);

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

  //if the searchbar is empty, we will map data instead of filteredBooks. Otherwise the mapping will be empty upon page reload.
  const booksToDisplay = searchVal.length === 0 ? data : filteredBooks
    
    if (isLoading) {
      return <span className="loading loading-spinner loading-lg"></span>

    }
  
    if (error) {
      return error
    }
    
       return (
      <div className="flex flex-col gap-5 w-full">
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