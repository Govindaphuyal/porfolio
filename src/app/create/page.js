import React from 'react'

const create= () => {
  return (
    <div className='relative left-[500] h-20 w-[50vh] mt-9'>
        <div  className="step-content">
      <h2 className="text-lg md:text-2xl font-semibold mb-4">Personal Info</h2>
      <form id="formStep1">
        <div className="mb-4">
          <label className="block text-white text-sm md:text-base">Full Name</label>
          <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#106C4F]" placeholder="John Doe"/>
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm md:text-base">Email</label>
          <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#106C4F]" placeholder="john@example.com"/>
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm md:text-base">Image</label>
          <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#106C4F]" placeholder="john@example.com"/>
        </div>
        <button className="mt-4 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300 cursor-pointer">Create</button>

      </form>
    </div>

    </div>
  )
}

export default create