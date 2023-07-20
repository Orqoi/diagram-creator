import React from 'react';

const DashedLineEdgeIcon = ({ width = 70, height = 35 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 70 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="35"
        y1="0"
        x2="35"
        y2="35"
        stroke="#000"
        strokeWidth="2"
        strokeDasharray="3,3" // Set the dash pattern (3 units on, 3 units off)
      />
    </svg>
  );
};

export default DashedLineEdgeIcon;
