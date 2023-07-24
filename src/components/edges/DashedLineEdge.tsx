import { getStraightPath } from "reactflow";
import EdgeElement from "./EdgeElement";

export default function DashedLineEdge(props) {
  const edgeStyle = { strokeDasharray: "5,5" }; // Customize the pattern for the dashed line here
  const calculateEdgePath = (sx, sy, tx, ty) => {
    const [edgePath] = getStraightPath({
      sourceX: sx,
      sourceY: sy,
      targetX: tx,
      targetY: ty,
    });
    return edgePath;
  };

  const otherProps = {
    edgeStyle,
    calculateEdgePath,
  };

  return <EdgeElement {...props} {...otherProps} />;
}
