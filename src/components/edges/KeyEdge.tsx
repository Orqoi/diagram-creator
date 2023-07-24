import { getStraightPath } from "reactflow";
import EdgeElement from "./EdgeElement";

export default function KeyEdge(props) {
  const { id } = props;
  // Use the getEdgeParams function to calculate the edge parameters

  // Use the calculated sx, sy, tx, and ty to create the edge path
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

  const markerId = `arrowhead-${id}`; // Use a unique ID for the marker

  const markerProps = {
    id: markerId,
    viewBox: "0 0 10 10", // Adjust the viewBox as needed for the arrowhead size
    refX: 8, // Set the X coordinate for the arrowhead's tip
    refY: 5, // Set the Y coordinate for the arrowhead's center
    markerWidth: 8, // Set the marker's width (affects the size)
    markerHeight: 8, // Set the marker's height (affects the size)
    orient: "auto",
  };

  const markerPath = "M 0,0 L 10,5 L 0,10 Z";

  const otherProps = {
    markerId,
    markerProps,
    markerPath,
    edgeStyle,
    calculateEdgePath,
  };

  return <EdgeElement {...props} {...otherProps} />;
}
