import React from 'react';
import { Handle, Position } from 'reactflow';

const WeakEntityNode = () => {
  return (
    <div
      style={{
        border: '3px double black',
        padding: '10px',
        background: '#fff',
        minWidth: '150px'
      }}
    >
      <Handle type="source" position={Position.Top} style={{ top: 0, opacity: 0 }} />
      <div style={{ textAlign: 'center' }}>
        <strong>Custom Node</strong>
      </div>
      <Handle type="target" position={Position.Bottom} style={{ top: 0, opacity: 0 }} />
    </div>
  );
};

export default WeakEntityNode;