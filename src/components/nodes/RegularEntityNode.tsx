import React from 'react';
import { Handle, Position } from 'reactflow';

const RegularEntityNode = () => {
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '10px',
        background: '#fff',
        minWidth: '150px'
      }}
    >
      <Handle type="source" position={Position.Top} style={{ top: 0, opacity: 0 }} />
      <div style={{ textAlign: 'center' }}>
        <input type='text' style={{outline: 'none', border:'none', textAlign: 'center'}}/>
      </div>
      <Handle type="target" position={Position.Bottom} style={{ top: 0, opacity: 0 }} />
    </div>
  );
};

export default RegularEntityNode;