"use client";

import theme from "@/styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import "../styles/globals.css";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
