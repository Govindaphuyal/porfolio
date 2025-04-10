"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Create = () => {
  const router = useRouter();
  const [info, setInfo] = useState({
    FullName: "",
    Title: "",
    Image: "",
    description: "",
  });

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
      const response = await fetch("/api/info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });
      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const result = await response.json();
      console.log("Response from server:", result);

      setInfo({ FullName: "", Title: "", Image: "", description: "" });
      router.push("/");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-center text-gray-800 mb-6 md:text-xl">
          Personal Info
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#106C4F]"
              name="FullName"
              placeholder="John Doe"
              value={info.FullName}
              onChange={handleChange}
            />
          </div>

          {/* Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#106C4F]"
              name="Title"
              placeholder="Software Developer"
              value={info.Title}
              onChange={handleChange}
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#106C4F]"
              name="description"
              placeholder="Write a short message about yourself"
              value={info.description}
              onChange={handleChange}
            />
          </div>

          {/* Image URL */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#106C4F]"
              name="Image"
              placeholder="Enter image URL"
              value={info.Image}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300 cursor-pointer"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;