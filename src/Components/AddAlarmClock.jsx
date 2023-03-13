import { Button, Input, TextField, Typography } from "@mui/material";
import React from "react";
import useAlarmClock from "../Hooks/useAlarmClock";
import AddAlarmAppBar from "./AddAlarmAppBar";
import WeekdayButton from "./WeekdayButton";

const AddAlarmClock = ({
  handleShow,
  alarmTime,
  handleAlarmTimeChange,
  alarmClockName,
  handleAlarmClockName,
  handleSetAlarm,
  handleValP,
  handlevalVT,
  handlevalS,
  handlevalCH,
  handlevalPY,
  handlevalSU,
  handlevalV,
  valP,
  valVT,
  valS,
  valCH,
  valPY,
  valSU,
  valV,
}) => {
  return (
    <div>
      <AddAlarmAppBar handleShow={handleShow} handleSetAlarm={handleSetAlarm} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginTop: "180px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            height: "50px",
          }}
        >
          <div style={{ width: "100%", heigth: "50%", color: "white" }}>
            <Button
              style={{
                width: "120px",
                height: "50px",
                color: "#474747",
                backgroundColor: "#474747",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "5px",
                }}
              >
                <Input
                  style={{ fontSize: "28px", color: "white" }}
                  type="time"
                  value={alarmTime}
                  onChange={handleAlarmTimeChange}
                />
              </div>{" "}
            </Button>
          </div>
          <div style={{ width: "100%", heigth: "50%" }}>
            <WeekdayButton
              handleValP={handleValP}
              handlevalVT={handlevalVT}
              handlevalS={handlevalS}
              handlevalCH={handlevalCH}
              handlevalPY={handlevalPY}
              handlevalSU={handlevalSU}
              handlevalV={handlevalV}
              valP={valP}
              valVT={valVT}
              valS={valS}
              valCH={valCH}
              valPY={valPY}
              valSU={valSU}
              valV={valV}
            />
          </div>
          <TextField
            value={alarmClockName}
            onChange={handleAlarmClockName}
            style={{
              color: "white",
              width: "100%",
              height: "50px",
              backgroundColor: "#474747",
              marginTop: "20px",
            }}
            id="filled-basic"
            label="Сообщение"
            variant="filled"
          />
          <div style={{ width: "100%", marginTop: "5px" }}>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "28px",
                marginRight: "15px",
              }}
            ></Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              style={{ marginTop: "10px" }}
              onClick={() => {
                handleSetAlarm();
                handleShow();
              }}
              variant="contained"
            >
              СОХРАНИТЬ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAlarmClock;
