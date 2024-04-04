import React from 'react'
import { IoSearch } from "react-icons/io5";


export default function Searchbar({setSearchVal}) {

return (
    <div className="flex w-[20rem] h-[2rem]">
        <div className="w-[15%] h-full bg-orange-500 rounded-l-md flex justify-center items-center">
            <IoSearch size={20} style={{color: 'white'}} />
        </div>
        <div className="w-[75%] h-full  rounded-r-md">
            <input onChange={(e) => setSearchVal(e.target.value)} type="text" placeholder='Titles | Authors' className="px-3 w-[100%] h-full rounded-r-md" />
        </div>
    </div>
)
}
