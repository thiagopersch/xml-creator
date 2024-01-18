'use client';

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#b90504',
      dark: '#810302',
      light: '#C73736',
      contrastText: '#FFFFFF',
    }
  }
})

export default theme;