import React, { useState, useEffect, useRef } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import DynamicInput from "../../DynamicInput";
import { IconButton, Stack } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import EditIcon from "@mui/icons-material/Edit";

const CompositeAttributeNode = ({ id, selected }) => {
  const reactFlowInstance = useReactFlow();
  const nodes = reactFlowInstance.getNodes();
  const onDelete = () =>
    reactFlowInstance.setNodes(nodes.filter((node) => node.id !== id));
  const [disabled, setDisabled] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!disabled && ref.current) {
      ref.current.focus();
    }
  }, [disabled]);

  useEffect(() => {
    setDisabled(true);
  }, [selected]);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        background: "#fff",
        minHeight: 100,
        minWidth: 200,
        display: "flex",
        flexDirection: "column", // Set the flex direction to column
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        position: "relative", // Add position relative to contain the button
      }}
    >
      <Handle
        type="source"
        position={Position.Top}
        style={{ top: 0, opacity: 0 }}
      />
      <DynamicInput inputRef={ref} disabled={disabled} />
      <Handle
        type="target"
        position={Position.Bottom}
        style={{ top: 0, opacity: 0 }}
      />
      {/* Conditionally render the button and position it on the right */}
      {selected && (
        <Stack
          direction="column"
          style={{
            position: "absolute",
            top: "50%",
            right: "-40px",
            transform: "translateY(-50%)",
          }}
        >
          <IconButton onClick={onDelete}>
            <HighlightOffIcon color="warning" />
          </IconButton>
          <IconButton
            onClick={() => {
              setDisabled(false);
            }}
          >
            <EditIcon />
          </IconButton>
        </Stack>
      )}
    </div>
  );
};

export default CompositeAttributeNode;
