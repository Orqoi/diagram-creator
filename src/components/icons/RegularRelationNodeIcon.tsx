import React from "react";
import { makeStyles } from "@mui/styles";

const height = 35;
const width = 70; // Set a fixed width for the input element in the icon

const useStyles = makeStyles({
  diamond: {
    height: height,
    width: width,
  },
});

const RegularRelationNodeIcon = () => {
  const classes = useStyles();
  const points = `${width / 2},1 1,${height / 2} ${width / 2},${height - 1} ${
    width - 1
  },${height / 2}`;

  return (
    <svg className={classes.diamond}>
      <polygon points={points} fill="white" stroke="black" strokeWidth="1" />
    </svg>
  );
};

export default RegularRelationNodeIcon;
