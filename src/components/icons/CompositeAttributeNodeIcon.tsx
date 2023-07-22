import React from "react";

const height = 35;
const width = 70;
const leftOvalSize = { rx: 20, ry: 12 };
const rightOvalSize = { rx: 10, ry: 6 };

const CompositeAttributeNodeIcon = () => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 75 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left Oval */}
      <ellipse
        cx={leftOvalSize.rx}
        cy={height / 2}
        {...leftOvalSize}
        fill="none"
        stroke="black"
        strokeWidth="1"
      />

      {/* Right Oval */}
      <ellipse
        cx={width - rightOvalSize.rx}
        cy={height / 2}
        {...rightOvalSize}
        fill="none"
        stroke="black"
        strokeWidth="1"
      />

      {/* Connecting Line */}
      <line
        x1={leftOvalSize.rx + leftOvalSize.rx}
        y1={height / 2}
        x2={width - rightOvalSize.rx - rightOvalSize.rx}
        y2={height / 2}
        stroke="black"
        strokeWidth="1"
      />
    </svg>
  );
};

export default CompositeAttributeNodeIcon;
