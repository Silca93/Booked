import React from 'react'

export default function Self() {
  return (
    <div className=" w-full h-[25rem] bg-white flex flex-col ">
    <div className="flex justify-between  w-full h-[15%] px-3 py-3 ">
       <h1 className="text-xl font-bold ">Self-Development</h1>
       <button className="">View More</button>
    </div>
    {/* <span className="my-1 b"><hr className="bg-black"></hr></span> */}
    <div className="w-full h-[85%] flex justify-center gap-[3rem] bg-[#F4F4F2]">
        <div className="flex w-[19%] h-full">
           <div className="flex h-full w-full flex-col gap-2">
              <div className="Gears w-full h-[65%] bg-green-600 flex justify-center items-center">
                 
              </div>
              <p className="px-2">The Laws of critical thinking</p>
              <p className="px-2">Bella Gibson</p>
              <p className="px-2 text-orange-400 text-xl"> {Math.floor(Math.random()*(20 - 5 + 1) + 5)} €</p>
           </div> 
        </div>
        <div className="flex w-[19%] ">
            <div className="flex h-full w-full flex-col gap-2">
                <div className="Silouhette w-full h-[65%] bg-green-600 flex justify-center items-center overflow-hidden">
                
                </div>
                <p className="px-2">12 Rules of brain</p>
                <p className="px-2">James Butter</p>
                <p className="px-2 text-orange-400 text-xl"> {Math.floor(Math.random()*(20 - 5 + 1) + 5)} €</p>
            </div> 
        </div>
        <div className="flex w-[19%] ">
            <div className="flex h-full w-full flex-col gap-2">
                <div className="Loved w-full h-[65%] bg-green-600 flex justify-center items-center">
                    
                </div>
                <p className="px-2">How to be loved</p>
                <p className="px-2">Simon Collins</p>
                <p className="px-2 text-orange-400 text-xl"> {Math.floor(Math.random()*(20 - 5 + 1) + 5)} €</p>
            </div>       
        </div>
        <div className="flex w-[19%] ">
        <div className="flex h-full w-full flex-col gap-2">
            <div className="Health w-full h-[65%] bg-green-600 flex justify-center items-center overflow-hidden">
                
            </div>
            <p className="px-2">Meditation, Sport & Nutrition</p>
            <p className="px-2">Michael Key</p>
            <p className="px-2 text-orange-400 text-xl"> {Math.floor(Math.random()*(20 - 5 + 1) + 5)} €</p>
            </div>       
        </div>
    </div>
</div>
  )
}
