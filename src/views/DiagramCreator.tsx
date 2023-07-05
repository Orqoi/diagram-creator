import { Stack } from '@mui/material';
import { useCallback, useMemo } from 'react';
import ReactFlow, {
  Controls,
  useNodesState,
  useEdgesState,
  addEdge
} from 'reactflow';

import NodeDrawer from '../components/NodeDrawer';
import WeakEntityNode from '../components/nodes/WeakEntityNode';
import CustomEdge from '../components/edges/CustomEdge';
import RegularEntityNode from '../components/nodes/RegularEntityNode';
import AggregateEntityNode from '../components/nodes/AggregateEntityNode';
import RegularRelationNode from '../components/nodes/RegularRelationNode';

function DiagramCreator() {
    const nodeTypes = useMemo(() => ({ weak: WeakEntityNode, regular: RegularEntityNode, aggregate: AggregateEntityNode, regularRelation: RegularRelationNode }), []);

    const initialNodes = [
        { id: '1', type: 'weak', position: { x: 0, y: 0 }, data: { label: '1' } },
        { id: '2', type: 'regular', position: { x: 0, y: 100 }, data: { label: '2' } },
        { id: '3', type: 'aggregate', position: { x: 100, y: 200 }, data: { label: '3' } },
        { id: '4', type: 'regularRelation', position: { x: 200, y: 400 }, data: { label: '4' } },
    ];

    const edgeTypes = {
        customedge: CustomEdge,
    };

    const initialEdges = [{ id: 'e1-2', source: '1', target: '2', type: 'customedge' }];
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  return (
    <Stack height="100%" width="100%" direction="row">
        <NodeDrawer />

        <ReactFlow
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
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