'use client'

import Head from 'next/head';
import { useEffect } from 'react';
import  './stylenine.css';

export default function Home() {
  useEffect(() => {
    const blob = document.getElementById("blob");

    window.onpointermove = (event) => {
      const { clientX, clientY } = event;

      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let interval = null;

    const h1 = document.querySelector("h1");
    if (h1) {
      h1.onmouseover = (event) => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
          event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return event.target.dataset.value[index];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
          }

          iteration += 1 / 3;
        }, 30);
      };
    }
  }, []);

  return (
    <div className='bg-black w-screen h-screen overflow-hidden'>
      <Head>
        <title>ApurvApp</title>
      </Head>
      <div id="blob" className={'blob'}></div>
      <div id="blur" className={'blur'}></div>
      <div className="flex justify-center items-center h-screen absolute z-50 text-white w-screen flex-col overflow-hidden ">
        <div className={'ccntt'}>
          <svg viewBox="0 0 960 300">
            <symbol id="s-text">
              <text textAnchor="middle" x="50%" y="80%">Apurv</text>
            </symbol>
            <g className="g-ants">
              <use xlinkHref="#s-text" className={'textCopy'}></use>
              <use xlinkHref="#s-text" className={'textCopy'}></use>
              <use xlinkHref="#s-text" className={'textCopy'}></use>
              <use xlinkHref="#s-text" className={'textCopy'}></use>
              <use xlinkHref="#s-text" className={'textCopy'}></use>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
