import React from 'react';

const BgScreenshot = () => {
  return (
    <div className="relative w-full h-[750px] overflow-hidden rounded-t-2xl">
      {/* Back Quadrilateral */}
      <svg
        viewBox="0 0 1440 400"
        className="absolute top-0 left-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          fill="#fcfcfd" // Light purple
          d="M0,210 L350,100 L1440,200 L1440,320 L0,320 Z"
        />
      </svg>

      {/* Front Quadrilateral */}
      <svg
        viewBox="0 0 1440 320"
        className="absolute top-0 left-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          fill="#f8f9fb" // Dark purple
          d="M0,170 L350,100 L1440,160 L1440,320 L0,320 Z"
        />
      </svg>
    </div>
  );
};

export default BgScreenshot; 