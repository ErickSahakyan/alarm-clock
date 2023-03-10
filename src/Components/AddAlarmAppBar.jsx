import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { AiOutlineArrowLeft, AiOutlineCheck } from "react-icons/ai";

const AddAlarmAppBar = ({handleShow}) => {
  return (
    <AppBar >
      <Toolbar>
        <IconButton onClick={handleShow}>
          <AiOutlineArrowLeft
            style={{
              color: "white",
              fontSize: "34px",
              fontWeight: "bold",
            }}
          />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Новый будильник
        </Typography>
        <IconButton>
          <AiOutlineCheck
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

export default AddAlarmAppBar;
