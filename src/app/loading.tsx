'use client';

import { Box, Typography } from "@mui/material";

export default function Loading() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', maxHeight: '100%'}}>
      <Typography variant="h5" align="center" gutterBottom>Loading...</Typography>
    </Box>
  )
}
