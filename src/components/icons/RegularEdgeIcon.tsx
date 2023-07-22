import React from "react";

const RegularEdgeIcon = ({ width = 70, height = 35 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 70 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0" y1="5" x2="70" y2="5" stroke="#000" strokeWidth="2" />
    </svg>
  );
};

export default RegularEdgeIcon;
