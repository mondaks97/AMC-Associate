

import React, { useRef, useEffect } from "react";

const Banner = () => {
  const videoRef = useRef(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (video) {
          if (entry.isIntersecting) {
            video.play().catch(() => {}); // in case autoplay is blocked
          } else {
            video.pause();
          }
        }
      },
      {
        threshold: 0.6, // play when 60% of the banner is visible
      }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={bannerRef}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gray-100"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        loop
      >
        <source src="/videos/ed.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Optional Content */}
      <div className="relative z-10 text-white text-center px-6">
        <h1 className="text-4xl text-white-500 md:text-5xl font-bold">
          Start your success
          <br />
          journey with us today.
        </h1>
      </div>
    </div>
  );
};

export default Banner;