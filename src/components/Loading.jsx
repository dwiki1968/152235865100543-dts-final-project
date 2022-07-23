import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Loading = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          minHeight: "100px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    </>
  );
};

export default Loading;
