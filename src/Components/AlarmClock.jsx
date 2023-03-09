import { Button } from "@mui/material";
import { BsPlus } from "react-icons/bs";
import  { useState } from "react";
import AddAlarmClock from "./AddAlarmClock";

const AlarmClock = () => {
  const [val, setVal] = useState(false);

  const handleAddAlarmClock = () => {
    setVal(true);
  };
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
      {val ? (
        <AddAlarmClock setVal={setVal} />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minWidth: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ color: "white", fontSize: "28px" }}>Будильник</p>
          </div>
          <div style={{ marginLeft: "350px" }}>
            <Button onClick={handleAddAlarmClock}>
              <BsPlus style={{ color: "white", fontSize: "38px" }} />
            </Button>
          </div>
          <div>
            <p
              style={{
                color: "#ccc",
                fontSize: "22px",
                marginTop: "15rem",
              }}
            >
              Нет будильников
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlarmClock;
