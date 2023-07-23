import React from "react";
import BaseEntityNode from "./BaseEntityNode";

const RegularEntityNode = (props) => {
  const borderStyle = {
    border: "1px solid black",
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

export default RegularEntityNode;
