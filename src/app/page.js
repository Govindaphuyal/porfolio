"use client"
import { useRef } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

export default function Slider() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = window.innerWidth;
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative h-screen overflow-y-hidden scrollbar-hide">
      {/* Define the right-to-left animation */}
      <style>{`
        @keyframes sequence {
          0% { opacity: 0; transform: translateX(20px); } /* Start off-screen to the right */
          100% { opacity: 1; transform: translateX(0); }
        }
        .letter {
          display: inline-block;
          animation: sequence 0.5s ease forwards;
        }
      `}</style>

      {/* Left Arrow */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
        onClick={() => scroll('left')}
      >
        <ArrowLeftIcon className="w-6 h-6 text-white" />
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
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1513614835783-51537729c8ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
          >
            <div className="flex items-center justify-center h-full text-4xl text-white">
              {i === 0 ? (
                <span>
                  Welcome to 
                  {/* Split "Govinda" into characters with staggered animation */}
                  <span className='text-red-900'>
                    {Array.from("Govinda").map((char, index) => (
                      <span 
                        key={index} 
                        className="letter" 
                        style={{ animationDelay: `${index * 0.1}s` }} // Adjust delay for spacing
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                  <div>Phuyal</div>
                </span>
              ) : i === 1 ? (
                'Colaborate your Dream'
              ) : (
                "It's my Portfolio"
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
        onClick={() => scroll('right')}
      >
        <ArrowRightIcon className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}