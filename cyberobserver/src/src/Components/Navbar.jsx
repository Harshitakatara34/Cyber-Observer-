import React from "react";
import { Box } from "@chakra-ui/react";
import Capture from "../Image/Capture2.PNG";
import { useState } from "react";
import { useEffect } from "react";
import DashBoard from "./DashBoard";
const Navbar = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "40%",
          }}
        >
          <img src={Capture} style={{ height: "60px" }} />
          <h3 style={{ color: "white" }}>
            Cyber Defence Status{" "}
            <span>
              {dateTime.toDateString()} {dateTime.toLocaleTimeString()}
            </span>
          </h3>
        </div>
       
      </div>
      <div
        style={{ width: "100%", height: "auto", backgroundColor: "black" }}
      ></div>
    </>
  );
};

export default Navbar;
