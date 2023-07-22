import React from "react";

const TotalParticipationEdgeIcon = ({ width = 70, height = 35 }) => {
  const arrowheadPath = "M 0,1 L 7,5 L 0,9 Z"; // Narrower arrowhead base

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 70 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0" y1="15" x2="60" y2="15" stroke="#000" strokeWidth="2" />
      <line x1="0" y1="20" x2="60" y2="20" stroke="#000" strokeWidth="2" />
      <marker
        id="arrowhead-total"
        viewBox="0 0 6 10" // Adjust the viewBox to accommodate the narrower arrowhead base
        refX="7"
        refY="5" // Adjust the refY to keep the arrowhead centered on the lines
        markerWidth="6" // Adjust the markerWidth to match the narrower arrowhead base
        markerHeight="10" // Adjust the markerHeight to match the slightly wider arrowhead
        orient="auto"
      >
        <path d={arrowheadPath} fill="#000" />
      </marker>
      <line
        x1="60"
        y1="17.5"
        x2="70"
        y2="17.5"
        stroke="#000"
        strokeWidth="2"
        markerEnd="url(#arrowhead-total)"
      />
    </svg>
  );
};

export default TotalParticipationEdgeIcon;
