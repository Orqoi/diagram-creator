import React from "react";
import {
  Panel,
  useReactFlow,
  getRectOfNodes,
  getTransformForBounds,
} from "reactflow";
import { Button } from "@mui/material";
import { toPng } from "html-to-image";

function downloadImage(dataUrl) {
  const a = document.createElement("a");

  a.setAttribute("download", "ERD.png");
  a.setAttribute("href", dataUrl);
  a.click();
}

const imageWidth = 1024;
const imageHeight = 768;

function DownloadButton() {
  const { getNodes } = useReactFlow();
  const onClick = () => {
    // we calculate a transform for the nodes so that all nodes are visible
    // we then overwrite the transform of the `.react-flow__viewport` element
    // with the style option of the html-to-image library
    const nodesBounds = getRectOfNodes(getNodes());
    const transform = getTransformForBounds(
      nodesBounds,
      imageWidth,
      imageHeight,
      0.5,
      2
    );
    const viewportElement = document.querySelector(
      ".react-flow__viewport"
    ) as HTMLElement;

    toPng(viewportElement, {
      backgroundColor: "#fff",
      width: imageWidth,
      height: imageHeight,
      style: {
        width: `${imageWidth}`,
        height: `${imageHeight}`,
        transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
      },
    }).then(downloadImage);
  };

  return (
    <Button
      sx={{ marginBottom: "1rem" }}
      variant="contained"
      className="download-btn"
      onClick={onClick}
    >
      Download
    </Button>
  );
}

export default DownloadButton;
