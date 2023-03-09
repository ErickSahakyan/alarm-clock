import React, { useState, useEffect } from "react";

const MiniAlarmClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [alarmTime, setAlarmTime] = useState("");
  const [alarmSet, setAlarmSet] = useState(false);
  const [alarmSound, setAlarmSound] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleAlarmTimeChange = (event) => {
    setAlarmTime(event.target.value);
  };

  const handleSetAlarm = () => {
    setAlarmSet(true);
  };

  const handleResetAlarm = () => {
    setAlarmTime("");
    setAlarmSet(false);
    if (alarmSound) {
      alarmSound.pause();
      alarmSound.currentTime = 0;
    }
  };

  useEffect(() => {
    if (alarmTime && time === alarmTime && alarmSet) {
      const sound = new Audio("path/to/alarm/sound.mp3");
      sound.play();
      setAlarmSound(sound);
    }
  }, [alarmTime, time, alarmSet]);

  return (
    <div className="mini-alarm-clock">
      <h2>{time}</h2>
      {!alarmSet && (
        <>
          <input
            type="time"
            value={alarmTime}
            onChange={handleAlarmTimeChange}
          />
          <button onClick={handleSetAlarm}>Set Alarm</button>
        </>
      )}
      {alarmSet && (
        <>
          <p>Alarm set for {alarmTime}</p>
          <button onClick={handleResetAlarm}>Reset Alarm</button>
        </>
      )}
    </div>
  );
};

export default MiniAlarmClock;
