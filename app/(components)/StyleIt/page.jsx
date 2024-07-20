'use client'
import Spline from '@splinetool/react-spline';

export default function App() {
  return (
   <div className="h-screen md:flex-row flex  flex-col justify-evenly items-center bg-[#2d2e32]">
    <div className="text-7xl">
      Ladybug
    </div>
    <div className=" h-96 w-96">
     <Spline scene="https://prod.spline.design/GFGyX2X1o5PYh6OP/scene.splinecode" />
   </div>
   </div>
  );
}
