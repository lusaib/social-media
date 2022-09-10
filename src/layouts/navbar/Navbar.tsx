import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  NavbarSearch,
  NavbarSearchIconWrapper,
  NavbarStyledInputBase,
} from "./NavbarStyling";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <NavbarSearch>
            <NavbarSearchIconWrapper>
              <SearchIcon />
            </NavbarSearchIconWrapper>
            <NavbarStyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </NavbarSearch>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
