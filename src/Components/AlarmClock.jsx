import { Button } from "@mui/material";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AddAlarmClock from "./AddAlarmClock";
import AlarmClockList from "./AlarmClockList";
import Navbar from "./Navbar";

const AlarmClock = () => {
  const [val, setVal] = useState(true);

  const handleShow = () => {
    setVal(!val);
  };

  return (
    <div>
      <Navbar handleShow={handleShow} />
      <AlarmClockList />
      {val ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              width: "50%",
              minHeight: "50%",
              backgroundColor: "#474747",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto 0",
                padding: "50px",
              }}
            >
              <Button
                onClick={handleShow}
                style={{
                  backgroundColor: "blue",
                  borderRadius: "250px 250px 250px",
                  minWidth: "50px",
                  height: "50px",
                }}
              >
                <AiOutlinePlus
                  style={{
                    color: "white",
                    backgroundColor: "blue",
                    fontSize: "34px",
                    fontWeight: "bold",
                  }}
                />
              </Button>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ color: "white" }}>
                  Создайте новый сигнал будильника здесь
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <AddAlarmClock handleShow={handleShow} />
      )}
    </div>
  );
};

export default AlarmClock;
