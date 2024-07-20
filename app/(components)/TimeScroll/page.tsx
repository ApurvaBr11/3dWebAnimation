'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import dayjs from 'dayjs';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import 'dayjs/locale/en'; // Import the locale if necessary

gsap.registerPlugin(ScrollToPlugin);

const TimeScroll = () => {
  const [interactivity, setInteractivity] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const totalMinutesInDay = 1440;
    const totalPageHeight = 2880; // Double the height in pixels

    const mapMinutesToPixels = (minutes: number) => {
      return (minutes / totalMinutesInDay) * totalPageHeight;
    };

    const updateScrollPosition = () => {
      const now = dayjs();
      const currentMinutes = now.hour() * 60 + now.minute();
      const currentPixel = mapMinutesToPixels(currentMinutes);

      console.log(`Current Time: ${now.format('HH:mm:ss')}`); // Include seconds in the log
      console.log(`Current Y Position: ${currentPixel - 100}`);

      gsap.to(window, { duration: 1, scrollTo: currentPixel - 100 });
    };

    updateScrollPosition();
    const interval = setInterval(updateScrollPosition, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    setInteractivity(true);

    // Clear the previous timeout if it exists
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout to reset interactivity to false after 10 seconds
    timeoutRef.current = setTimeout(() => {
      setInteractivity(false);
    }, 10000); // 10 seconds
  };

  useEffect(() => {
    if (!interactivity) {
      const totalMinutesInDay = 1440;
      const totalPageHeight = 2880; // Double the height in pixels

      const mapMinutesToPixels = (minutes: number) => {
        return (minutes / totalMinutesInDay) * totalPageHeight;
      };

      const now = dayjs();
      const currentMinutes = now.hour() * 60 + now.minute();
      const currentPixel = mapMinutesToPixels(currentMinutes);

      console.log(`Restoring to Y Position: ${currentPixel - 100}`); // Added console log for restoration
      gsap.to(window, { duration: 1, scrollTo: currentPixel - 100 });
    }
  }, [interactivity]);

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clear the timeout if the component is unmounted
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      onClick={(e) => console.log(e)}
      ref={scrollContainerRef}
      className="h-[2880px] bg-gradient-to-b from-blue-500 to-green-500" // Updated height for double length
    >
      <div className="h-full flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white">Scroll Animation Based on Time</h1>
      </div>
    </div>
  );
};

export default TimeScroll;
