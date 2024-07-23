import React from "react";
import "./stylefive.css";

const BlinkTextEffect = () => {
  return (
    <div className="h-screen wrap">
      <div class="flex justify-center items-center h-1/2  text-white bg-black">
        <div class="text-8xl flex gap-1 justify-center items-center">
          <p class="ltrs one">A</p>
          <p class="ltrs two">p</p>
          <p class="ltrs three">u</p>
          <p class="ltrs four">v</p>
          <p class="ltrs five">a</p>
        </div>
        <div class=" text-8xl font-black flex justify-center items-center gap-2">
          <div class="">.</div>
          <div class="">.</div>
          <div class="animate-bounce">.</div>
        </div>
      </div>
      <div className="">
        <div class="">
          <div class="">
            <svg class="animatesp" width="200" height="200">
              <path
                id="curve"
                d="M 100,60 a 40,40 0 1,1 0,80 a 40,40 0 1,1 0,-80"
                fill="none"
                stroke=""
              />
              <text>
                <textPath xlinkHref="#curve">
                  {" "}
                  smiles smiles smiles smiles smiles smiles smiles smiles smiles
                  smiles smiles smiles smiles smiles smiles smiles smiles smiles
                  smiles smiles{" "}
                </textPath>
              </text>
            </svg>
          </div>
          <div class="relative bottom-[115px] left-[80px]">
            <svg width="50" height="30">
              <line
                x1="5"
                y1="15"
                x2="35"
                y2="15"
                stroke="black"
                stroke-width="2"
              />
              <polyline
                points="30,10 35,15 30,20"
                stroke="black"
                stroke-width="2"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="py-8">
      <div class="line"></div>
      </div>
    </div>
  );
};

export default BlinkTextEffect;
