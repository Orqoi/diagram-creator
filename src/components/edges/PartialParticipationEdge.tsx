import React from 'react';
import { BaseEdge, EdgeProps, MarkerType } from 'reactflow';

export default function PartialParticipationEdge({
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
  const line1Y2 = targetY + offsetY;

  const line2X1 = sourceX - offsetX;
  const line2Y1 = sourceY - offsetY;
  const line2X2 = targetX - offsetX;
  const line2Y2 = targetY - offsetY;

  const edgePath = `M ${line1X1},${line1Y1} L ${line1X2},${line1Y2} M ${line2X1},${line2Y1} L ${line2X2},${line2Y2}`;

  return (
    <>
      <BaseEdge path={edgePath} style={style} />
      <BaseEdge path={edgePath} style={style} />
    </>
  );
}
