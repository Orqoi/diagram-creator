import EdgeElement from "./EdgeElement";

export default function PartialParticipationEdge(props) {
  const calculateEdgePath = (sx, sy, tx, ty) => {
    const doubleLineWidth = 1; // Set the width of the double line
    // Calculate the angle between source and target points
    const dx = tx - sx;
    const dy = ty - sy;
    const angle = Math.atan2(dy, dx);

    // Calculate the perpendicular offset for the double lines
    const offsetX = doubleLineWidth * Math.cos(angle + Math.PI / 2);
    const offsetY = doubleLineWidth * Math.sin(angle + Math.PI / 2);

    // Calculate the coordinates for the two lines
    const line1X1 = sx + offsetX;
    const line1Y1 = sy + offsetY;
    const line1X2 = tx + offsetX;
    const line1Y2 = ty + offsetY;

    const line2X1 = sx - offsetX;
    const line2Y1 = sy - offsetY;
    const line2X2 = tx - offsetX;
    const line2Y2 = ty - offsetY;

    const edgePath = `M ${line1X1},${line1Y1} L ${line1X2},${line1Y2} M ${line2X1},${line2Y1} L ${line2X2},${line2Y2}`;
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
