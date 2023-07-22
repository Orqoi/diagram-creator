import React from "react";
import { Stack, Button } from "@mui/material";
import DownloadButton from "./DownloadButton";

function SettingsDrawer() {
  return (
    <Stack
      width={500}
      paddingLeft={"1rem"}
      paddingRight={"1rem"}
      border="1px solid lightgray"
      justifyContent={"flex-end"}
    >
      <DownloadButton />
      <Button sx={{ marginBottom: "1rem" }} variant="contained">
        Convert to SQL
      </Button>
      <Button sx={{ marginBottom: "1rem" }} variant="contained">
        Delete
      </Button>
      <Button sx={{ marginBottom: "1rem" }} variant="contained">
        Save Draft
      </Button>
    </Stack>
  );
}

export default SettingsDrawer;
