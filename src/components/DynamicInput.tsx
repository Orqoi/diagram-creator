import React, { useEffect, useState } from "react";
import { Input } from "@mui/material";
import { makeStyles } from "@mui/styles";

function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function DynamicInput({ underline = false }) {
  const FONT_SIZE = convertRemToPixels(1);
  const DEFAULT_INPUT_WIDTH = 100;

  const [textValue, setTextValue] = useState("");
  const [inputWidth, setInputWidth] = useState(DEFAULT_INPUT_WIDTH);

  useEffect(() => {
    if (textValue.length * FONT_SIZE > DEFAULT_INPUT_WIDTH) {
      setInputWidth((textValue.length + 1) * FONT_SIZE);
    } else {
      setInputWidth(DEFAULT_INPUT_WIDTH);
    }
  }, [textValue, FONT_SIZE]);
  const useStyles = makeStyles({
    inputCenter: {
      textAlign: "center",
      width: `${inputWidth}px`,
      textDecoration: underline ? "underline" : "none",
    },
  });
  const classes = useStyles();
  return (
    <Input
      disableUnderline
      classes={{
        input: classes.inputCenter,
      }}
      placeholder="text"
      value={textValue}
      onChange={(e) => setTextValue(e.target.value)}
      style={{ position: "relative", zIndex: 2 }}
    />
  );
}

export default DynamicInput;
