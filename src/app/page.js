"use client";
import { useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Form from "./component/Form";

function Slide({ index, backgroundImage, children }) {
  return (
    <div
      className="flex-shrink-0 w-screen h-screen snap-start bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex items-center justify-center h-full text-center">
        {children}
      </div>
    </div>
  );
}

export default function Slider() {
  const sliderRef = useRef(null);

  // Scroll Functionality
  const scroll = (direction) => {
    const scrollAmount = window.innerWidth;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") scroll("left");
      if (e.key === "ArrowRight") scroll("right");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Background Images for Slides
  const images = [
    "https://images.unsplash.com/photo-1513614835783-51537729c8ba",
    "https://images.unsplash.com/photo-1520342868574-5fa3804e551c",
    "https://images.unsplash.com/photo-1516972810927-80185027ca84",
  ];

  return (
    <>
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
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>

      {/* Main Slider Container */}
      <div className="relative h-screen overflow-y-hidden scrollbar-hide">
        {/* Left Navigation Button */}
        <button
          aria-label="Scroll Left"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition lg:left-8"
          onClick={() => scroll("left")}
        >
          <FaArrowLeft className="w-6 h-6 text-white lg:w-8 lg:h-8" />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory relative z-0 scrollbar-hide"
        >
          {images.map((image, i) => (
            <Slide key={i} index={i} backgroundImage={image}>
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
                   {`It's my Portfolio`}                </span>
              )}
            </Slide>
          ))}
        </div>

        {/* Right Navigation Button */}
        <button
          aria-label="Scroll Right"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition lg:right-8"
          onClick={() => scroll("right")}
        >
          <FaArrowRight className="w-6 h-6 text-white lg:w-8 lg:h-8" />
        </button>
      </div>

      {/* Form Section */}
      <section className="p-4 lg:p-8 bg-gray-100">
        <Form />
      </section>
    </>
  );
}