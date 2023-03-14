
import React from "react";

import AlarmClockCard from "./AlarmClockCard";

const AlarmClockList = ({
	handleBoolVal,
	handleDeleteAlarmClock,
	alarmClockDate,
	bool,
	handleShow,
}) => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
			{alarmClockDate.map((val, i) => (
				<AlarmClockCard val={val} i={i} bool={bool} handleDeleteAlarmClock={handleDeleteAlarmClock} handleShow={handleShow} handleBoolVal={handleBoolVal} />
			))}
		</div>
	);
};

export default AlarmClockList;
