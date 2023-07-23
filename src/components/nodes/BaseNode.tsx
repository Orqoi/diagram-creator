import React, { useState, useEffect, useRef } from "react";
import { Handle, Position, useReactFlow, useStore } from "reactflow";
import DynamicInput from "../DynamicInput";
import NodeOptionsBar from "../NodeOptionsBar";

const connectionNodeIdSelector = (state) => state.connectionNodeId;
const sourceStyle = { zIndex: 1 };

const BaseNode = ({
  id,
  selected,
  borderStyle,
  handleClass,
  underline = false,
}) => {
  const connectionNodeId = useStore(connectionNodeIdSelector);

  const isConnecting = !!connectionNodeId;
  const reactFlowInstance = useReactFlow();
  const nodes = reactFlowInstance.getNodes();
  const edges = reactFlowInstance.getEdges();
  const onDelete = () => {
    reactFlowInstance.setNodes(nodes.filter((node) => node.id !== id));
    reactFlowInstance.setEdges(
      edges.filter((edge) => edge.source !== id && edge.target !== id)
    );
  };

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
    <div style={borderStyle}>
      <Handle className={handleClass} position={Position.Left} type="target" />
      <DynamicInput inputRef={ref} disabled={disabled} underline={underline} />
      {!isConnecting && (
        <Handle
          className={handleClass}
          position={Position.Right}
          type="source"
          style={sourceStyle}
        />
      )}
      {/* Conditionally render the button and position it on the right */}
      {selected && (
        <NodeOptionsBar onDelete={onDelete} setDisabled={setDisabled} />
      )}
    </div>
  );
};

export default BaseNode;
