import React from 'react';
import { Handle, Position } from 'reactflow';

const AggregateEntityNode = () => {
  const inputStyles: any = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) rotate(-45deg)',
    width: '80%',
    padding: '10px',
    border: 'none',
    backgroundColor: 'transparent',
    color: '#000',
    textAlign: 'center'
  }
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '10px',
        background: '#fff',
        width: '150px',
        height: '150px',
        transform: 'rotate(45deg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Handle type="source" position={Position.Top} style={{ top: '50%', left: '50%', opacity: 0 }} />
      <div style={inputStyles}>
        <input type='text' style={{outline: 'none', border:'none', textAlign: 'center'}}/>
      </div>
      <Handle type="target" position={Position.Bottom} style={{ top: '50%', left: '50%', opacity: 0 }} />
    </div>
  );
};

export default AggregateEntityNode;