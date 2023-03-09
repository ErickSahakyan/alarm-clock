import { useState } from "react";

export const useAlarmClock = () => {
  const [alarmDate, setAlarmDate] = useState([]);

  return { alarmDate, setAlarmDate };
};
