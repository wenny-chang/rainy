"use client";
import { createTheme } from "@mui/material/styles";

const darkMode = createTheme({
  palette: {
    mode: "dark",
  },
});
const lightMode = createTheme({
  palette: {
    mode: "light",
  },
});

export { darkMode, lightMode };
