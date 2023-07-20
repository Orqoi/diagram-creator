import { Stack, Button } from '@mui/material';
import { useCallback, useMemo } from 'react';
import ReactFlow, {
  Controls,
  useReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  useStoreApi,
} from 'reactflow';

import NodeDrawer from '../components/NodeDrawer';
import WeakEntityNode from '../components/nodes/entities/WeakEntityNode';
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
import SettingsDrawer from '../components/SettingsDrawer';
import DashedLineEdge from '../components/edges/DashedLineEdge';
import TotalParticipationEdge from '../components/edges/TotalParticipationEdge';
import KeyEdge from '../components/edges/KeyEdge';
import PartialParticipationEdge from '../components/edges/PartialParticipationEdge';
import RegularEdge from '../components/edges/RegularEdge';

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

    const reactFlowInstance = useReactFlow()
    const store = useStoreApi().getState()
   
    const getCenter = () => {
      // const {height, width} = store
      const {x, y} = reactFlowInstance.getViewport()
      // console.log({x, y})
      // console.log(store)
      // const center = {
      //   x: -x + width / 2,
      //   y: -y + height / 2
      // }
      return reactFlowInstance.project({x, y})
    }
    // useEffect(() => {
    //   if (diagramRef.current) {
    //     // Access getBoundingClientRect() method only when diagramRef.current is not null
    //     const { height, width } = store
    //     const {x, y} = diagramRef.current.getBoundingClientRect()
    //     const centerX = x + (width / 2)
    //     const centerY = y + (height / 2)
    //     setCenter(reactFlowInstance.project({x: centerX / 2, y: centerY / 2}))
    //   }
    // }, [diagramRef.current, reactFlowInstance]);


    const edgeTypes = useMemo(() => ({
        keyEdge: KeyEdge,
        partialParticipationEdge: PartialParticipationEdge,
        regularEdge: RegularEdge,
        totalParticipationEdge: TotalParticipationEdge,
        dashedLineEdge: DashedLineEdge
    }), []);
    const proOptions = { hideAttribution: true };

    const initialNodes = [
      { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
      { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
    ];
    const initialEdges = [{ id: 'e1-2', source: '1', target: '2', type: 'dashedLineEdge' }];
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  return (
    <Stack height="100%" width="100%">
        <DiagramAppBar/>
      
        <Stack direction="row" height="100%" width="100%">
          <NodeDrawer nodes={nodes} setNodes={setNodes} getCenter={getCenter} />

          <ReactFlow
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            proOptions={proOptions}
            maxZoom={10}
            minZoom={0}
          >
            <Controls position="bottom-right" />
          </ReactFlow>
          <SettingsDrawer />

        </Stack>
        
      </Stack>
  )
}

export default DiagramCreator