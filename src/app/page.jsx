
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

//

import Little from "@/components/section/Little";
import Self from "@/components/section/Self";
import Bestsellers from "@/components/section/Bestsellers";


export default async function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5 bg-[#ebebe5]">
      <div className="px-5">
        <Carrousel/>
      </div>
      <h1 className="text-2xl font-bold my-[5rem] mb-0">Discover our collection</h1>
      <div className="w-full flex py-[3rem]  justify-center items-center gap-5 flex-wrap mt-4 mb-4 bg-[#dedcd6] ">
        <Api/>
      </div>
      <h1 className="text-2xl font-bold my-[3rem]">Get inspired</h1> 
      <div className="w-[90%] flex gap-2 max-[768px]:flex-col max-[768px]:w-full max-[768px]:items-center">
        <div className="left w-1/2 max-[768px]:w-[90%]">
          <div className="top w-full my-2">
            <Bestbooks/>
          </div>
          <div className="bot w-full my-2">
            <Greatreads/>
          </div>
        </div>
        <div className="right w-1/2 max-[768px]:w-[90%]">
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
      <div className="w-[90%] flex justify-center gap-3 my-[2rem] bg-[#F3F1EE] max-[1350px]:flex-col">
        <div className="left w-[70%] flex flex-col gap-3 max-[1350px]:w-full">
          <Little/>
          <Self/>
        </div>
        <div className="right w-[30%] flex flex-col max-[1350px]:w-full">
          <Bestsellers/>
        </div>
      </div>
    </main>
  );
}