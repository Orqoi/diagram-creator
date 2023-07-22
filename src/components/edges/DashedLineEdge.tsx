import React from "react";
import {
  BaseEdge,
  EdgeProps,
  EdgeLabelRenderer,
  useReactFlow,
} from "reactflow";
import { IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

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
  selected,
}: EdgeProps) {
  const dashedLinePattern = "5,5"; // Customize the pattern for the dashed line here
  const edgePath = `M ${sourceX},${sourceY} L ${targetX},${targetY}`;
  const reactFlowInstance = useReactFlow();
  const edges = reactFlowInstance.getEdges();
  const onDelete = () =>
    reactFlowInstance.setEdges(edges.filter((edge) => edge.id !== id));

  return (
    <>
      <BaseEdge
        path={edgePath}
        markerEnd={markerEnd}
        style={{ ...style, strokeDasharray: dashedLinePattern }}
      />
      {selected && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: "absolute",
              transform: `translate(50%, -50%) translate(${
                (sourceX + targetX) / 2
              }px,${(sourceY + targetY) / 2}px)`,
              pointerEvents: "all",
            }}
            className="nodrag nopan"
          >
            <IconButton onClick={onDelete}>
              <HighlightOffIcon color="warning" />
            </IconButton>
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
}
