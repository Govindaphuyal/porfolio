"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
const Create = () => {
  const router=useRouter()
  const [info, setInfo] = useState({ FullName: "", Title: "", Image: "",description:"" });

  function handleChange(e) {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response=await fetch('/api/info',{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify(info)
      })
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      const result = await response.json();
      console.log("Response from server:", result);

      // Optionally, reset the form after submission
      setInfo({ FullName: "", Title: "", Image: "",description:"" });
       router.push("/")
    } catch (error) {
      console.error("Error submitting form:", error);
    }
      
    }
    

  return (
    <div className='relative left-[500px] h-20 w-[50vh] mt-9'>
      <div className="step-content">
        <h2 className="text-lg md:text-2xl font-semibold mb-4">Personal Info</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm md:text-base">Full Name</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#106C4F]" 
              name="FullName" 
              placeholder="John Doe" 
              value={info.FullName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm md:text-base">Title</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#106C4F]" 
              name="Titile" 
              placeholder="software" 
              
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm md:text-base">Description</label>
            <textarea 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#106C4F]" 
              name="description" 
              placeholder="message about software" 
              
              onChange={handleChange}
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-white text-sm md:text-base">Image</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#106C4F]" 
              name="Image" 
              placeholder="Image URL" 
              value={info.Image}
              onChange={handleChange}
            />
          </div>
          <button className="mt-4 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300 cursor-pointer">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
