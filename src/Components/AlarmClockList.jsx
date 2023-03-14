import { Box, Card, CardContent, Icon, Typography } from "@mui/material";
import React from "react";
import { GiUbisoftSun } from "react-icons/gi";

const AlarmClockList = ({
  handleBoolVal,
  handleDeleteAlarmClock,
  alarmClockDate,
  bool,
  handleShow,
}) => {
  return (
    <Card>
      <Box>
        {alarmClockDate.map((val, i) => (
          <CardContent>
            <Icon>
              <GiUbisoftSun
                style={{
                  color: "yellow",
                  fontSize: "48px",
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
              />
            </Icon>
            <Typography>{val.alarmClockName}</Typography>
          </CardContent>
        ))}
      </Box>
    </Card>
  );
};

export default AlarmClockList;
