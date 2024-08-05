import React from 'react'
import { IoSearch } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { setSearchVal } from '@/Redux/slices/searchSlice';

export default function Searchbar({all, filter, setAll, setFilter}) {
    
    const dispatch = useDispatch()

return (
    <div className="flex w-[25rem] h-[2.5rem] ml-[2rem] max-[1100px]:w-[17rem] max-[1100px]:h-[2rem]">
        <div className="w-[15%] h-full bg-orange-500 rounded-l-md flex justify-center items-center">
            <IoSearch className="text-white icon"  style={{color: 'white', fontSize: '1.25rem'}} />
        </div>
        <div className="w-[75%] h-full  rounded-r-md">
            <input onChange={(e) => dispatch(setSearchVal(e.target.value))} type="text" placeholder='Search by Titles | Authors' className="px-3 w-[100%] h-full rounded-r-md" />
        </div>
    </div>
)
}
