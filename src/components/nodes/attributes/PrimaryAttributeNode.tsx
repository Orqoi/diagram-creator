import React from "react";
import { Handle, Position } from "reactflow";
import DynamicInput from "../../DynamicInput";

const PrimaryAttributeNode = () => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        background: "#fff",
        minHeight: 100,
        minWidth: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
      }}
    >
      <Handle
        type="source"
        position={Position.Top}
        style={{ top: 0, opacity: 0 }}
      />
      <DynamicInput underline={true} />
      <Handle
        type="target"
        position={Position.Bottom}
        style={{ top: 0, opacity: 0 }}
      />
    </div>
  );
};

export default PrimaryAttributeNode;
