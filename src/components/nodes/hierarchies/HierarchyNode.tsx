import { makeStyles } from "@mui/styles";
import { Handle, Position } from "reactflow";

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
  },
});

function HierarchyNode() {
  const classes = useStyles();

  return (
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
  );
}

export default HierarchyNode;
