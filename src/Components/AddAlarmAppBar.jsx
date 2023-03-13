import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { AiOutlineArrowLeft, AiOutlineCheck } from "react-icons/ai";
import useAlarmClock from "../Hooks/useAlarmClock";

const AddAlarmAppBar = ({ handleShow, handleSetAlarm }) => {
  return (
    <AppBar>
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
        <IconButton onClick={handleSetAlarm}>
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
