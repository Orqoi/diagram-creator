import React from "react";
import BaseNode from "../BaseNode";

function BaseRelationNode(props) {
  return <BaseNode {...props} handleClass={".customHandle-rectangle"} />;
}

export default BaseRelationNode;
