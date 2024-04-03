import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

//images//
import theroom from './../../assets/images/images/Theroom.jpg'


export default function Little() {
  return (
   <div className=" w-full h-[25rem] bg-white flex flex-col max-[720px]:h-[120rem]">
        <div className="flex justify-between px-3 py-3 w-full h-[15%] max-[720px]:h-[5rem]">
           <h1 className="text-xl font-bold">For Little Readers</h1>
           <button>View More</button>
        </div>
        <div className="w-full h-[85%] bg-[#F4F4F2] flex justify-center gap-[3rem] max-[720px]:flex-col max-[720px]:items-center">
            <div className="flex w-[19%] h-full max-[720px]:w-[40%] max-[720px]:h-[100rem]">
               <div className="flex h-full w-full flex-col gap-2">
                  <div className="Harlem w-full h-[65%] bg-green-600 flex justify-center items-center flex-shrink-0">
                     
                  </div>
                  <p className="px-2 max-[1000px]:text-sm">Harlem</p>
                  <p className="px-2 max-[1000px]:text-sm">Walter Dean Myers</p>
                  <p className="px-2 max-[1000px]:text-sm text-orange-400 text-xl"> {Math.floor(Math.random()*(20 - 5 + 1) + 5)} €</p>
               </div> 
            </div>
            <div className="flex w-[19%] h-full max-[720px]:w-[40%] max-[720px]:h-[100rem]">
                <div className="flex h-full w-full flex-col gap-2 max-[1000px]:text-sm">
                    <div className="Prince w-full h-[65%] bg-green-600 flex justify-center items-center overflow-hidden flex-shrink-0">
                    
                    </div>
                    <p className="px-2 max-[1000px]:text-sm">The Little Prince</p>
                    <p className="px-2 max-[1000px]:text-sm">Antoine de Saint-Exupéry</p>
                    <p className="px-2 max-[1000px]:text-sm text-orange-400 text-xl"> {Math.floor(Math.random()*(20 - 5 + 1) + 5)} €</p>
                </div> 
            </div>
            <div className="flex w-[19%] h-full max-[720px]:w-[40%] max-[720px]:h-[100rem]">
                <div className="flex h-full w-full flex-col gap-2 max-[1000px]:text-sm">
                    <div className="Drowned w-full h-[65%] bg-green-600 flex justify-center items-center flex-shrink-0">
                        
                    </div>
                    <p className="px-2 max-[1000px]:text-sm">The drowned woods</p>
                    <p className="px-2 max-[1000px]:text-sm">Emily Lloyd-Jones</p>
                    <p className="px-2 max-[1000px]:text-sm text-orange-400 text-xl"> {Math.floor(Math.random()*(20 - 5 + 1) + 5)} €</p>
                </div>       
            </div>

            
            <div className="flex w-[19%] h-full max-[720px]:w-[40%] max-[720px]:h-[100rem]">
                    <div className="flex h-full w-full flex-col gap-2">
                        <div className="Room w-full h-[65%] bg-green-600 flex justify-center items-center overflow-hidden flex-shrink-0">
                            <a className="w-full h-full" href="https://www.youtube.com/watch?v=IJ_icDmulqU"></a>
                        </div>
                        <p className="px-2 max-[1000px]:text-sm">The Room</p>
                        <p className="px-2 max-[1000px]:text-sm">Tommy Wiseau</p>
                        <p className="px-2 max-[1000px]:text-sm text-orange-400 text-xl"> {Math.floor(Math.random()*(20 - 5 + 1) + 5)} €</p>
                    </div>       
            </div>
        </div>
    </div>
  )
}
