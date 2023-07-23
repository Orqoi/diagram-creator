import React from "react";
import BaseAttributeNode from "./BaseAttributeNode";

function DerivedAttributeNode(props) {
  const borderStyle = {
    border: "1px dashed black",
    padding: "10px",
    background: "#fff",
    minHeight: 100,
    minWidth: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  };
  return <BaseAttributeNode {...props} borderStyle={borderStyle} />;
}

export default DerivedAttributeNode;
