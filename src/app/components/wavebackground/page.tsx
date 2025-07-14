import React from "react";

const WaveBackground = () => {
  return (
    <div className="relative w-full h-[750px] overflow-hidden rounded-t-4xl">
      {/* Back Quadrilateral */}
      <svg
        viewBox="0 0 1440 400"
        className="absolute top-0 left-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          fill="#c394e5" // Light purple
          d="M0,210 L350,100 L1440,200 L1440,330 L0,320 Z"
        />
      </svg>

      {/* Front Quadrilateral */}
      <svg
        viewBox="0 0 1440 320"
        className="absolute top-0 left-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="myGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8b23c6" />
            <stop offset="100%" stopColor="#6c48ed" />
          </linearGradient>
        </defs>
        <path
          //   fill="#8b23c6" // Dark purple
          fill="url(#myGradient)"
          d="M0,170 L350,100 L1440,160 L1440,320 L0,320 Z"
        />
      </svg>
    </div>
  );
};

export default WaveBackground;