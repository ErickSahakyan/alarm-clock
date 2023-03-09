import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Calendar = ({ setShowCalendar }) => {
  const [dateValue, setDateValue] = useState(new Date());
  const idRef = useRef(Date.now());

  let options = {
    month: "long",
    year: "numeric",
  };

  let optionsDay = {
    day: "numeric",
  };

  const handleNextMonth = () => {
    if (typeof dateValue !== "number") {
      setDateValue(dateValue.setMonth(dateValue.getMonth() + 1));
    } else {
      const dateInMs = dateValue;
      const date = new Date(dateInMs);
      setDateValue(date.setMonth(date.getMonth() + 1));
    }
  };

  const handlePrevMonth = () => {
    if (typeof dateValue !== "number") {
      setDateValue(dateValue.setMonth(dateValue.getMonth() - 1));
    } else {
      const dateInMs = dateValue;
      const date = new Date(dateInMs);
      setDateValue(date.setMonth(date.getMonth() - 1));
    }
  };

  function dayInMonth() {
    const date = new Date(dateValue);
    const dayMonthArr = [];

    const prevDayMonth =
      32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();

    for (let i = 1; i <= prevDayMonth; i++) {
      dayMonthArr.push(i);
    }

    return dayMonthArr;
  }

  return (
    <div
      style={{
        minWidth: "50%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "120px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={handlePrevMonth}>
          <IoIosArrowBack
            style={{
              color: "white",
            }}
          />
        </Button>
        <p style={{ color: "white" }}>
          {new Intl.DateTimeFormat("ru-RU", options).format(dateValue)}
        </p>
        <Button onClick={handleNextMonth}>
          <IoIosArrowForward
            style={{
              color: "white",
            }}
          />
        </Button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "auto auto auto auto auto auto",
          gridTemplateColumns: "auto auto auto auto auto auto auto",
        }}
      >
        {dayInMonth().map((day, i) => (
          <Button
            key={i}
            // disabled={
            //   day <
            //     new Intl.DateTimeFormat("ru-RU", optionsDay).format(
            //       dateValue
            //     ) &
            //   new Date() ===
            //     new Intl.DateTimeFormat("ru-RU", options).format(dateValue)
            //     ? true
            //     : false
            // }
            style={{
            //   color:
            //     day <
            //     new Intl.DateTimeFormat("ru-RU", optionsDay).format(dateValue)
            //       ? "gray"
            //       : "white",
              backgroundColor: "transparent",
              outline: 0,
              border: 0,
              margin: 0,
            }}
          >
            {day}
          </Button>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          onClick={() => setShowCalendar(false)}
          style={{ color: "white" }}
        >
          Отмена
        </Button>
        <span style={{ color: "#BCBEC0", marginTop: "10px" }}>|</span>
        <Button style={{ color: "white" }}>Готово</Button>
      </div>
    </div>
  );
};

export default Calendar;
