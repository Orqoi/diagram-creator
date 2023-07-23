import React from "react";
import { Stack, Button, Typography } from "@mui/material";
import DownloadButton from "./DownloadButton";

function SettingsDrawer({ selectedNode }) {
  const renderNodeOptions = () => {
    if (selectedNode === null) {
      return;
    }
    const { data, dragging, height, id, position, selected, type, width } =
      selectedNode;
    return (
      <>
        <Typography align="center">{JSON.stringify(data)}</Typography>
        <Typography align="center">{dragging}</Typography>
        <Typography align="center">{height}</Typography>
        <Typography align="center">{id}</Typography>
        <Typography align="center">{JSON.stringify(position)}</Typography>
        <Typography align="center">{selected}</Typography>
        <Typography align="center">{type}</Typography>
        <Typography align="center">{width}</Typography>
      </>
    );
  };
  return (
    <Stack
      width={500}
      paddingLeft={"1rem"}
      paddingRight={"1rem"}
      border="1px solid lightgray"
      justifyContent={"flex-end"}
    >
      {renderNodeOptions()}
      <DownloadButton />
      {/* <Button sx={{ marginBottom: "1rem" }} variant="contained">
        Convert to SQL
      </Button> */}
    </Stack>
  );
}

export default SettingsDrawer;
