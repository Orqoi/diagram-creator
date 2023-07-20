import React from 'react';
import { BaseEdge, EdgeProps } from 'reactflow';

export default function KeyEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerEnd,
  style = {},
}: EdgeProps) {
  const edgePath = `M ${sourceX},${sourceY} L ${targetX},${targetY}`;

  return (
    <>
      <BaseEdge path={edgePath} style={style} />
      <marker
        id={`arrowhead-${id}`} // Use a unique ID for the marker
        viewBox="0 0 10 10" // Adjust the viewBox as needed for the arrowhead size
        refX="8" // Set the X coordinate for the arrowhead's tip
        refY="5" // Set the Y coordinate for the arrowhead's center
        markerWidth="8" // Set the marker's width (affects the size)
        markerHeight="8" // Set the marker's height (affects the size)
        orient="auto"
      >
        <path d="M 0,0 L 10,5 L 0,10 Z" fill={style.stroke} /> // Arrowhead path
      </marker>
      <BaseEdge path={edgePath} markerEnd={`url(#arrowhead-${id})`} style={style} />
    </>
  );
}
