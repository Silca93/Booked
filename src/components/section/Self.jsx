import React from 'react'

export default function Self() {
  return (
    <div className=" w-full h-[25rem] bg-white flex flex-col">
        <div className="flex justify-between px-3 py-3 w-full h-[15%]">
           <h1 className="text-xl font-bold">Self-Development</h1>
           <button>View More</button>
        </div>
        <div className="w-full h-[85%] flex justify-center gap-5 bg-gray-300">
            <div className="flex w-[22%] h-full bg-red-500">
               <div className="flex h-full w-full flex-col gap-2">
                  <div className="w-full h-[60%] bg-green-600 flex justify-center items-center">
                     <p>IMAGE</p>
                  </div>
                  <p className="px-2">The magic aventure of Leo</p>
                  <p className="px-2">Book Author</p>
                  <p className="px-2">Price: {Math.floor(Math.random()*(20 - 5 + 1) + 5)} €</p>
               </div> 
            </div>
            <div className="flex w-[22%] bg-red-500">
                <div className="flex h-full w-full flex-col gap-2">
                    <div className="w-full h-[60%] bg-green-600 flex justify-center items-center">
                        <p>IMAGE</p>
                    </div>
                    <p className="px-2">The Little Prince</p>
                    <p className="px-2">Book Author</p>
                    <p className="px-2">Price: {Math.floor(Math.random()*(20 - 5 + 1) + 5)} €</p>
                </div> 
            </div>
            <div className="flex w-[22%] bg-red-500">
                <div className="flex h-full w-full flex-col gap-2">
                    <div className="w-full h-[60%] bg-green-600 flex justify-center items-center">
                        <p>IMAGE</p>
                    </div>
                    <p className="px-2">The magic aventure of Luna</p>
                    <p className="px-2">Book author</p>
                    <p className="px-2">Price: {Math.floor(Math.random()*(20 - 5 + 1) + 5)} €</p>
                </div>       
            </div>
            <div className="flex w-[22%] bg-red-500">
            <div className="flex h-full w-full flex-col gap-2">
                    <div className="w-full h-[60%] bg-green-600 flex justify-center items-center">
                        <p>IMAGE</p>
                    </div>
                    <p className="px-2">The Room</p>
                    <p className="px-2">Book author</p>
                    <p className="px-2">Price: {Math.floor(Math.random()*(20 - 5 + 1) + 5)} €</p>
                </div>       
            </div>
        </div>
    </div>
  )
}
