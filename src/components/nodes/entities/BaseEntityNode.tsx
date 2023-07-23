import React from "react";
import BaseNode from "../BaseNode";
import "../temp.css";

function BaseEntityNode(props) {
  return <BaseNode {...props} handleClass={"customHandle-rectangle"} />;
}

export default BaseEntityNode;
