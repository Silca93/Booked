import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default async function API() {
      const response = await fetch('https:/example-data.draftbit.com/books');
      const data = await response.json();
      
      

  return (
    <>
        {
        data.slice(0, 20).map((element, index) => (
           <Link  href={`/${index}`}>
            <div key={index} className="w-[20rem] h-[25rem] flex flex-col bg-[#dedcd6] rounded-lg overflow-hidden">
                <div className="w-full h-[18rem]  flex justify-center">
                    <img src={element.image_url} alt="" width="100%"  />
                    {/* <Image
                    src={element.image_url}
                    alt='image of the book cover'
                    width={100}
                    height={100}
                    /> */}
                </div>
                <div className="w-full h-[2rem]  flex flex-col justify-start items-center">
                    <h1 className="text-lg">{element.title}</h1>
                </div>
                <div className="w-full h-[2rem] ">
                    <p className="text-start px-2">{element.authors}</p>
                </div>
                <div className="w-full h-[3rem]  flex">
                    <div className="left w-1/2 h-full flex justify-center items-center">
                        Price: {Math.floor(Math.random()*20)} €
                    </div>
                    <div className="right w-1/2 h-full flex justify-center items-center">
                        <div className="flex w-[4rem] h-[2rem] bg-red-400 rounded-lg border-white border-[2px]">
                            <button className="w-full h-full text-white">Buy</button>
                        </div>
                    </div>

                </div>
      
             </div>
           </Link> 
      
        ))
        }
    </>
    
  )
}


