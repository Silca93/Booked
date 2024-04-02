'use client'
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { addEmail, addPassword, addUsername, logIn } from '@/Redux/slices/loginSlice'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Register() {
    const router = useRouter()

    const goToLogin = () => {
        setTimeout(() => {
           router.push("/validation")
        }, 500);
        setTimeout(() => {
            router.push("/login")
        }, 3000);
      }
    const dispatch = useDispatch();
    const mail = useSelector((state) => state.login.value.email)
  return (
    <div className="w-full h-[40rem] flex justify-center items-center">
        <div className="flex flex-col gap-3 justify-center items-center bg-red-400 w-[25rem] h-[25rem]">
            
            <div className="email">
                <input onChange={(e)=> dispatch(addEmail(e.target.value))} type="email"  placeholder='Email' />
            </div>
            <div className="username">
                <input onChange={(e)=> dispatch(addUsername(e.target.value))} type="text" placeholder='username' />
            </div>
            <div className="password">
                <input onChange={(e)=> dispatch(addPassword(e.target.value))} type="password" placeholder='password' />
            </div>
              <button onClick={() => goToLogin()} className="w-[10rem] h-[3rem] bg-white">Register</button>
        </div>
    </div>
  )
}
