import React from "react";
import { EdgeLabelRenderer, useReactFlow } from "reactflow";
import { IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function EdgeOptionsBar({ selected, sourceX, targetX, sourceY, targetY, id }) {
  const reactFlowInstance = useReactFlow();
  const edges = reactFlowInstance.getEdges();
  const onDelete = () =>
    reactFlowInstance.setEdges(edges.filter((edge) => edge.id !== id));

  // Calculate the midpoint of the line
  const midpointX = (sourceX + targetX) / 2;
  const midpointY = (sourceY + targetY) / 2;

  // Calculate the angle of the line in degrees
  const angleDeg =
    (Math.atan2(targetY - sourceY, targetX - sourceX) * 180) / Math.PI;

  return (
    <>
      {selected && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: "absolute",
              top: midpointY,
              left: midpointX,
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

export default EdgeOptionsBar;
