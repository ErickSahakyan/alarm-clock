import React from 'react'
import { Box, Button, Card, CardContent, FormControlLabel, FormGroup, Icon, Switch, Typography } from "@mui/material";
import { AiFillDelete } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { GiUbisoftSun } from "react-icons/gi";

const AlarmClockCard = ({ val, i, bool, handleDeleteAlarmClock, handleShow, handleBoolVal, }) => {
	return (
		< >
			<p style={{ color: "white" }}>Каждые: {val.selectedDays + ", "}</p>
			<div
				style={{
					backgroundColor: "#474747",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
					}}
				>
					<div
						style={{
							display: "flex",
							justifyContent: "flex-start",
							alignItems: "center",
							opacity: bool ? "1" : "0.1",
						}}
					>
						<GiUbisoftSun
							style={{
								color: "yellow",
								fontSize: "48px",
								marginLeft: "5px",
								marginRight: "5px",
							}}
						/>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "flex-start",
							gap: "30px",
						}}
					>
						<div style={{ display: "flex", flexDirection: "column" }}>
							<p
								key={i}
								style={{
									color: "white",
									fontSize: "12px",
									marginBottom: "-15px",
									opacity: bool ? "1" : "0.1",
								}}
							>
								{val.alarmClockName}
							</p>
							<p
								key={i}
								style={{
									color: "white",
									fontSize: "22px",
									opacity: bool ? "1" : "0.1",
								}}
							>
								{val.selectedTime}
							</p>
						</div>
						<FormGroup>
							<FormControlLabel
								onClick={handleBoolVal}
								control={<Switch defaultChecked />}
							/>
						</FormGroup>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "flex-end",
							backgroundColor: "blue",
						}}
					>
						<Button
							onClick={handleShow}
							sx={{
								width: "5px",
								outline: "none",
								border: "none",
							}}
						>
							<FaPen style={{ color: "white", fontSize: "22px" }} />
						</Button>
						<Button
							onClick={handleDeleteAlarmClock}
							sx={{
								width: "5px",
								outline: "none",
								border: "none",
							}}
						>
							<AiFillDelete style={{ color: "white", fontSize: "22px" }} />
						</Button>
					</div>
				</div>
			</div>
		</>
	)
}

export default AlarmClockCard