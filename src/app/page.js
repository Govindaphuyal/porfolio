"use client";
import { useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Form from "./component/Form";

export default function Slider() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = window.innerWidth;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="relative h-screen overflow-y-hidden scrollbar-hide">
        {/* Inline Styles for Animations */}
        <style>{`
          @keyframes sequence {
            0% { opacity: 0; transform: translateX(20px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .letter {
            display: inline-block;
            animation: sequence 0.5s ease forwards;
          }
        `}</style>

        {/* Left Navigation Button */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition lg:left-8"
          onClick={() => scroll("left")}
        >
          <ArrowLeftIcon className="w-6 h-6 text-white lg:w-8 lg:h-8" />
        </button>

        {/* Slider Container */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory relative z-0 scrollbar-hide"
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-screen h-screen snap-start bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1513614835783-51537729c8ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }}
            >
              <div className="flex items-center justify-center h-full text-center">
                {i === 0 ? (
                  <span>
                    Welcome to{" "}
                    <span className="text-red-900">
                      {Array.from("Govinda").map((char, index) => (
                        <span
                          key={index}
                          className="letter"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {char}
                        </span>
                      ))}
                    </span>
                    <div className="text-2xl lg:text-4xl font-bold text-white mt-2">
                      Phuyal
                    </div>
                  </span>
                ) : i === 1 ? (
                  <span className="text-2xl lg:text-4xl font-bold text-white">
                    Collaborate your Dream
                  </span>
                ) : (
                  <span className="text-2xl lg:text-4xl font-bold text-white">
                    It's my Portfolio
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Navigation Button */}
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition lg:right-8"
          onClick={() => scroll("right")}
        >
          <ArrowRightIcon className="w-6 h-6 text-white lg:w-8 lg:h-8" />
        </button>
      </div>

      {/* Form Section */}
      <section className="p-4 lg:p-8 bg-gray-100">
        <Form />
      </section>
    </>
  );
}