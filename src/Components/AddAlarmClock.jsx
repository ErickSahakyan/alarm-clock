import { Button, Checkbox, Input, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddAlarmAppBar from "./AddAlarmAppBar";
import WeekdayButton from "./WeekdayButton";

const AddAlarmClock = ({ handleShow }) => {
  const [alarmTime, setAlarmTime] = useState("");
  const [time, setTime] = useState(new Date().toLocaleDateString());
  const [alarmSound, setAlarmSound] = useState(null);
  const [alarmClockDate, setAlarmClockDate] = useState([]);

  const handleAlarmTimeChange = (event) => {
    setAlarmTime(event.target.value);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSetAlarm = () => {
    setAlarmClockDate({
      time: [...alarmTime, alarmTime],
    });
  };

  const handleResetAlarm = () => {
    setAlarmTime("");
    if (alarmSound) {
      alarmSound.pause();
      alarmSound.currentTime = 0;
    }
  };

  return (
    <div>
      <AddAlarmAppBar handleShow={handleShow} />
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
            <WeekdayButton />
          </div>
          <TextField
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
            >
              Сигнал тревоги
              <Checkbox
                defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
              />
            </Typography>
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
              onClick={handleSetAlarm}
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
