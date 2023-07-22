import React from "react";
import { makeStyles } from "@mui/styles";

const height = 35;
const width = 70; // Set a fixed width for the input element in the icon

const useStyles = makeStyles({
  diamond: {
    height: height,
    width: width,
  },
  diamondOuter: {
    fill: "white",
    stroke: "black",
    strokeWidth: 2,
  },
  diamondInner: {
    fill: "none",
    stroke: "white",
    strokeWidth: 1,
  },
});

const WeakRelationNodeIcon = () => {
  const classes = useStyles();
  const points = `${width / 2},3 3,${height / 2} ${width / 2},${height - 3} ${
    width - 3
  },${height / 2}`;

  return (
    <svg className={classes.diamond}>
      <polygon points={points} className={classes.diamondOuter} />
      <polygon points={points} className={classes.diamondInner} />
    </svg>
  );
};

export default WeakRelationNodeIcon;
