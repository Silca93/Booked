'use client'
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { addEmail, addPassword, addUsername, logIn } from '@/Redux/slices/loginSlice'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
 

  const userMail = useSelector((state) => state.login.value.email);
  const userName = useSelector((state) => state.login.value.username);
  const userPwd = useSelector((state) => state.login.value.password);

  const connected = useSelector((state) => state.login.value.logged)

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const checkCredentials = () => {
    if(email === userMail && username === userName && password === userPwd) {
        setTimeout(() => {
            
            router.push("/")
            
        }, 1000);
        
        
    }else {
        alert("wrong credentials!")
    }
  }
  
  

  return (
    <div className="w-full h-[40rem] flex justify-center items-center">
        <div className="flex flex-col gap-3 justify-center items-center bg-red-400 w-[25rem] h-[25rem]">
            <div className="email">
                <input onChange={(e) =>setEmail(e.target.value)} type="email" placeholder='Email'/>
            </div>
            <div className="username">
                <input onChange={(e) =>setUsername(e.target.value)} type="text" placeholder='username' />
            </div>
            <div className="password">
                <input onChange={(e) =>setPassword(e.target.value)} type="password" placeholder='password' />
            </div>
            <button onClick={() => {dispatch(logIn());checkCredentials(); goToLogin()}} className="w-[10rem] h-[3rem] bg-white">Login{connected ? " fuck yeah!" : " fuck off"}</button>
        </div>
    </div>
  )
}
