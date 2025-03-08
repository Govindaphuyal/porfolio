"use client"
import React, { useState } from 'react'

const Create = () => {
  const [info, setInfo] = useState({ FullName: "", Email: "", Image: "" });

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
      const response=await fetch('/api/portfolio',{
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
      setInfo({ FullName: "", Email: "", Image: "" });

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
            <label className="block text-white text-sm md:text-base">Email</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#106C4F]" 
              name="Email" 
              placeholder="john@example.com" 
              value={info.Email}
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
