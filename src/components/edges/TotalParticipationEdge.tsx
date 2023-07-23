import React, { useCallback } from "react";
import { BaseEdge, EdgeProps, useStore } from "reactflow";
import { getEdgeParams } from "./utils";
import EdgeOptionsBar from "./EdgeOptionsBar";

export default function TotalParticipationEdge(props: EdgeProps) {
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
  const doubleLineWidth = 1; // Set the width of the double line

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
  const { sx, sy, tx, ty, sourcePos, targetPos } = edgeParams;

  // Calculate the angle between source and target points
  const dx = tx - sx;
  const dy = ty - sy;
  const angle = Math.atan2(dy, dx);

  // Calculate the perpendicular offset for the double lines
  const offsetX = doubleLineWidth * Math.cos(angle + Math.PI / 2);
  const offsetY = doubleLineWidth * Math.sin(angle + Math.PI / 2);

  // Calculate the coordinates for the two lines and arrowhead
  const line1X1 = sx + offsetX;
  const line1Y1 = sy + offsetY;
  const line1X2 = tx + offsetX;
  const line1Y2 = ty + offsetY;

  const line2X1 = sx - offsetX;
  const line2Y1 = sy - offsetY;
  const line2X2 = tx - offsetX;
  const line2Y2 = ty - offsetY;

  const edgePath = `M ${line1X1},${line1Y1} L ${line1X2},${line1Y2} M ${line2X1},${line2Y1} L ${line2X2},${line2Y2}`;

  // Define the custom SVG path for the arrowhead marker
  const arrowheadPath = `M 0,0 L 8,4 L 0,8 L 2,4 Z`; // Example arrowhead path, adjust as needed

  // Override the default styles for BaseEdge to set the stroke color to black
  const solidBlackStyle = { ...style, stroke: "black" };

  return (
    <>
      <BaseEdge path={edgePath} style={solidBlackStyle} />
      <marker
        id={`arrowhead-${id}`} // Use a unique ID for the marker
        viewBox="0 0 8 8" // Adjust the viewBox as needed for the arrowhead size
        refX="5" // Set the X coordinate for the arrowhead's tip
        refY={3} // Set the Y coordinate for the arrowhead's center
        markerWidth="8" // Set the marker's width (affects the size)
        markerHeight="8" // Set the marker's height (affects the size)
        orient="auto"
      >
        <path d={arrowheadPath} fill="black" />{" "}
        {/* Set the arrowhead fill color to black */}
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
