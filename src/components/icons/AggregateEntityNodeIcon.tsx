import React from "react";
import { makeStyles } from "@mui/styles";

const height = 35;
const inputWidth = 70; // Set a fixed width for the input element in the icon

const useStyles = makeStyles({
  diamond: {
    height: height,
    width: inputWidth,
    border: "1px solid black",
    background: "white",
  },
});

const AggregateEntityNodeIcon = () => {
  const classes = useStyles();
  const points = `${inputWidth / 2},4 1,${height / 2} ${inputWidth / 2},${
    height - 4
  } ${inputWidth - 1},${height / 2}`;

  return (
    <svg className={classes.diamond}>
      <polygon points={points} fill="white" stroke="black" strokeWidth="1" />
    </svg>
  );
};

export default AggregateEntityNodeIcon;
