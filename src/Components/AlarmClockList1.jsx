import { Button, FormControlLabel, FormGroup, Switch } from "@mui/material";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { GiUbisoftSun } from "react-icons/gi";

const AlarmClockList1 = ({
  handleBoolVal,
  handleDeleteAlarmClock,
  alarmClockDate,
  bool,
  handleShow,
}) => {
  return (
    <div>
      {alarmClockDate.selectedDays.map((val, i) => (
        <p style={{ color: "white" }}>Каждые: {val + ", "}</p>
      ))}
      <div
        style={{
          backgroundColor: "#474747",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              opacity: bool ? "1" : "0.1",
            }}
          >
            <GiUbisoftSun
              style={{
                color: "yellow",
                fontSize: "48px",
                marginLeft: "5px",
                marginRight: "5px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "30px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              {alarmClockDate.alarmClockName.map((val, i) => (
                <p
                  key={i}
                  style={{
                    color: "white",
                    fontSize: "12px",
                    marginBottom: "-15px",
                    opacity: bool ? "1" : "0.1",
                  }}
                >
                  {val}
                </p>
              ))}
              {alarmClockDate.selectedTime.map((val, i) => (
                <p
                  key={i}
                  style={{
                    color: "white",
                    fontSize: "22px",
                    opacity: bool ? "1" : "0.1",
                  }}
                >
                  {val}
                </p>
              ))}
            </div>
            <FormGroup>
              <FormControlLabel
                onClick={handleBoolVal}
                control={<Switch defaultChecked />}
              />
            </FormGroup>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              backgroundColor: "blue",
            }}
          >
            <Button
              onClick={handleShow}
              sx={{
                width: "5px",
                outline: "none",
                border: "none",
              }}
            >
              <FaPen style={{ color: "white", fontSize: "22px" }} />
            </Button>
            <Button
              onClick={handleDeleteAlarmClock}
              sx={{
                width: "5px",
                outline: "none",
                border: "none",
              }}
            >
              <AiFillDelete style={{ color: "white", fontSize: "22px" }} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlarmClockList1;
