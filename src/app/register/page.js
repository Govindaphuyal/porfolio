"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
const Register = () => {
    const router=useRouter()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }
  
  async function handleSubmit(e) {
    e.preventDefault();
    
    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("/api/portfolio", {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }
      const result = await response.json();

      console.log("Response from server:", result);

      // Optionally, reset the form after successful submission
      setFormData({ username: '', email: '', password: '', confirm_password: '' });
   router.push("/login")
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="bg-white shadow-md rounded-md p-6">
          <Image className="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="User Icon" width={500}
          height={500}/>

          <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign up for an account
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <div className="mt-1">
                <input
                  name="username"
                  type="text"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1">
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1">
                <input
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="px-2 py-3 mt-1 block w-full rounded-md border text-black border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <div className="mt-1">
                <input
                  name="confirm_password"
                  type="password"
                  required
                  value={formData.confirm_password}
                  onChange={handleChange}
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm text-black"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
              >
                Register Account
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
