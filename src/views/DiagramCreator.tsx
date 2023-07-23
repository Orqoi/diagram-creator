import { Stack, Button } from "@mui/material";
import { useCallback, useMemo, useState, useEffect } from "react";
import ReactFlow, {
  Controls,
  useReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  useStoreApi,
  MarkerType,
} from "reactflow";

import NodeDrawer from "../components/NodeDrawer";
import WeakEntityNode from "../components/nodes/entities/WeakEntityNode";
import RegularEntityNode from "../components/nodes/entities/RegularEntityNode";
import AggregateEntityNode from "../components/nodes/entities/AggregateEntityNode";
import RegularRelationNode from "../components/nodes/relations/RegularRelationNode";
import WeakRelationNode from "../components/nodes/relations/WeakRelationNode";
import RegularAttributeNode from "../components/nodes/attributes/RegularAttributeNode";
import HierarchyNode from "../components/nodes/hierarchies/HierarchyNode";
import DiagramAppBar from "../components/DiagramAppBar";
import CompositeAttributeNode from "../components/nodes/attributes/CompositeAttributeNode";
import MultiValuedAttributeNode from "../components/nodes/attributes/MultiValuedAttributeNode";
import PrimaryAttributeNode from "../components/nodes/attributes/PrimaryAttributeNode";
import DerivedAttributeNode from "../components/nodes/attributes/DerivedAttributeNode";
import SettingsDrawer from "../components/SettingsDrawer";
import DashedLineEdge from "../components/edges/DashedLineEdge";
import TotalParticipationEdge from "../components/edges/TotalParticipationEdge";
import KeyEdge from "../components/edges/KeyEdge";
import PartialParticipationEdge from "../components/edges/PartialParticipationEdge";
import RegularEdge from "../components/edges/RegularEdge";

function DiagramCreator() {
  const nodeTypes = useMemo(
    () => ({
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
      derivedAttribute: DerivedAttributeNode,
    }),
    []
  );

  const reactFlowInstance = useReactFlow();
  const store = useStoreApi();
  useEffect(() => {
    console.log(store.getState());
    console.log(reactFlowInstance);
  }, [store.getState(), reactFlowInstance]);

  const getCenter = useCallback(() => {
    // Get the basic info about the viewport
    const {
      height,
      width,
      transform: [transformX, transformY, zoomLevel],
    } = store.getState();
    const zoomMultiplier = 1 / zoomLevel;

    // Figure out the center of the current viewport
    const centerX = -transformX * zoomMultiplier + (width * zoomMultiplier) / 2;
    const centerY =
      -transformY * zoomMultiplier + (height * zoomMultiplier) / 2;

    return {
      x: centerX,
      y: centerY,
    };
  }, [store]);

  const edgeTypes = useMemo(
    () => ({
      keyEdge: KeyEdge,
      partialParticipationEdge: PartialParticipationEdge,
      regularEdge: RegularEdge,
      totalParticipationEdge: TotalParticipationEdge,
      dashedLineEdge: DashedLineEdge,
    }),
    []
  );
  const proOptions = { hideAttribution: true };
  const initialNodes = [
    {
      id: "1",
      type: "compositeAttribute",
      position: { x: 600, y: 0 },
      data: { label: "1" },
    },
    {
      id: "2",
      type: "compositeAttribute",
      position: { x: 600, y: 400 },
      data: { label: "2" },
    },
  ];
  const initialEdges = [
    { id: "e123", source: "1", target: "2", type: "keyEdge" },
  ];

  // const initialNodes = localStorage.getItem("nodes") ?? "[]";
  // const initialEdges = localStorage.getItem("edges") ?? "[]";
  const [nodes, setNodes, onNodesChange] = useNodesState(
    initialNodes
    // JSON.parse(initialNodes)
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    initialEdges
    // JSON.parse(initialEdges)
  );

  useEffect(() => {
    // call API to save current representation, with debounce interval
    localStorage.setItem("nodes", JSON.stringify(nodes));
    localStorage.setItem("edges", JSON.stringify(edges));
  }, [nodes, edges]);

  const [selectedNode, setSelectedNode] = useState(null);

  const onNodeClick = (event, node) => {
    setSelectedNode(node);
  };

  const [connectionEdge, setConnectionEdge] = useState("regularEdge");
  const onConnect = useCallback(
    (params: any) => {
      if (params.source !== params.target) {
        setEdges((eds) => {
          return addEdge({ ...params, type: connectionEdge }, eds);
        });
      }
    },
    [connectionEdge, setEdges]
  );
  return (
    <Stack height="100%" width="100%">
      <DiagramAppBar />

      <Stack direction="row" height="100%" width="100%">
        <NodeDrawer
          nodes={nodes}
          setNodes={setNodes}
          getCenter={getCenter}
          connectionEdge={connectionEdge}
          setConnectionEdge={setConnectionEdge}
        />

        <ReactFlow
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          onConnect={onConnect}
          proOptions={proOptions}
          maxZoom={10}
          minZoom={0}
          multiSelectionKeyCode={"Shift"}
        >
          <Controls position="bottom-right" />
        </ReactFlow>
        <SettingsDrawer selectedNode={selectedNode} />
      </Stack>
    </Stack>
  );
}

export default DiagramCreator;
