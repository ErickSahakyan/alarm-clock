import { useCallback, useEffect, useState } from "react";

export default function Clock() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  useCallback(() => {
    setCurrentTime(new Date());
  }, [currentTime]);

  useEffect(() => {
    const date = new Date();
    setHours(date.getHours() || 12);
    setMinutes(date.getMinutes());
  }, [currentTime]);

  return (
    <div
      style={{
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ margin: "0 auto" }}>
        <span
          style={{ fontSize: "20px", color: "white"}}
        >
          CURRENT TIME
        </span>
      </div>
      <div style={{ margin: "0 auto" }}>
        <span
          style={{
            color: "white",
            fontSize: "38px",
          }}
        >
          {hours < 10 ? "0" + hours : hours}:
        </span>

        <span style={{ color: "white", fontSize: "38px" }}>
          {minutes < 10 ? "0" + minutes : minutes}
        </span>
      </div>
    </div>
  );
}
