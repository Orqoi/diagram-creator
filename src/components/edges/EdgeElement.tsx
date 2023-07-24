import React, { useCallback } from "react";
import EdgeOptionsBar from "./EdgeOptionsBar";
import { BaseEdge, useStore } from "reactflow";
import { getEdgeParams } from "../../utils/EdgeUtils";

function EdgeElement({
  id,
  source,
  sourceX,
  sourceY,
  targetX,
  targetY,
  target,
  edgeStyle,
  markerId = "",
  markerProps = {},
  markerPath = "",
  selected,
  calculateEdgePath,
}) {
  const edgeOptionProps = { sourceX, sourceY, targetX, targetY, selected, id };

  const hasMarker =
    markerId !== "" &&
    Object.keys(markerProps).length !== 0 &&
    markerPath !== "";

  // Calculate edge path

  const sourceNode = useStore(
    useCallback((store) => store.nodeInternals.get(source), [source])
  );
  const targetNode = useStore(
    useCallback((store) => store.nodeInternals.get(target), [target])
  );

  if (!sourceNode || !targetNode) {
    return null;
  }
  const edgeParams = getEdgeParams(sourceNode, targetNode);

  const { sx, sy, tx, ty } = edgeParams;

  const edgePath = calculateEdgePath(sx, sy, tx, ty);

  return (
    <>
      {hasMarker ? (
        <marker {...markerProps}>
          <path d={markerPath} />
        </marker>
      ) : (
        <></>
      )}
      <BaseEdge
        path={edgePath}
        markerEnd={`url(#${markerId})`}
        style={edgeStyle}
      />
      <EdgeOptionsBar {...edgeOptionProps} />
    </>
  );
}

export default EdgeElement;
