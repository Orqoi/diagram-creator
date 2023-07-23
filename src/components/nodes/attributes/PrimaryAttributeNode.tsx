import React from "react";
import BaseAttributeNode from "./BaseAttributeNode";

function PrimaryAttributeNode(props) {
  const borderStyle = {
    border: "1px solid black",
    padding: "10px",
    background: "#fff",
    minHeight: 100,
    minWidth: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  };
  return (
    <BaseAttributeNode {...props} borderStyle={borderStyle} underline={true} />
  );
}

export default PrimaryAttributeNode;
