import React, { useCallback } from "react";
import { BaseEdge, EdgeProps, useStore } from "reactflow";
import { getEdgeParams } from "./utils";
import EdgeOptionsBar from "./EdgeOptionsBar";

export default function RegularEdge(props: EdgeProps) {
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
  // Use the getEdgeParams function to calculate the edge parameters
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

  const edgePath = `M ${sx},${sy} L ${tx},${ty}`;

  // Override the default styles for BaseEdge to set the stroke color to black
  const solidBlackStyle = { ...style, stroke: "black" };

  return (
    <>
      <BaseEdge path={edgePath} style={solidBlackStyle} />
      <EdgeOptionsBar {...edgeOptionProps} />
    </>
  );
}
