import { Stack } from '@mui/material';
import { useCallback, useMemo } from 'react';
import ReactFlow, {
  Controls,
  useNodesState,
  useEdgesState,
  addEdge
} from 'reactflow';

import NodeDrawer from '../components/NodeDrawer';
import WeakEntityNode from '../components/nodes/entities/WeakEntityNode';
import CustomEdge from '../components/edges/CustomEdge';
import RegularEntityNode from '../components/nodes/entities/RegularEntityNode';
import AggregateEntityNode from '../components/nodes/entities/AggregateEntityNode';
import RegularRelationNode from '../components/nodes/relations/RegularRelationNode';
import WeakRelationNode from '../components/nodes/relations/WeakRelationNode';
import RegularAttributeNode from '../components/nodes/attributes/RegularAttributeNode';
import HierarchyNode from '../components/nodes/hierarchies/HierarchyNode';
import DiagramAppBar from '../components/DiagramAppBar';

function DiagramCreator() {
    const nodeTypes = useMemo(() => ({ 
      weak: WeakEntityNode, 
      regular: RegularEntityNode, 
      aggregate: AggregateEntityNode, 
      regularRelation: RegularRelationNode,
      weakRelation: WeakRelationNode,
      regularAttribute: RegularAttributeNode,
      hierarchy: HierarchyNode }), []);

    const initialNodes = [
        { id: '1', type: 'weak', position: { x: 50, y: 50 }, data: { label: '1' } },
        { id: '2', type: 'regular', position: { x: 450, y: 100 }, data: { label: '2' } },
        { id: '3', type: 'aggregate', position: { x: 200, y: 200 }, data: { label: '3' } },
        { id: '4', type: 'regularRelation', position: { x: 300, y: 400 }, data: { label: '4' } },
        { id: '5', type: 'weakRelation', position: { x: 400, y: 500 }, data: { label: '5' } },
        { id: '6', type: 'regularAttribute', position: { x: 600, y: 500 }, data: { label: '6' } },
        { id: '7', type: 'hierarchy', position: { x: 800, y: 500 }, data: { label: '7' } }
    ];

    const edgeTypes = {
        customedge: CustomEdge,
    };
    const proOptions = { hideAttribution: true };

    const initialEdges = [];
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  return (
    <Stack height="100%" width="100%">
        <DiagramAppBar/>
      
        <Stack direction="row" height="100%" width="100%">
          <NodeDrawer setNodes={setNodes} />

          <ReactFlow
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            proOptions={proOptions}
          >
            <Controls position="bottom-right" />
          </ReactFlow>
          <Stack width={500} border='1px solid black'>Some Content</Stack>

        </Stack>
        
      </Stack>
  )
}

export default DiagramCreator