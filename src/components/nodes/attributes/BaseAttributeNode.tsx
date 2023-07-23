import React from "react";
import BaseNode from "../BaseNode";
import "../temp.css";

function BaseAttributeNode(props) {
  return <BaseNode {...props} handleClass={"customHandle-circle"} />;
}

export default BaseAttributeNode;
