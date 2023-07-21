import React, { useCallback } from 'react';
import { BaseEdge, EdgeProps, useStore } from 'reactflow';
import { getEdgeParams } from './utils';

export default function RegularEdge({
  id,
  source,
  target,
  markerEnd,
  style = {},
}: EdgeProps) {
  // Use the getEdgeParams function to calculate the edge parameters
  const sourceNode = useStore(useCallback((store) => store.nodeInternals.get(source), [source]));
  const targetNode = useStore(useCallback((store) => store.nodeInternals.get(target), [target]));

  if (!sourceNode || !targetNode) {
    return null;
  }

  const edgeParams = getEdgeParams(sourceNode, targetNode);
  const { sx, sy, tx, ty } = edgeParams;

  const edgePath = `M ${sx},${sy} L ${tx},${ty}`;

  return (
    <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
  );
}
