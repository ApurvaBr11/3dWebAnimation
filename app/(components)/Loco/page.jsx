'use client'
import React, { useEffect, useRef } from "react";
import { RiBubbleChartFill } from "react-icons/ri";
import { FaArrowTrendUp } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const NavPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  let refarrow = useRef();
  let refmain = useRef();

  useGSAP(() => {
      gsap.to(refarrow.current, {
          width: '500px',
          position:'fixed',
          top:'50px',
          scrollTrigger: {
              trigger: refarrow.current,
              // markers: true,
              start: 'top bottom',
              end: 'top  bottom',
              scrub: true
          }
      });
  }, []); // Call the effect only once when the component mounts

  return (
     <>
      <div ref={refmain} className="h-screen flex flex-col justify-center items-center NavPageone">
          <div className="text-6xl font-black">
              <div className="">Ultimate and Extreme</div>
              <div className="">UI Component Library</div>
          </div>
          <div ref={refarrow} className="absolute top-[600px] flex items-center text-white justify-between w-[200px] px-6 bg-black rounded-full h-10">
              <RiBubbleChartFill />
              <div className="flex gap-4 items-center ">
                  Start here
                  <div  className="iconarrow">
                      <FaArrowTrendUp />
                  </div>
              </div>
          </div>
      </div>
      <div className="h-screen bg-orange-200 text-[100px] font-bold  flex justify-center items-center">What a Animation !</div>
     </>
  );
};
export default NavPage;
