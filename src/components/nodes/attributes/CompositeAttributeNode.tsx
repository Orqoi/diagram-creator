import React from 'react';
import { Handle, Position } from 'reactflow';
import DynamicInput from '../../DynamicInput';

const CompositeAttributeNode = () => {
  return (
    <div
      style={{
        border: '3px double black',
        padding: '10px',
        background: '#fff',
        minHeight: 100,
        minWidth: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Handle type="source" position={Position.Top} style={{ top: 0, opacity: 0 }} />
      <DynamicInput />
      <Handle type="target" position={Position.Bottom} style={{ top: 0, opacity: 0 }} />
    </div>
  );
};

export default CompositeAttributeNode;