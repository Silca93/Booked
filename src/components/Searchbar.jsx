import React from 'react'
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContent } from '@/Redux/slices/apiSlice';

export default function Searchbar({searchVal, setSearchVal}) {

//     const dispatch = useDispatch();
//     const data = useSelector((state) => state.content.contents)
//     useEffect(() => {
//     dispatch(fetchContent());
   
//     }, [])
    
//     const [searchVal, setSearchVal] = useState("");
//     const isLoading = useSelector((state) => state.content.isLoading)
//     const error = useSelector((state) => state.content.error)
//     const [filteredBooks, setFilteredBooks] = useState(data);

//     useEffect(() => {
//         const filterBySearch = () => {
    
//         if (searchVal.length < 1) {
//             setFilteredBooks(data);
//             return;
//           }
//           const filteredBySearch = data.filter((book) =>
//             book.title.toLowerCase().includes(searchVal.toLowerCase())
//           );
//           setFilteredBooks(filteredBySearch);
//         };
       
//         filterBySearch();
       
//       },  );

//       if (isLoading) {
//         return <span className="loading loading-spinner loading-lg"></span>
  
//       }
    
//       if (error) {
//         return error
//       }

return (
    <div className="flex w-[20rem] h-[2rem]">
        <div className="w-[15%] h-full bg-orange-500 rounded-l-md flex justify-center items-center">
            <IoSearch size={20} style={{color: 'white'}} />
        </div>
        <div className="w-[75%] h-full  rounded-r-md">
            <input onChange={(e) => setSearchVal(e.target.value)} type="text" placeholder='Search by title' className="px-3 w-[100%] h-full rounded-r-md" />
        </div>
    </div>
)
}
