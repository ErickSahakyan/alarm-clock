import { Button } from "@mui/material";
import React, { useRef, useState } from "react";

const WeekdayButton = ({
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
}) => {
  
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
