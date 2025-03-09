"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Form = () => {
    const[users,setUser]=useState()
 async function getInfo(){
    const response=await fetch('/api/info',{
        method:"GET",
        headers:{
           "Content-Type": "application/json" 
        }
        

    })
    const data=await response.json();
    setUser(data)
}
console.log(users)
    useEffect(()=>{
        getInfo()
    },[])
  return (
    <div className='flex flex-wrap gap-5'>
     {
         users?.users.map((user)=>(
            <Link href={`/edit/${user.id}`}>
<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 ">

<div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">

    <a href="#">
        <img className="w-full" src={user.Image} alt="Sunset in the mountains"/>
    </a>
    <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10">
        <h1 
            className="text-black font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">The
            Best Activewear from the Nordstrom Anniversary Sale</h1>
        <p className="text-gray-500 text-sm">
            Today, I’m covering one of my favorite parts of the Nordstrom Anniversary Sale: the activewear!
        </p>
        <p className="mt-5 text-gray-600 text-xs">
            By
            <a href="#" className="text-xs text-indigo-600 transition duration-500 ease-in-out">
                {user.FullName}
            </a> 
        </p>
    </div>

</div>

</div>
        </Link>
         ))
     }


    </div>
  )
}

export default Form