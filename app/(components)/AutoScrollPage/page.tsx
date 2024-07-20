'use client'
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

const AutoScrollPage = () => {
  const containerRef = useRef(null);
  const [scrollAnimation, setScrollAnimation] = useState<gsap.core.Tween | null>(null);

  useEffect(() => {
    // Calculate the duration in seconds (1 minute = 60 seconds)
    const duration = 60;

    // Create the GSAP animation
    const animation = gsap.to(window, {
      scrollTo: { y: 4000, autoKill: false },
      duration: duration,
      ease: "linear",
      paused: true, // Start paused
    });

    setScrollAnimation(animation);

    // Start the animation
    animation.play();

    // Add event listeners for manual scroll
    const handleScroll = () => {
      animation.pause();
    };

    const handleScrollEnd = () => {
      animation.resume();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mouseup', handleScrollEnd);
    window.addEventListener('touchend', handleScrollEnd);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mouseup', handleScrollEnd);
      window.removeEventListener('touchend', handleScrollEnd);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full" style={{ height: '4000px' }}>
      <div className="h-screen bg-blue-500">Start</div>
      <div className="h-screen bg-green-500">Middle</div>
      <div className="h-screen bg-red-500">End</div>
    </div>
  );
};

export default AutoScrollPage;
