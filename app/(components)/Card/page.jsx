'use client'
import React from 'react'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);



const page = () => {
    const container = useRef();

useGSAP(() => {
  
  gsap.to(".box", {x: 360}); 

}, { scope: container });

  return (
    <div ref={container}>
        <div className="box bg-red-500 h-80 w-60"></div>
    </div>
  )
}

export default page