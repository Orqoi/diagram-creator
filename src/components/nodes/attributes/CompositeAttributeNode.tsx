import React from "react";
import BaseAttributeNode from "./BaseAttributeNode";

function CompositeAttributeNode(props) {
  const borderStyle = {
    border: "1px solid black",
    padding: "10px",
    background: "#fff",
    minHeight: 100,
    minWidth: 200,
    display: "flex",
    flexDirection: "column", // Set the flex direction to column
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    position: "relative", // Add position relative to contain the button
  };
  return <BaseAttributeNode {...props} borderStyle={borderStyle} />;
}

export default CompositeAttributeNode;
