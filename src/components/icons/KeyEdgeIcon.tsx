import React from "react";

const KeyEdgeIcon = ({ width = 70, height = 35 }) => {
  const arrowheadPath = "M 0,0 L 10,5 L 0,10 Z"; // Thin arrowhead path

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 70 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0" y1="17.5" x2="50" y2="17.5" stroke="#000" strokeWidth="2" />
      <marker
        id="arrowhead-icon"
        viewBox="0 0 10 10"
        refX="10"
        refY="5"
        markerWidth="5"
        markerHeight="5"
        orient="auto"
      >
        <path d={arrowheadPath} fill="#000" />
      </marker>
      <line
        x1="50"
        y1="17.5"
        x2="70"
        y2="17.5"
        stroke="#000"
        strokeWidth="2"
        markerEnd="url(#arrowhead-icon)"
      />
    </svg>
  );
};

export default KeyEdgeIcon;
