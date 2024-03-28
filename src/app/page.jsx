
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