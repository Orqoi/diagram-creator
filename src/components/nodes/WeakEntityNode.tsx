import React from 'react';
import { Handle, Position } from 'reactflow';

const WeakEntityNode = () => {
  return (
    <div
      style={{
        border: '3px double black',
        padding: '10px',
        background: '#fff',
        minHeight: 100,
        minWidth: 200,
      }}
    >
      <Handle type="source" position={Position.Top} style={{ top: '50%', left: '50%', opacity: 0 }} />
      <div style={{ textAlign: 'center' }}>
        <input type='text' style={{outline: 'none', border:'none', textAlign: 'center'}}/>
      </div>
      <Handle type="target" position={Position.Bottom} style={{ top: '50%', left: '50%', opacity: 0 }} />
    </div>
  );
};

export default WeakEntityNode;