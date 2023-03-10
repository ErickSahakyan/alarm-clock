import { useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import sound from "../sound/sound.mp3";

export default function useAlarmClock() {
	const [alarmTime, setAlarmTime] = useState("");
	const [time, setTime] = useState(new Date().toLocaleDateString());

	const [alarmClockName, setAlarmClockName] = useState("");

	const [alarmClockDate, setAlarmClockDate] = useState([]);

	const [alarmOn, setAlarmOn] = useState(true);

	const handleAlarmClockName = (event) => {
		setAlarmClockName(event.target.value);
	};

	const handleAlarmTimeChange = (event) => {
		setAlarmTime(event.target.value);
	};

	const handleDeleteAlarmClock = () => {
		setAlarmClockDate([]);
	};

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	const [play, { stop }] = useSound(sound);

	const handleSetAlarm = () => {
		setAlarmClockDate([
			{
				selectedTime: [alarmTime],
				currentTime: [time],
				alarmClockName: [alarmClockName],
				selectedDays: [selectedDaysRef.current]
			},
		]);
	};

	const handleAlarmOn = () => {
		if (alarmTime) {
			setAlarmOn(true);
		}
	};

	const handleAlarmOff = () => {
		setAlarmOn(false);
		stop();
	};

	useEffect(() => {
		if (alarmOn) {
			const [hours, minutes] = alarmTime.split(":");
			const alarmDate = new Date();
			alarmDate.setHours(parseInt(hours));
			alarmDate.setMinutes(parseInt(minutes));
			alarmDate.setSeconds(0);
			const timeoutID = setTimeout(() => {
				play();
			}, alarmDate - new Date());
			return () => clearTimeout(timeoutID);
		}
	}, [alarmOn, alarmTime]);

	//buttons functions
	const [valP, setValP] = useState(false);
	const [valVT, setValVT] = useState(false);
	const [valS, setValS] = useState(false);
	const [valCH, setValCH] = useState(false);
	const [valPY, setValPY] = useState(false);
	const [valSU, setValSU] = useState(false);
	const [valV, setValV] = useState(false);

	const selectedDaysRef = useRef([]);

	const handleValP = () => {
		setValP(!valP);
		selectedDaysRef.current.push("????");
	};

	const handlevalVT = () => {
		setValVT(!valVT);
		selectedDaysRef.current.push("????");
	};

	const handlevalS = () => {
		setValS(!valS);
		selectedDaysRef.current.push("????");
	};

	const handlevalCH = () => {
		setValCH(!valCH);
		selectedDaysRef.current.push("????");
	};

	const handlevalPY = () => {
		setValPY(!valPY);
		selectedDaysRef.current.push("????");
	};

	const handlevalSU = () => {
		setValSU(!valSU);
		selectedDaysRef.current.push("????");
	};

	const handlevalV = () => {
		setValV(!valV);
		selectedDaysRef.current.push("????");
	};

	return {
		alarmTime,
		handleAlarmTimeChange,
		alarmClockName,
		handleAlarmClockName,
		handleSetAlarm,
		alarmClockDate,
		handleValP,
		handlevalVT,
		handlevalS,
		handlevalCH,
		handlevalPY,
		handlevalSU,
		handlevalV,
		valP,
		valVT,
		valS,
		valCH,
		valPY,
		valSU,
		valV,
		handleAlarmOn,
		alarmOn,
		handleAlarmOff,
		handleDeleteAlarmClock,
	};
}
