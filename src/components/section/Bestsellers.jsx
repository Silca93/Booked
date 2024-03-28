import React from 'react'

export default function Bestsellers() {
  return (
    <div className="Bestsellers w-full h-[50.6rem] bg-white flex flex-col">
        <div className="w-full h-[10%] flex justify-between px-4 py-4">
            <h1 className="text-xl font-bold">Bestsellers</h1>
            <p>View More</p>
        </div>
        <div className="w-full h-[90%] flex flex-col justify-start items-center gap-6">
            <div className="flex w-full h-[10rem] bg-red-400 justify-center gap-4">
               <h1 className="text-2xl">1</h1>
               {/* <img src="" alt="" /> */}
               <p>IMAGE</p>
               <div className="flex flex-col gap-2">
                  <p>Book Title</p>
                  <p>Book Author</p>
               </div>
            </div>
            <div className="flex w-full h-[10rem] bg-green-400 justify-center gap-4">
               <h1 className="text-2xl">2</h1>
               {/* <img src="" alt="" /> */}
               <p>IMAGE</p>
               <div className="flex flex-col gap-2">
                  <p>Book Title</p>
                  <p>Book Author</p>
               </div>
            </div>
            <div className="flex w-full h-[10rem] bg-red-400 justify-center gap-4">
               <h1 className="text-2xl">3</h1>
               {/* <img src="" alt="" /> */}
               <p>IMAGE</p>
               <div className="flex flex-col gap-2">
                  <p>Book Title</p>
                  <p>Book Author</p>
               </div>
            </div>
            <div className="flex w-full h-[10rem] bg-green-400 justify-center gap-4">
               <h1 className="text-2xl">4</h1>
               {/* <img src="" alt="" /> */}
               <p>IMAGE</p>
               <div className="flex flex-col gap-2">
                  <p>Book Title</p>
                  <p>Book Author</p>
               </div>
            </div>
        </div>
    </div>
  )
}
