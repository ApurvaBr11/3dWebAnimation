'use client'
import { useEffect } from 'react';
import Head from 'next/head';
import './stylesix.css';

export default function Home() {
  useEffect(() => {
    const blob = document.getElementById('blob');

    window.onpointermove = (event) => {
      const { clientX, clientY } = event;

      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: 'forwards' }
      );
    };

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let interval = null;

    document.querySelector('h1').onmouseover = (event) => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join('');

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };
  }, []);

  return (
    <div className='bg-black w-screen h-screen overflow-hidden'>
      <Head>
        <title>ApurvApp</title>
      </Head>
      <div id="blob"></div>
      <div id="blur"></div>
      <div className="flex justify-center items-center h-screen absolute z-50 text-white w-screen flex-col  overflow-hidden">
        <h1 data-value="APURV KASHYAP" className="text-8xl font-bold w-[80%]">
          APURV KASHYAP
        </h1>
      </div>
    </div>
  );
}
