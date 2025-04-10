'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Tween } from 'react-gsap'

const Form = () => {
  const [users, setUser] = useState(null)

  async function getInfo() {
    const response = await fetch('/api/info', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    setUser(data)
  }

  useEffect(() => {
    getInfo()
  }, [])

  return (
    <div className='flex flex-wrap gap-5'>
      {users?.users.map((user) => (
        <Tween to={{ x: '200px' }} key={user.id} stagger={0.2} ease="elastic.out(0.2, 0.1)">
        
          <Link href={`/edit/${user.id}`}>
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 cursor-pointer">
              <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto shadow-lg hover:shadow-xl transition">
                <Image
                  className="w-full"
                  src={user.Image}
                  alt="User Image"
                  width={800}
                  height={600}
                  priority
                />
                <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10">
                  <h1 className="text-black font-semibold text-lg hover:text-indigo-600 transition duration-500">
                    The Best Activewear from the Nordstrom Anniversary Sale
                  </h1>
                  <p className="text-gray-500 text-sm">
                    Today, I’m covering one of my favorite parts of the Nordstrom Anniversary Sale: the activewear!
                  </p>
                  <h2 className="text-xs text-indigo-600 mt-2">{user.FullName}</h2>
                </div>
              </div>
            </div>
          </Link>
        </Tween>
      ))}
    </div>
  )
}

export default Form
