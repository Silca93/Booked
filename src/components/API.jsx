import React from 'react'
import Image from 'next/image';

export default async function API() {
      const response = await fetch('https:/example-data.draftbit.com/books');
      const data = await response.json();
      console.log(data);
  return (
    <>
        {
        data.map((element, index) => (
            <div key={index} className="w-[20rem] h-[25rem] flex flex-col">
                <div className="w-full h-[18rem] bg-yellow-200 flex justify-center">
                    <img src={element.image_url} alt="" width="100%"  />
                    {/* <Image
                    src={element.image_url}
                    alt='image of the book cover'
                    width={100}
                    height={100}
                    /> */}
                </div>
                <div className="w-full h-[2rem] bg-yellow-200 flex flex-col justify-start items-center">
                    <h1 className="text-lg">{element.title}</h1>
                </div>
                <div className="w-full h-[2rem] bg-yellow-200">
                    <p className="text-start px-2">{element.authors}</p>
                </div>
                <div className="w-full h-[3rem] bg-yellow-200 flex">
                    <div className="left w-1/2 h-full flex justify-center items-center">
                        Price
                    </div>
                    <div className="right w-1/2 h-full flex justify-center items-center">
                        <div className="flex w-[4rem] h-[2rem] bg-red-400 rounded-lg border-white border-[2px]">
                            <button className="w-full h-full text-white">Buy</button>
                        </div>
                    </div>

                </div>
      
             </div>
      
        ))
        }
    </>
    
  )
}


