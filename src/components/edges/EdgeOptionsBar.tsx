import React from "react";
import { EdgeLabelRenderer, useReactFlow } from "reactflow";
import { IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function EdgeOptionsBar({ selected, sourceX, targetX, sourceY, targetY, id }) {
  const reactFlowInstance = useReactFlow();
  const edges = reactFlowInstance.getEdges();
  const onDelete = () =>
    reactFlowInstance.setEdges(edges.filter((edge) => edge.id !== id));
  return (
    <>
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

export default EdgeOptionsBar;
