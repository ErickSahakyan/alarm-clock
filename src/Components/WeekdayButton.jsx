import { Button } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { initialState, useAlarmClock } from "../Hooks/useALarmClock";

const WeekdayButton = () => {
  const [valP, setValP] = useState(false);
  const [valVT, setValVT] = useState(false);
  const [valS, setValS] = useState(false);
  const [valCH, setValCH] = useState(false);
  const [valPY, setValPY] = useState(false);
  const [valSU, setValSU] = useState(false);
  const [valV, setValV] = useState(false);

  const { alarmDate, setAlarmDate } = useAlarmClock();

  const handleValP = () => {
    setValP(!valP);
    setAlarmDate([...alarmDate.push("Пн")]);
  };

  const handlevalVT = () => {
    setValVT(!valVT);
    setAlarmDate([...alarmDate.push("Вт")]);
  };

  const handlevalS = () => {
    setValS(!valS);
    setAlarmDate([...alarmDate.push("Ср")]);
  };

  const handlevalCH = () => {
    setValCH(!valCH);
    setAlarmDate([...alarmDate.push("Чт")]);
  };

  const handlevalPY = () => {
    setValPY(!valPY);
    setAlarmDate([...alarmDate.push("Пт")]);
  };

  const handlevalSU = () => {
    setValSU(!valSU);
    setAlarmDate([...alarmDate.push("Сб")]);
  };

  const handlevalV = () => {
    setValV(!valV);
    setAlarmDate([...alarmDate.push("Вс")]);
  };

  return (
    <div style={{ display: "flex", gap: "40px", marginTop: "20px" }}>
      <Button
        style={{
          color: "white",
          fontSize: "20px",
          minWidth: "25px",
          maxWidth: "30px",
          height: "30px",
          border: valP ? "0.5px solid white" : "",
          borderRadius: "100px 100px 100px",
        }}
        onClick={handleValP}
      >
        П
      </Button>
      <Button
        style={{
          color: "white",
          fontSize: "20px",
          minWidth: "25px",
          maxWidth: "30px",
          height: "30px",
          border: valVT ? "0.5px solid white" : "",
          borderRadius: "100px 100px 100px",
        }}
        onClick={handlevalVT}
      >
        В
      </Button>
      <Button
        style={{
          color: "white",
          fontSize: "20px",
          minWidth: "25px",
          maxWidth: "30px",
          height: "30px",
          border: valS ? "0.5px solid white" : "",
          borderRadius: "100px 100px 100px",
        }}
        onClick={handlevalS}
      >
        С
      </Button>
      <Button
        style={{
          color: "white",
          fontSize: "20px",
          minWidth: "25px",
          maxWidth: "30px",
          height: "30px",
          border: valCH ? "0.5px solid white" : "",
          borderRadius: "100px 100px 100px",
        }}
        onClick={handlevalCH}
      >
        Ч
      </Button>
      <Button
        style={{
          color: "white",
          fontSize: "20px",
          minWidth: "25px",
          maxWidth: "30px",
          height: "30px",
          border: valPY ? "0.5px solid white" : "",
          borderRadius: "100px 100px 100px",
        }}
        onClick={handlevalPY}
      >
        П
      </Button>
      <Button
        style={{
          color: "white",
          fontSize: "20px",
          minWidth: "25px",
          maxWidth: "30px",
          height: "30px",
          border: valSU ? "0.5px solid white" : "",
          borderRadius: "100px 100px 100px",
        }}
        onClick={handlevalSU}
      >
        С
      </Button>
      <Button
        style={{
          color: "red",
          fontSize: "20px",
          minWidth: "25px",
          maxWidth: "30px",
          height: "30px",
          border: valV ? "0.5px solid red" : "",
          borderRadius: "100px 100px 100px",
        }}
        onClick={handlevalV}
      >
        В
      </Button>
    </div>
  );
};

export default WeekdayButton;
