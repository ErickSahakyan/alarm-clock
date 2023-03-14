import { Button } from "@mui/material";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import useAlarmClock from "../Hooks/useAlarmClock";
import AddAlarmClock from "./AddAlarmClock";
import AlarmClockList from "./AlarmClockList";
import Navbar from "./Navbar";

const AlarmClock = () => {
	const [val, setVal] = useState(true);
	const [bool, setBool] = useState(true);

	const handleShow = () => {
		setVal(!val);
	};

	const handleBoolVal = () => {
		setBool(!bool);
	};

	const {
		alarmTime,
		handleAlarmTimeChange,
		alarmClockName,
		handleAlarmClockName,
		alarmClockDate,
		handleSetAlarm,
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
		handleDeleteAlarmClock,
	} = useAlarmClock();


	return (
		<div>
			<Navbar handleShow={handleShow} />
			{val ? (
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						marginTop: "50px",
					}}
				>
					{alarmClockDate?.length !== 0 ? (
						<AlarmClockList
							handleBoolVal={handleBoolVal}
							handleDeleteAlarmClock={handleDeleteAlarmClock}
							alarmClockDate={alarmClockDate}
							bool={bool}
							handleShow={handleShow}
						/>
					) : (
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
					)}
				</div>
			) : (
				<AddAlarmClock
					handleShow={handleShow}
					handleAlarmTimeChange={handleAlarmTimeChange}
					handleAlarmClockName={handleAlarmClockName}
					alarmClockName={alarmClockName}
					handleSetAlarm={handleSetAlarm}
					handleValP={handleValP}
					handlevalVT={handlevalVT}
					handlevalS={handlevalS}
					handlevalCH={handlevalCH}
					handlevalPY={handlevalPY}
					handlevalSU={handlevalSU}
					handlevalV={handlevalV}
					valP={valP}
					valVT={valVT}
					valS={valS}
					valCH={valCH}
					valPY={valPY}
					valSU={valSU}
					valV={valV}
					alarmTime={alarmTime}
				/>
			)}
		</div>
	);
};

export default AlarmClock;
