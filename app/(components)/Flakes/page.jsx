'use client'
import React, { useEffect } from "react";

const generateRandomStyle = () => {
  const size = Math.random() * 30 + 10; // Size between 10px and 40px
  const top = Math.random() * 100; // Position between 0% and 100%
  const left = Math.random() * 100; // Position between 0% and 100%
  const opacity = Math.random() * 0.5 + 0.5; // Opacity between 0.5 and 1
  const grayscale = Math.random() * 100; // Grayscale between 0% and 100%
  const zIndex = Math.floor(Math.random() * 10); // Z-index between 0 and 10

  return {
    width: `${size}px`,
    height: `${size}px`,
    top: `${top}vh`, // Use vh for viewport height
    left: `${left}vw`, // Use vw for viewport width
    opacity: opacity,
    filter: `grayscale(${grayscale}%)`,
    zIndex: zIndex,
  };
};

const FlakesPage = () => {
  useEffect(() => {
    const flakesContainer = document.getElementById("flakesContainer");
    for (let i = 0; i < 60; i++) {
      const flake = document.createElement("div");
      flake.className = `magicpattern${(i % 10) + 1}`;
      Object.assign(flake.style, generateRandomStyle());
      flakesContainer.appendChild(flake);
    }
  }, []);

  return <div id="flakesContainer" className="h-screen bg-neutral-950 w-screen fixed top-0 left-0"></div>;
};

export default FlakesPage;
