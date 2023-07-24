import { getStraightPath } from "reactflow";
import EdgeElement from "./EdgeElement";

export default function RegularEdge(props) {
  const calculateEdgePath = (sx, sy, tx, ty) => {
    const [edgePath] = getStraightPath({
      sourceX: sx,
      sourceY: sy,
      targetX: tx,
      targetY: ty,
    });
    return edgePath;
  };

  // Override the default styles for BaseEdge to set the stroke color to black
  const edgeStyle = { stroke: "black" };

  const otherProps = {
    edgeStyle,
    calculateEdgePath,
  };

  return <EdgeElement {...props} {...otherProps} />;
}
