"use client"
import Image from 'next/image'
import React, {useState, useEffect } from 'react'

const edit = ({params}) => {
    const[user,setUser]=useState()
    async function getEdit(){
        const id=await params.id
    const response=await fetch(`/api/info/${id}`,{
        method:"GET",
        headers:{
          'Content-Type':"application/json"
        },
    })
   console.log(await response.json());
   setUser(data)
}
console.log(user)
    useEffect(()=>{
        getEdit()
    },[])
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <Image
                className="w-full h-full object-cover"
        src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
        alt="Pixabay Mockup"
        width={960}
        height={720}
        priority
      />
                    
                </div>
                <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Edit</button>
                    </div>
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Delete</button>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Title</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                    ante justo. Integer euismod libero id mauris malesuada tincidunt.
                </p>
                
                    </div>
                    <div className="mb-4 " >
                    <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                    <div className=" mt-2">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                       
                    </p>
                    </div>
                </div>
                
                
                    <div>
                    
                </div>
                </div>
               
            </div>
        </div>
    

  )
}

export default edit