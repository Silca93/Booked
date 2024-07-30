'use client'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "@/Redux/slices/apiSlice";
import { IoMdArrowDropdown } from "react-icons/io";
import Searchbar from "@/components/Searchbar";
import Link from "next/link";
import React from "react";

function Api() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.content.contents);

    // Use Redux to get the search value
    const searchVal = useSelector((state) => state.search.searchVal);

    const isLoading = useSelector((state) => state.content.isLoading);
    const error = useSelector((state) => state.content.error);
    const bookPrice = useSelector((state) => state.price.value);

    const [filteredBooks, setFilteredBooks] = useState([]);
    const [filter, setFilter] = useState(false);
    const [show, setShow] = useState(false);

    const [all, setAll] = useState(true);
    const [initialLoad, setInitialLoad] = useState(true);  // Track if it's the initial load

    // Fetch content on initial load
    useEffect(() => {
      if (!data.length) {
        dispatch(fetchContent());
      } else {
        setFilteredBooks(data);  // Set initial filtered books to all data
      }
    }, [data, dispatch]);

    // Filter books by search value whenever it changes
    useEffect(() => {
      const filterBySearch = () => {
        if (searchVal.length === 0) {
          setFilteredBooks(data);  // If search is empty, show all books
          return;
        }

        const filteredBySearch = data.filter((book) =>
          (book.title && book.title.toLowerCase().includes(searchVal.toLowerCase())) ||
          book.authors.toLowerCase().includes(searchVal.toLowerCase())
        );
        setFilteredBooks(filteredBySearch);  // Update filtered books based on search
      };

      filterBySearch();
    }, [searchVal, data]);

    // Filter books by genre
    const filterByGenres = (genre) => {
      if (!data || !data.length) return;

      const filtered = data.filter((book) => book.genres && book.genres.includes(genre));
      setAll(false);
      setFilter(true);
      setInitialLoad(false);  // It's no longer the initial load
      setFilteredBooks(filtered);  // Update filtered books based on genre
    };

    const showAll = () => {
      setAll(true);
      setFilter(false);
      setFilteredBooks(data);  // Show all books
    };

    const searchIndex = (element) => {
      const result = data.findIndex((x) => x.title === element.title);
      return result;
    };

    const booksToDisplay = initialLoad ? data.slice(0, 20) : filteredBooks;

    if (isLoading) {
      return <span className="loading loading-spinner loading-lg"></span>;
    }

    if (error) {
      return error;
    }

    return (
      <div className="flex flex-col gap-5 w-full">
        <div className="flex w-full justify-center">
          <button className="w-[8rem] bg-orange-500 text-white h-[2rem] flex justify-center items-center rounded-md" onClick={() => setShow(!show)}>
            Filter genres <IoMdArrowDropdown />
          </button>
        </div>
        <div className={`w-full ${show ? "h-[3rem] max-[1560px]:h-[5rem] max-[825px]:h-[7rem] max-[576px]:h-[9rem] max-[471px]:h-[11.5rem] max-[393px]:h-[14rem] text-black border-[1px]" : "h-0 text-transparent border-none opacity-0"} bg-white duration-300 flex-wrap flex gap-5 justify-center items-center rounded-b-sm text-sm border-gray-300 px-2`}>
            <button onClick={showAll} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start hover:bg-orange-500 hover:p-2 max-[1000px]:p-0">All</button>
            <button onClick={() => filterByGenres("Science Fiction")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start hover:bg-orange-500 hover:p-2 max-[1000px]:p-0">Sci-fi</button>
            <button onClick={() => filterByGenres("Fantasy")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2 max-[1000px]:p-0">Fantasy</button>
            <button onClick={() => filterByGenres("Thriller")}className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2 max-[1000px]:p-0">Thriller</button>
            <button onClick={() => filterByGenres("Historical")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2 max-[1000px]:p-0">Historical</button>
            <button onClick={() => filterByGenres("Adult")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2 max-[1000px]:p-0">Young Adult</button>
            <button onClick={() => filterByGenres("Childrens")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2 max-[1000px]:p-0">Children</button>
            <button onClick={() => filterByGenres("Classics")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2 max-[1000px]:p-0">Classics</button>
            <button onClick={() => filterByGenres("Philosophy")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2 max-[1000px]:p-0">Philosophy</button>
            <button onClick={() => filterByGenres("Academic")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2 max-[1000px]:p-0">Academic</button>
            <button onClick={() => filterByGenres("Fiction")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2 max-[1000px]:p-0">Fiction</button>
            <button onClick={() => filterByGenres("Horror")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2 max-[1000px]:p-0">Horror</button>
            <button onClick={() => filterByGenres("Crime")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2 max-[1000px]:p-0">Crime</button>
            <button onClick={() => filterByGenres("Adventure")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2 max-[1000px]:p-0">Adventure</button>
            <button onClick={() => filterByGenres("Psychology")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2 max-[1000px]:p-0">Psychology</button>
            <button onClick={() => filterByGenres("Biography")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2 max-[1000px]:p-0">Biography</button>
            <button onClick={() => filterByGenres("Cultural")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2 max-[1000px]:p-0">Cultural</button>
            <button onClick={() => filterByGenres("War")} className="hover:underline hover:underline-offset-4 duration-200 hover:text-white px-2 text-start  hover:bg-orange-500 hover:p-2 max-[1000px]:p-0">War</button>
        </div>
        <div className="flex w-full h-[5rem] justify-center items-center">
          {/* Use the updated Searchbar component */}
          <Searchbar />
        </div>
        <div className="w-full justify-center flex flex-wrap gap-5">
          {booksToDisplay.map((element, id) => (
            <div key={id} className="card w-[15rem] h-[25rem] flex flex-col bg-[#ebebe5] rounded-md overflow-hidden">
              <Link href={`/testpage/${searchIndex(element)}`}>
                <div className="w-full h-[18rem] flex justify-center">
                  <img src={element.image_url} alt="" width="100%" />
                </div>
                <div className="w-full h-[2rem] flex flex-col justify-start items-center">
                  <h1 className="text-lg line-clamp-1 px-4 font-bold">{element.title}</h1>
                </div>
                <div className="w-full h-[2rem]">
                  <p className="text-start px-2">{element.authors}</p>
                </div>
                <div className="w-full h-[3rem] flex">
                  <div className="left w-1/2 h-full flex justify-center items-center">
                    <p className="font-bold">Price: <span className="text-orange-500">{(element.rating * 3).toFixed(2) + "€"}</span></p>
                  </div>
                  <div className="right w-1/2 h-full flex justify-center items-center">
                    <div className="flex w-[4rem] h-[2rem] bg-black rounded-sm border-white border-[2px]">
                      <button className="w-full h-full text-white">View</button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Api;
