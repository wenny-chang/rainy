"use client";
import CssBaseline from "@mui/material/CssBaseline";
import { darkMode, lightMode } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { useModeContext } from "@/app/context/ThemeContext";

const MuiThemeProvider = ({ children }: any) => {
  const { isDarkMode } = useModeContext();
  return (
    <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeProvider;
