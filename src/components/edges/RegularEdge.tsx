import React from 'react';
import { BaseEdge, EdgeProps } from 'reactflow';

export default function RegularEdge({
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
  const edgePath = `M ${sourceX},${sourceY} L ${targetX},${targetY}`;

  return (
    <BaseEdge path={edgePath} markerEnd={markerEnd} style={style}/>
  );
}
