import React from "react";
import BaseEntityNode from "./BaseEntityNode";

const WeakEntityNode = (props) => {
  const borderStyle = {
    border: "3px double black",
    padding: "10px",
    background: "#fff",
    minHeight: 100,
    minWidth: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return <BaseEntityNode {...props} borderStyle={borderStyle} />;
};

export default WeakEntityNode;
