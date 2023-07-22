import React from "react";
import { BaseEdge, EdgeProps } from "reactflow";

export default function DashedLineEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) {
  const dashedLinePattern = "5,5"; // Customize the pattern for the dashed line here
  const edgePath = `M ${sourceX},${sourceY} L ${targetX},${targetY}`;

  return (
    <BaseEdge
      path={edgePath}
      markerEnd={markerEnd}
      style={{ ...style, strokeDasharray: dashedLinePattern }}
    />
  );
}
