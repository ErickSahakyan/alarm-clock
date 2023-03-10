import { Button } from "@mui/material";
import React, { useState } from "react";

const WeekdayButton = () => {
  const [valP, setValP] = useState(false);
  const [valVT, setValVT] = useState(false);
  const [valS, setValS] = useState(false);
  const [valCH, setValCH] = useState(false);
  const [valPY, setValPY] = useState(false);
  const [valSU, setValSU] = useState(false);
  const [valV, setValV] = useState(false);

  const handleValP = () => {
    setValP(!valP);
  };

  const handlevalVT = () => {
    setValVT(!valVT);
  };

  const handlevalS = () => {
    setValS(!valS);
  };

  const handlevalCH = () => {
    setValCH(!valCH);
  };

  const handlevalPY = () => {
    setValPY(!valPY);
  };

  const handlevalSU = () => {
    setValSU(!valSU);
  };

  const handlevalV = () => {
    setValV(!valV);
  };

  return (
    <div style={{ display: "flex", gap: "25px", marginTop: "20px" }}>
      <Button
        style={{
          color: "white",
          fontSize: "20px",
          minWidth: "25px",
          height: "40px",
          backgroundColor: valV ? "blue" : "gray",
          borderRadius: "100px 100px 100px",
        }}
        onClick={handlevalV}
      >
        ВС
      </Button>
      <Button
        style={{
          color: "white",
          fontSize: "20px",
          minWidth: "25px",
          height: "40px",
          backgroundColor: valP ? "blue" : "gray",
          borderRadius: "100px 100px 100px",
        }}
        onClick={handleValP}
      >
        ПН
      </Button>
      <Button
        style={{
          color: "white",
          fontSize: "20px",
          minWidth: "25px",
          height: "40px",
          backgroundColor: valVT ? "blue" : "gray",
          borderRadius: "100px 100px 100px",
        }}
        onClick={handlevalVT}
      >
        ВТ
      </Button>
      <Button
        style={{
          color: "white",
          fontSize: "20px",
          minWidth: "25px",
          height: "40px",
          backgroundColor: valS ? "blue" : "gray",
          borderRadius: "100px 100px 100px",
        }}
        onClick={handlevalS}
      >
        СР
      </Button>
      <Button
        style={{
          color: "white",
          fontSize: "20px",
          minWidth: "25px",
          height: "40px",
          backgroundColor: valCH ? "blue" : "gray",
          borderRadius: "100px 100px 100px",
        }}
        onClick={handlevalCH}
      >
        ЧТ
      </Button>
      <Button
        style={{
          color: "white",
          fontSize: "20px",
          minWidth: "25px",
          height: "40px",
          backgroundColor: valPY ? "blue" : "gray",
          borderRadius: "100px 100px 100px",
        }}
        onClick={handlevalPY}
      >
        ПТ
      </Button>
      <Button
        style={{
          color: "white",
          fontSize: "20px",
          minWidth: "25px",
          height: "40px",
          backgroundColor: valSU ? "blue" : "gray",
          borderRadius: "100px 100px 100px",
        }}
        onClick={handlevalSU}
      >
        СБ
      </Button>
    </div>
  );
};

export default WeekdayButton;
