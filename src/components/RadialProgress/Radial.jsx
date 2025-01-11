import React from 'react';
import "./Radial.css";

export const RadialProgress = ({ percentage }) => {
  const radius = 45; // Radius of the circle
  const strokeWidth = 10; // Stroke width of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const normalizedPercentage = Math.min(Math.max(percentage, 0), 100); // Clamp percentage between 0 and 100
  const strokeDashoffset =
    circumference - (normalizedPercentage / 100) * circumference;

  return (
    <div className="relative w-32 h-32">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={`Progress: ${normalizedPercentage}%`}
      >
        {/* Background Circle */}
        <circle
          className="text-gray-300 stroke-current"
          strokeWidth={strokeWidth}
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
        />
        {/* Progress Circle */}
        <circle
          className="text-blue-600 stroke-current"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 50 50)"
        />
        {/* Percentage Text */}
        <text
          x="50"
          y="50"
          fontFamily="Verdana"
          fontSize="12"
          textAnchor="middle"
          alignmentBaseline="middle"
          fill="#0f4147"
        >
          {Math.round(normalizedPercentage)}%
        </text>
      </svg>
    </div>
  );
};
