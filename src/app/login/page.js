"use client"
import  { useEffect, useState } from 'react'
import Link from 'next/link';
import bcrypt from "bcryptjs";
import { useRouter } from 'next/navigation';
const login= () => {
    const router=useRouter()
const[user,setUser]=useState();
const[login,setLogin]=useState({
    email:"",
    password:""
});

function handleChange(e){
    e.preventDefault();
    const {name,value}=e.target;
    setLogin({
        ...login,
        [name]:value
    })
}
 async function getData(){
        try {
            const response=await fetch("/api/portfolio",{
                method:"GET",
                headers:{
                   "Content-Type": "application/json" 
                           }
             })
             if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              const data = await response.json();
             setUser(data)
        } catch (error) {
            console.error("Fetch error:", error);
        }
        
     }
async function handleSubmit(e){
    e.preventDefault();
       
        try {
            const match = await bcrypt.compare(login.password, user.users[0].password);
        
            if (match) {
                router.push("/")
              console.log("Login successful!");
            } else {
              console.log("Incorrect password!");
            }
          } catch (error) {
            console.error("Error comparing passwords:", error);
          }
    }
    
    
    useEffect(()=>{
    getData()
    },[])
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    <div className="absolute inset-0 z-0">
        
    </div>

    <div className="relative z-10 bg-white p-8 rounded-md shadow-lg">
        <h1 className="text-xl font-bold mb-4 text-black">Login</h1>
        <form  onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="email">Email</label>
                <input
                    className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full" name="email"
                    id="email" type="email" placeholder="Email" onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="password">Password</label>
                <input
                    className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full" name="password"
                    id="password" type="password" placeholder="Password" onChange={handleChange}/>
            </div>
            <div className="flex items-center justify-between gap-8">
            <Link className="inline-block align-baseline font-bold text-sm text-cyan-500 hover:text-cyan-800"
                    href="/register">
                    create account
                </Link>
                <button
                    className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Sign In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-cyan-500 hover:text-cyan-800"
                    href="#">
                    Forgot Password?
                </a>
            </div>
        </form>
    </div>
</div>
    </div>
  )
}

export default login
