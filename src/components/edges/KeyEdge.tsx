import React, { useCallback } from "react";
import { BaseEdge, EdgeProps, useStore, getStraightPath } from "reactflow";
import { getEdgeParams } from "./utils";
import EdgeOptionsBar from "./EdgeOptionsBar";

export default function KeyEdge(props: EdgeProps) {
  // Use the getEdgeParams function to calculate the edge parameters
  const {
    id,
    source,
    sourceX,
    sourceY,
    targetX,
    targetY,
    target,
    style = {},
    selected,
  } = props;

  const edgeOptionProps = { sourceX, sourceY, targetX, targetY, selected, id };

  const sourceNode = useStore(
    useCallback((store) => store.nodeInternals.get(source), [source])
  );
  const targetNode = useStore(
    useCallback((store) => store.nodeInternals.get(target), [target])
  );

  if (!sourceNode || !targetNode) {
    return null;
  }
  const { sx, sy, tx, ty } = getEdgeParams(sourceNode, targetNode);

  // Use the calculated sx, sy, tx, and ty to create the edge path
  const [edgePath] = getStraightPath({
    sourceX: sx,
    sourceY: sy,
    targetX: tx,
    targetY: ty,
  });

  // Override the default styles for BaseEdge to set the stroke color to black
  const solidBlackStyle = { ...style, stroke: "black" };

  return (
    <>
      <BaseEdge path={edgePath} style={solidBlackStyle} />
      <marker
        id={`arrowhead-${id}`} // Use a unique ID for the marker
        viewBox="0 0 10 10" // Adjust the viewBox as needed for the arrowhead size
        refX="8" // Set the X coordinate for the arrowhead's tip
        refY="5" // Set the Y coordinate for the arrowhead's center
        markerWidth="8" // Set the marker's width (affects the size)
        markerHeight="8" // Set the marker's height (affects the size)
        orient="auto"
      >
        <path d="M 0,0 L 10,5 L 0,10 Z" fill={style.stroke} />{" "}
        {/* Arrowhead path */}
      </marker>
      <BaseEdge
        path={edgePath}
        markerEnd={`url(#arrowhead-${id})`}
        style={solidBlackStyle}
      />
      <EdgeOptionsBar {...edgeOptionProps} />
    </>
  );
}
