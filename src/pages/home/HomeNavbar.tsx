import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import primaryIcon from "../../assets/primary_logo.png";

type HomeNavbarProps = {
  onLoginClick: () => void;
};

export default function HomeNavbar(props: HomeNavbarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Box
            component="div"
            sx={{
              flexGrow: 1,
            }}
          >
            <Avatar
              alt="Logo"
              src={primaryIcon}
              sx={{ width: 56, height: 56 }}
            />
          </Box>
          <Button
            color="primary"
            variant="contained"
            onClick={props.onLoginClick}
          >
            Login
          </Button>
          <Button
            color="primary"
            variant="outlined"
            sx={{ marginLeft: "10px" }}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
