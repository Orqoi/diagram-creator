import React from "react";
import { makeStyles } from "@mui/styles";

const height = 35;
const width = 70; // Set a fixed width for the icon
const borderRadius = "50%"; // Set the border radius for the icon

const useStyles = makeStyles({
  primaryAttributeIcon: {
    height: height,
    width: width,
    border: "1px solid black",
    background: "#fff",
    borderRadius: borderRadius,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "10px",
    textDecoration: "underline",
  },
});

const PrimaryAttributeNodeIcon = () => {
  const classes = useStyles();

  return (
    <div className={classes.primaryAttributeIcon}>
      <div>attribute</div>
    </div>
  );
};

export default PrimaryAttributeNodeIcon;
