import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div >
      <nav className=" bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
    <a className="font-bold text-xl tracking-tight" href="/">Portfolio</a>
    <div className="flex items-center">
        <Link className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/">Home</Link>
        <Link className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/about">About</Link>
        <Link className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Contact</Link>
        <div className="relative right-1 ">

        <Link href="/create">

        <button className="mt-4 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300 cursor-pointer">Create</button>
        </Link>
        </div>
        <Link href="/login">

        <button className="mt-4 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300 cursor-pointer">Login</button>
        </Link>

    </div>
</nav>
    </div>
  )
}

export default Navbar
