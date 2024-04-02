'use client'
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { addEmail, addPassword, addUsername, logIn } from '@/Redux/slices/loginSlice'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
 

 
  const userName = useSelector((state) => state.login.value.username);
  const userPwd = useSelector((state) => state.login.value.password);

  const connected = useSelector((state) => state.login.value.logged)

  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const checkCredentials = () => {
    if(username == userName && password == userPwd) {
        setTimeout(() => {
            dispatch(logIn())
            
            router.push("/")
            
        }, 1000);
        
        
    }else {
        alert("wrong credentials!")
    }
  }
  
  

  return (
    <div className="w-full h-[40rem] flex justify-center items-center">
        <div className="Shadowbox flex flex-col gap-3 justify-center items-center bg-[#f5f4f3] w-[25rem] h-[25rem] rounded-md">
                <div className="flex w-full h-[15%] bg-[#ebebe2] justify-center items-center rounded-t-md">
                    <h1 className="text-xl font-bold text-center">Login</h1>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center w-full h-[85%]">
            
                    <div className="username w-[15rem] flex h-[2.5rem] rounded-md">
                        <div className="flex justify-center items-center w-[15%] bg-orange-500 h-[full] rounded-l-md">
                            <FaRegUserCircle size={20} style={{color:'white'}} />
                        </div>
                        <div className="flex w-[85%] h-full">
                            <input onChange={(e) => {setUsername(e.target.value); console.log(username);}} className="rounded-r-md px-2" type="email"  placeholder='username' />
                        </div>
                    </div>
                    <div className="password w-[15rem] flex h-[2.5rem] rounded-md">
                        <div className="flex justify-center items-center w-[15%] bg-orange-500 h-[full] rounded-l-md">
                        <RiLockPasswordFill size={20} style={{color:'white'}} />
                        </div>
                        <div className="flex w-[85%] h-full">
                            <input onChange={(e) => {setPassword(e.target.value); console.log(password);}} className="rounded-r-md px-2" type="email"  placeholder='password' />
                        </div>
                    </div>
                    <div className="flex w-full  h-[7rem] pt-5 justify-center items-center">

                        <button onClick={() => {checkCredentials();}} className="w-[7rem] h-[2.5rem] bg-white rounded-md hover:bg-orange-500 hover:text-white">Log in</button>
                    </div>
                </div>
                
        </div>
    </div>
  )
}
