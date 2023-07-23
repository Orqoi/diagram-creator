import { makeStyles } from "@mui/styles";
import { Handle, Position, useStore, useReactFlow } from "reactflow";
import "../temp.css";
import NodeOptionsBar from "../../NodeOptionsBar";

const useStyles = makeStyles({
  triangle: {
    width: "100px",
    height: "100px",
  },
  content: {
    fontSize: "20px",
    fontWeight: "bold",
    dominantBaseline: "middle",
    textAnchor: "middle",
    zIndex: 4,
    pointerEvents: "none",
  },
});

const connectionNodeIdSelector = (state) => state.connectionNodeId;
const sourceStyle = { zIndex: 1 };

function HierarchyNode({ id, selected }) {
  const connectionNodeId = useStore(connectionNodeIdSelector);

  const isConnecting = !!connectionNodeId;
  const reactFlowInstance = useReactFlow();
  const nodes = reactFlowInstance.getNodes();
  const edges = reactFlowInstance.getEdges();
  const onDelete = () => {
    reactFlowInstance.setNodes(nodes.filter((node) => node.id !== id));
    reactFlowInstance.setEdges(
      edges.filter((edge) => edge.source !== id && edge.target !== id)
    );
  };
  const classes = useStyles();

  return (
    <>
      <svg className={classes.triangle}>
        <polygon
          points="0,100 50,0 100,100"
          fill="white"
          stroke="black"
          strokeWidth="1"
        />
        <text className={classes.content} x="50" y="60">
          ISA
        </text>
      </svg>
      <Handle
        className={"customHandle-rectangle"}
        position={Position.Left}
        type="target"
      />
      {!isConnecting && (
        <Handle
          className={"customHandle-rectangle"}
          position={Position.Right}
          type="source"
          style={sourceStyle}
        />
      )}
      {selected && <NodeOptionsBar onDelete={onDelete} />}
    </>
  );
}

export default HierarchyNode;
