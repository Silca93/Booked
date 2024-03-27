
'use client';
import Image from "next/image";
import Carrousel from "@/components/Carrousel";
import Link from "next/link";
import API from "@/components/API";
import { addBasket, removeBasket } from '@/Redux/slices/slices';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.value.length);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5">
      <div className="my-5">
        
        <Carrousel/>
      </div>
        <Link href="/details">
          <div className="w-screen flex  justify-center items-center gap-5 flex-wrap mt-4 mb-4">
            <API/>
          </div>
        </Link>
      
      
      
    </main>
  );
}
