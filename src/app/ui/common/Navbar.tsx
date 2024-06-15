"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import { useCallback, useState } from "react";
import Image from "next/image";
import { useModeContext } from "@/app/context/ThemeContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { pages } from "@/app/lib/constant";
import Link from "next/link";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const { isDarkMode, toggleDarkMode } = useModeContext();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const goTo = useCallback((route) => {}, []);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Image src="/logo-dark.png" alt="logo" width={40} height={40} />
          </Stack>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mx: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MYSECY
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link key={page.route} href={page.route}>
                  <Typography textAlign="center">{page.name}</Typography>
                </Link>
              ))}
            </Menu>
          </Box>
          <Stack sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <Image src="/logo-dark.png" alt="logo" width={40} height={40} />
          </Stack>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MYSECY
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button key={page.route} sx={{ my: 2, display: "block" }}>
                <Link
                  href={page.route}
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </Link>
              </Button>
            ))}
          </Box>
          <Box>
            <IconButton
              size="large"
              aria-label="switch mode"
              aria-controls="toggle-mode"
              aria-haspopup="true"
              onClick={toggleDarkMode}
              color="inherit"
            >
              {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
