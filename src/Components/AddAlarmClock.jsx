import { Button, Input } from "@mui/material";
import React, { memo, useCallback, useRef, useState } from "react";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { initialState, useAlarmClock } from "../Hooks/useALarmClock";
import Calendar from "./Calendar";
import Clock from "./Clock";
import WeekdayButton from "./WeekdayButton";

function AddAlarmClock({ setVal }) {
  const [signalName, setSignalName] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);

  const currentTime = useRef(new Date());
  const { alarmDate, setAlarmDate } = useAlarmClock();

  console.log(alarmDate);

  const handleCancel = () => {
    setVal(false);
  };

  const nextDay = useCallback(() => {
    return new Intl.DateTimeFormat("ru-RU", options).format(
      currentTime.current.setDate(currentTime.current.getDay() - 1)
    );
  }, []);

  const handleSave = () => {};

  const alarmClockText = () => {
    if (alarmDate.length === 0) {
      return "Завтра - ";
    }
    if (alarmDate.length === 7) {
      return "Ежедневно";
    }
    if (alarmDate.length > 1) {
      return "Кажд. ";
    }
  };

  const weekdayFunc = () => {
    if (alarmDate.length === 0) {
      return nextDay();
    }
    if (alarmDate.length === 7) {
      setAlarmDate([]);
    }
    if (alarmDate.length > 0) {
      return alarmDate.map((day) => day + ", ");
    }
  };

  const handleShowCalendar = () => {
    setShowCalendar(true);
  };

  let options = { weekday: "long" };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minWidth: "50%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {showCalendar ? (
        <Calendar setShowCalendar={setShowCalendar} />
      ) : (
        <div>
          <div>
            <Clock />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "white" }}>
                {alarmClockText()}
                {weekdayFunc()}
              </p>
              <Button onClick={handleShowCalendar}>
                <BsFillCalendarWeekFill
                  style={{ color: "white", fontSize: "20px" }}
                />
              </Button>
            </div>
            <div style={{ color: "white" }}>
              <WeekdayButton />
            </div>
            <div style={{ marginTop: "20px" }}>
              <Input
                placeholder="Имя сигнала"
                style={{
                  color: "white",
                  width: "100%",
                  height: "50px",
                  fontSize: "16px",
                }}
                value={signalName}
                onChange={(e) => setSignalName(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "20px",
              }}
            >
              <Button style={{ color: "white" }} onClick={handleCancel}>
                Отмена
              </Button>
              <Button style={{ color: "white" }} onClick={handleSave}>
                Сохранить
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddAlarmClock;
