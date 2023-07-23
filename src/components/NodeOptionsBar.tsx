import React from "react";
import { IconButton, Stack } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import EditIcon from "@mui/icons-material/Edit";

function NodeOptionsBar({ onDelete, setDisabled }) {
  return (
    <Stack
      direction="column"
      style={{
        position: "absolute",
        top: "50%",
        right: "-40px",
        transform: "translateY(-50%)",
      }}
    >
      <IconButton onClick={onDelete}>
        <HighlightOffIcon color="warning" />
      </IconButton>
      <IconButton
        onClick={() => {
          setDisabled(false);
        }}
      >
        <EditIcon />
      </IconButton>
    </Stack>
  );
}

export default NodeOptionsBar;
