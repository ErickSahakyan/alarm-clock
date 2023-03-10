import { Button } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import useAlarmClock from "../Hooks/useAlarmClock";

const WeekdayButton = () => {
  const [valP, setValP] = useState(false);
  const [valVT, setValVT] = useState(false);
  const [valS, setValS] = useState(false);
  const [valCH, setValCH] = useState(false);
  const [valPY, setValPY] = useState(false);
  const [valSU, setValSU] = useState(false);
  const [valV, setValV] = useState(false);

  const {
    setAlarmClockDate,
    alarmClockDate,
  } = useAlarmClock();

  const handleValP = () => {
    setValP(!valP);
    setAlarmClockDate(alarmClockDate.selectedDays.push("Пн"));
  };

  const handlevalVT = () => {
    setValVT(!valVT);
    setAlarmClockDate(alarmClockDate.selectedDays.push("Вт"));
  };

  const handlevalS = () => {
    setValS(!valS);
    setAlarmClockDate(alarmClockDate.selectedDays.push("Ср"));
  };

  const handlevalCH = () => {
    setValCH(!valCH);
    setAlarmClockDate(alarmClockDate.selectedDays.push("Чт"));
  };

  const handlevalPY = () => {
    setValPY(!valPY);
    setAlarmClockDate(alarmClockDate.selectedDays.push("Пт"));
  };

  const handlevalSU = () => {
    setValSU(!valSU);
    setAlarmClockDate(alarmClockDate.selectedDays.push("Сб"));
  };

  const handlevalV = () => {
    setValV(!valV);
    setAlarmClockDate(alarmClockDate.selectedDays.push("Вс"));
  };

  return (
    <div style={{ display: "flex", gap: "25px", marginTop: "20px" }}>
      <Button
        style={{
          color: "white",
          fontSize: "20px",
          minWidth: "25px",
          height: "40px",
          backgroundColor: valV ? "blue" : "gray",
          borderRadius: "100px 100px 100px",
        }}
        onClick={handlevalV}
      >
        ВС
      </Button>
      <Button
        style={{
          color: "white",
          fontSize: "20px",
          minWidth: "25px",
          height: "40px",
          backgroundColor: valP ? "blue" : "gray",
          borderRadius: "100px 100px 100px",
        }}
        onClick={handleValP}
      >
        ПН
      </Button>
      <Button
        style={{
          color: "white",
          fontSize: "20px",
          minWidth: "25px",
          height: "40px",
          backgroundColor: valVT ? "blue" : "gray",
          borderRadius: "100px 100px 100px",
        }}
        onClick={handlevalVT}
      >
        ВТ
      </Button>
      <Button
        style={{
          color: "white",
          fontSize: "20px",
          minWidth: "25px",
          height: "40px",
          backgroundColor: valS ? "blue" : "gray",
          borderRadius: "100px 100px 100px",
        }}
        onClick={handlevalS}
      >
        СР
      </Button>
      <Button
        style={{
          color: "white",
          fontSize: "20px",
          minWidth: "25px",
          height: "40px",
          backgroundColor: valCH ? "blue" : "gray",
          borderRadius: "100px 100px 100px",
        }}
        onClick={handlevalCH}
      >
        ЧТ
      </Button>
      <Button
        style={{
          color: "white",
          fontSize: "20px",
          minWidth: "25px",
          height: "40px",
          backgroundColor: valPY ? "blue" : "gray",
          borderRadius: "100px 100px 100px",
        }}
        onClick={handlevalPY}
      >
        ПТ
      </Button>
      <Button
        style={{
          color: "white",
          fontSize: "20px",
          minWidth: "25px",
          height: "40px",
          backgroundColor: valSU ? "blue" : "gray",
          borderRadius: "100px 100px 100px",
        }}
        onClick={handlevalSU}
      >
        СБ
      </Button>
    </div>
  );
};

export default WeekdayButton;
