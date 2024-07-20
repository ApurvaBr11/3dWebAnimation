'use client'

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const videos = [
  { src: '/videos/one.mp4', id: 1 },
  { src: '/videos/two.mp4', id: 2 },
  { src: '/videos/three.mp4', id: 3 },
];

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showLastVideo, setShowLastVideo] = useState(false);
  const videoRefs = useRef([]);
  const indicatorRefs = useRef([]);
  const containerRef = useRef(null);

  const handleVideoEnd = () => {
    if (currentIndex === videos.length - 1) {
      setShowLastVideo(true);
      setIsPlaying(false); // Pause playback when reaching the last video
    } else {
      gsap.to(videoRefs.current[currentIndex], {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          setCurrentIndex((prevIndex) => prevIndex + 1);
          setIsPlaying(true);
        },
      });
    }
  };

  const updateIndicatorProgress = () => {
    const video = videoRefs.current[currentIndex];
    if (video && indicatorRefs.current[currentIndex]) {
      const duration = video.duration;
      const currentTime = video.currentTime;
      const progress = (currentTime / duration) * 100;
      indicatorRefs.current[currentIndex].style.width = `${progress}%`;
    }
  };

  const handlePlayPause = () => {
    const video = videoRefs.current[currentIndex];
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setShowLastVideo(false);
    setIsPlaying(true);
  };

  useEffect(() => {
    const video = videoRefs.current[currentIndex];
    if (video) {
      video.load();
      video.play();
      setIsPlaying(true);

      gsap.fromTo(
        video,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1 }
      );

      video.onended = handleVideoEnd;
      const interval = setInterval(updateIndicatorProgress, 100);

      return () => {
        clearInterval(interval);
        video.onended = null;
      };
    }
  }, [currentIndex]);

  return (
    <div className="carousel-wrapper">
      <div ref={containerRef} className="carousel-container">
        {videos.map((video, index) => (
          <video
            key={video.id}
            src={video.src}
            ref={(el) => (videoRefs.current[index] = el)}
            style={{
              display: currentIndex === index || (showLastVideo && index === videos.length - 1) ? 'block' : 'none',
              width: '100%',
            }}
            controls={index !== videos.length - 1 || showLastVideo} // Show controls only for last video if it's the last scene
          />
        ))}
      </div>
      <div className="indicators">
        {videos.map((_, index) => (
          <div
            key={index}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          >
            <div
              ref={(el) => (indicatorRefs.current[index] = el)}
              className="indicator-progress"
            ></div>
          </div>
        ))}
      </div>
      {showLastVideo ? (
        <button onClick={handleRestart}>Restart</button>
      ) : (
        <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      )}
    </div>
  );
};

export default VideoCarousel;
