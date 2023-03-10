import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Navbar = ({ handleShow }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Мои тревоги
        </Typography>
        <IconButton onClick={handleShow}>
          <AiOutlinePlus
            style={{
              color: "white",
              fontSize: "34px",
              fontWeight: "bold",
            }}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
