import { Stack } from '@mui/material';
import { useCallback } from 'react';
import ReactFlow, {
  Controls,
  useNodesState,
  useEdgesState,
  addEdge
} from 'reactflow';

import NodeDrawer from '../components/NodeDrawer';

const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

function DiagramCreator() {
const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  return (
    <Stack height="100%" width="100%" direction="row">
        <NodeDrawer />

        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}

        >
          <Controls position="bottom-right" />
        </ReactFlow>
      </Stack>
  )
}

export default DiagramCreator