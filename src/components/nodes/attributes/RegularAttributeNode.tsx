import React from "react";
import BaseAttributeNode from "./BaseAttributeNode";

function RegularAttributeNode(props) {
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
  return <BaseAttributeNode borderStyle={borderStyle} {...props} />;
}

export default RegularAttributeNode;
