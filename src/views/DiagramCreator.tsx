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
import CompositeAttributeNode from '../components/nodes/attributes/CompositeAttributeNode';
import MultiValuedAttributeNode from '../components/nodes/attributes/MultiValuedAttributeNode';
import PrimaryAttributeNode from '../components/nodes/attributes/PrimaryAttributeNode';
import DerivedAttributeNode from '../components/nodes/attributes/DerivedAttributeNode';

function DiagramCreator() {
    const nodeTypes = useMemo(() => ({ 
      weak: WeakEntityNode, 
      regular: RegularEntityNode, 
      aggregate: AggregateEntityNode, 
      regularRelation: RegularRelationNode,
      weakRelation: WeakRelationNode,
      regularAttribute: RegularAttributeNode,
      hierarchy: HierarchyNode,
      compositeAttribute: CompositeAttributeNode,
      multiValuedAttribute: MultiValuedAttributeNode,
      primaryAttribute: PrimaryAttributeNode,
      derivedAttribute: DerivedAttributeNode }), []);

    const initialNodes = [

    ];

    const edgeTypes = useMemo(() => ({
        customedge: CustomEdge,
    }), []);
    const proOptions = { hideAttribution: true };

    const initialEdges = [];
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  return (
    <Stack height="100%" width="100%">
        <DiagramAppBar/>
      
        <Stack direction="row" height="100%" width="100%">
          <NodeDrawer nodes={nodes} setNodes={setNodes} />

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
          <Stack width={500} border='1px solid lightgray'>Some Content</Stack>

        </Stack>
        
      </Stack>
  )
}

export default DiagramCreator