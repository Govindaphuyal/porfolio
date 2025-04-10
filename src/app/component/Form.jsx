'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Form = () => {
  const [users, setUser] = useState(null);

  async function getInfo() {
    const response = await fetch('/api/info', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setUser(data);
  }

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="flex flex-wrap gap-5 px-4 py-8">
      {users?.users.map((user, index) => (
        <motion.div
          key={user.id}
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeOut' }}
        >
          <Link href={`/edit/${user.id}`} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-500 cursor-pointer">
              {/* Image */}
              <Image
                className="w-full h-48 object-cover"
                src={user.Image}
                alt="User Image"
                width={800}
                height={600}
                priority
              />
              {/* Content */}
              <div className="relative px-4 py-6 bg-white">
                <h1 className="text-black font-semibold text-base sm:text-lg hover:text-indigo-600 transition duration-500">
                  {user.Title || 'The Best Activewear from the Nordstrom Anniversary Sale'}
                </h1>
                <p className="text-gray-500 text-xs sm:text-sm mt-2">
                  {user.Description ||
                    'Today, I’m covering one of my favorite parts of the Nordstrom Anniversary Sale: the activewear!'}
                </p>
                <h2 className="text-xs text-indigo-600 mt-2">{user.FullName}</h2>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Form;