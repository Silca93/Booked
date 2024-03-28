
'use client';
import Image from "next/image";
import Carrousel from "@/components/Carrousel";
import Link from "next/link";
import Api from "./testpage/page";
import { addBasket, removeBasket } from '@/Redux/slices/slices';
import { useDispatch, useSelector } from 'react-redux';

import Bestbooks from "@/components/getInspired/Bestbooks";
import Greatreads from "@/components/getInspired/Greatreads";
import Getlost from "@/components/getInspired/Getlost";
import Kidsread from "@/components/getInspired/Kidsread";
import Bestart from "@/components/getInspired/Bestart";
import { data } from "autoprefixer";

export default async function Home() {
  const dispatch = useDispatch();
  
  const response = await fetch('https:/example-data.draftbit.com/books');
  const data = await response.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5 bg-[#ebebe5]">
      <div className="my-5">
        
        <Carrousel/>
      </div>
       
          <div className="w-screen flex  justify-center items-center gap-5 flex-wrap mt-4 mb-4">
           <Api/>
        {/* {data.slice(0, 240).map((element, index) => (
           <Link href={`/${index}`}>
            <div key={index} className="w-[20rem] h-[25rem] flex flex-col bg-[#dedcd6] rounded-lg overflow-hidden">
                <div className="w-full h-[18rem]  flex justify-center">
                    <img src={element.image_url} alt="" width="100%"  />
                    <Image
                    src={element.image_url}
                    alt='image of the book cover'
                    width={100}
                    height={100}
                    />
                </div>
                <div className="w-full h-[2rem]  flex flex-col justify-start items-center">
                    <h1 className="text-lg">{element.title}</h1>
                </div>
                <div className="w-full h-[2rem] ">
                    <p className="text-start px-2">{element.authors}</p>
                </div>
                <div className="w-full h-[3rem]  flex">
                    <div className="left w-1/2 h-full flex justify-center items-center">
                        Price: {Math.floor(Math.random()*(20 - 5 + 1) + 5)} €
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
        } */}
          </div>
        {/* </Link> */}
        <h1 className="text-xl font-bold my-[3rem]">Get inspired</h1> 
      <div className="w-[90%] flex gap-2 ">
        <div className="left w-1/2">
          <div className="top w-full my-2">
            <Bestbooks/>
          </div>
          <div className="bot w-full my-2">
            <Greatreads/>
          </div>
        </div>
        <div className="right w-1/2">
          <div className="top w-full my-2">
            <Getlost/>
          </div>
          <div className="bot w-full my-2 flex gap-2">
            <div className="left w-1/2">
             <Kidsread/>
            </div>
            <div className="right w-1/2">
              <Bestart/>
            </div>
          </div>
        </div>
      </div> 
    </main>
  );
}