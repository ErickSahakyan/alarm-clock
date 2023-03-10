import { useEffect, useState } from "react";

export default function useAlarmClock() {
  const [alarmTime, setAlarmTime] = useState("");
  const [time, setTime] = useState(new Date().toLocaleDateString());
  const [alarmSound, setAlarmSound] = useState(null);
  const [alarmClockDate, setAlarmClockDate] = useState({
    selectedTime: [],
    currentTime: [],
    alarmClockName: [],
    selectedDays: [],
  });
  const [alarmClockName, setAlarmClockName] = useState("");

  const handleAlarmClockName = (event) => {
    setAlarmClockName(event.target.value);
  };

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
      selectedTime: [alarmTime],
      currentTime: [time],
      alarmClockName: [alarmClockName],
      selectedDays: [],
    });
  };

  const handleResetAlarm = () => {
    setAlarmTime("");
    if (alarmSound) {
      alarmSound.pause();
      alarmSound.currentTime = 0;
    }
  };
  return {
    alarmTime,
    handleAlarmTimeChange,
    alarmClockName,
    handleAlarmClockName,
    handleSetAlarm,
    alarmClockName,
    alarmClockDate,
    setAlarmClockDate,
  };
}
