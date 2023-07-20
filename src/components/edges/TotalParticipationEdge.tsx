import React from 'react';
import { BaseEdge, EdgeProps } from 'reactflow';

export default function TotalParticipationEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
}: EdgeProps) {
  const doubleLineWidth = 1; // Set the width of the double line

  // Calculate the angle between source and target points
  const dx = targetX - sourceX;
  const dy = targetY - sourceY;
  const angle = Math.atan2(dy, dx);

  // Calculate the perpendicular offset for the double lines
  const offsetX = doubleLineWidth * Math.cos(angle + Math.PI / 2);
  const offsetY = doubleLineWidth * Math.sin(angle + Math.PI / 2);

  // Calculate the coordinates for the two lines
  const line1X1 = sourceX + offsetX;
  const line1Y1 = sourceY + offsetY;
  const line1X2 = targetX + offsetX;
  const line1Y2 = targetY + offsetY - 3;

  const line2X1 = sourceX - offsetX;
  const line2Y1 = sourceY - offsetY;
  const line2X2 = targetX - offsetX;
  const line2Y2 = targetY - offsetY - 3;

  const edgePath = `M ${line1X1},${line1Y1} L ${line1X2},${line1Y2} M ${line2X1},${line2Y1} L ${line2X2},${line2Y2}`;

  // Define the custom SVG path for the arrowhead marker
  const arrowheadPath = `M 0,0 L 8,4 L 0,8 L 2,4 Z`; // Example arrowhead path, adjust as needed

  return (
    <>
      <BaseEdge path={edgePath} style={style} />
      <marker
        id={`arrowhead-${id}`} // Use a unique ID for the marker
        viewBox="0 0 8 8" // Adjust the viewBox as needed for the arrowhead size
        refX="5" // Set the X coordinate for the arrowhead's tip
        refY="3" // Set the Y coordinate for the arrowhead's center
        markerWidth="8" // Set the marker's width (affects the size)
        markerHeight="8" // Set the marker's height (affects the size)
        orient="auto"
      >
        <path d={arrowheadPath} fill={"#b1b1gb"} /> // Use the same stroke color as the edge
      </marker>
      <BaseEdge path={edgePath} markerEnd={`url(#arrowhead-${id})`} style={style} />
    </>
  );
}
