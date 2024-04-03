import React from 'react'

export default function Self() {
  return (
    <div className=" w-full h-[25rem]  bg-white flex flex-col max-[720px]:h-[120rem]">
        <div className="flex justify-between  w-full h-[15%] px-3 py-3 max-[720px]:h-[5rem] ">
            <h1 className="text-xl font-bold ">Self-Development</h1>
            <button className="">View More</button>
        </div>
    {/* <span className="my-1 b"><hr className="bg-black"></hr></span> */}
    <div className="w-full h-[85%] flex justify-center gap-[3rem] bg-[#F4F4F2] max-[720px]:flex-col  max-[720px]:items-center">
        <div className="flex w-[19%] h-full max-[720px]:w-[40%] max-[720px]:h-[100rem]">
           <div className="flex h-full w-full flex-col gap-2 max-[720px]:h-[20rem]">
              <div className="Gears w-full h-[65%] bg-green-600 flex justify-center items-center flex-shrink-0">
                 
              </div>
              <p className="px-2 max-[1000px]:text-sm">The Laws of critical thinking</p>
              <p className="px-2 max-[1000px]:text-sm">Bella Gibson</p>
              <p className="px-2 max-[1000px]:text-sm text-orange-400 text-md"> {Math.floor(Math.random()*(20 - 5 + 1) + 5)} €</p>
           </div> 
        </div>
        <div className="flex w-[19%] h-full max-[720px]:w-[40%] max-[720px]:h-[100rem]">
            <div className="flex h-full w-full flex-col gap-2 max-[720px]:h-[20rem]">
                <div className="Silouhette w-full h-[65%] bg-green-600 flex justify-center items-center overflow-hidden flex-shrink-0">
                
                </div>
                <p className="px-2 max-[1000px]:text-sm">12 Rules of brain</p>
                <p className="px-2 max-[1000px]:text-sm">James Butter</p>
                <p className="px-2 max-[1000px]:text-sm text-orange-400 text-md"> {Math.floor(Math.random()*(20 - 5 + 1) + 5)} €</p>
            </div> 
        </div>
        <div className="flex w-[19%] h-full max-[720px]:w-[40%] max-[720px]:h-[100rem]  ">
            <div className="flex h-full w-full flex-col gap-2 max-[720px]:h-[20rem]">
                <div className="Loved w-full h-[65%] bg-green-600 flex justify-center items-center flex-shrink-0">
                    
                </div>
                <p className="px-2 max-[1000px]:text-sm">How to be loved</p>
                <p className="px-2 max-[1000px]:text-sm">Simon Collins</p>
                <p className="px-2 max-[1000px]:text-sm text-orange-400 text-md"> {Math.floor(Math.random()*(20 - 5 + 1) + 5)} €</p>
            </div>       
        </div>
        <div className="flex w-[19%] h-full max-[720px]:w-[40%] max-[720px]:h-[100rem]">
        <div className="flex h-full w-full flex-col gap-2 max-[720px]:h-[20rem]">
            <div className="Health w-full h-[65%]  bg-green-600 flex justify-center items-center overflow-hidden flex-shrink-0">
                
            </div>
            <p className="px-2 max-[1000px]:text-sm text-sm max-[768px]:text-[11px]">Meditation, Sport & Nutrition</p>
            <p className="px-2 max-[1000px]:text-sm max-[768px]:text-[11px]">Michael Key</p>
            <p className="px-2 max-[1000px]:text-sm max-[768px]:text-[11px] text-orange-400 text-md"> {Math.floor(Math.random()*(20 - 5 + 1) + 5)} €</p>
            </div>       
        </div>
    </div>
</div>
  )
}
