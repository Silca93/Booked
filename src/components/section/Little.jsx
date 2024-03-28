import React from 'react'
import Image from 'next/image'

//images//
import theroom from './../../assets/images/images/Theroom.jpg'

export default function Little() {
  return (
   <div className=" w-full h-[25rem] bg-white flex flex-col">
        <div className="flex justify-between px-3 py-3 w-full h-[15%]">
           <h1 className="text-xl font-bold">For Little Readers</h1>
           <button>View More</button>
        </div>
        <div className="w-full h-[85%] flex justify-center gap-5 bg-gray-300">
            <div className="flex w-[22%] h-full">
               <div className="flex h-full w-full flex-col gap-2">
                  <div className="w-full h-[65%] bg-green-600 flex justify-center items-center">
                     <p>IMAGE</p>
                  </div>
                  <p className="px-2">The magic aventure of Leo</p>
                  <p className="px-2">Book Author</p>
                  <p className="px-2 text-orange-400 text-xl"> {Math.floor(Math.random()*(20 - 5 + 1) + 5)} €</p>
               </div> 
            </div>
            <div className="flex w-[22%] ">
                <div className="flex h-full w-full flex-col gap-2">
                    <div className="w-full h-[65%] bg-green-600 flex justify-center items-center">
                        <p>IMAGE</p>
                    </div>
                    <p className="px-2">The Little Prince</p>
                    <p className="px-2">Book Author</p>
                    <p className="px-2 text-orange-400 text-xl"> {Math.floor(Math.random()*(20 - 5 + 1) + 5)} €</p>
                </div> 
            </div>
            <div className="flex w-[22%] ">
                <div className="flex h-full w-full flex-col gap-2">
                    <div className="w-full h-[65%] bg-green-600 flex justify-center items-center">
                        <p>IMAGE</p>
                    </div>
                    <p className="px-2">The magic aventure of Luna</p>
                    <p className="px-2">Book author</p>
                    <p className="px-2 text-orange-400 text-xl"> {Math.floor(Math.random()*(20 - 5 + 1) + 5)} €</p>
                </div>       
            </div>
            <div className="flex w-[22%] ">
            <div className="flex h-full w-full flex-col gap-2">
                    <div className="w-full h-[65%] bg-green-600 flex justify-center items-center overflow-hidden">
                        {/* <img src={theroom} alt="" height={100} width={200}/> */}
                        <Image
                        
                        src={theroom}
                        alt='theroom'
                        // objectFit='fill'
                        width={180}
                        height=""
                        />
                    </div>
                    <p className="px-2">The Room</p>
                    <p className="px-2">Tommy Wiseau</p>
                    <p className="px-2 text-orange-400 text-xl"> {Math.floor(Math.random()*(20 - 5 + 1) + 5)} €</p>
                </div>       
            </div>
        </div>
    </div>
  )
}
