"use client";

// components/ScrollableDiv.js
import { useEffect } from "react";

const ScrollableDiv = () => {
  useEffect(() => {
    const handleScroll = () => {
      console.log(JSON.stringify(window.scrollY));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div className="relative  w-full bg-gray-200 grain overflow-hidden">
        {Array.from({ length: 300 }, (_, i) => (
          <div
            key={i}
            className="absolute left-0 w-full border-b   border-gray-400"
            style={{ top: `${i * 30}px` }}
          >
            <span className=" ml-2">{i + 1}</span>
          </div>
        ))}
        <div className="border w-full font-bold absolute z-50 top-0 flex h-screen justify-center items-center text-[100px] ">
        ITS NOISE !!
      </div>
      </div>

      
    </div>
  );
};

export default ScrollableDiv;
