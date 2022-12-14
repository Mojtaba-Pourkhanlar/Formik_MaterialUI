import React from "react";
import { ThemeProvider } from "@mui/material";
// Theme
import Containers from "./frontEnd/Containers";
import { theme } from "./frontEnd/mui/theme";

const AppContainer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Containers />
    </ThemeProvider>
  );
};

export default AppContainer;
