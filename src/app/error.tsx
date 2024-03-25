"use client";

import { Typography } from "@mui/material";

export default function Error() {
  return (
    <Typography
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        height: "50vh",
      }}
    >
      !!! ALGO DEU ERRO !!!
    </Typography>
  );
}
