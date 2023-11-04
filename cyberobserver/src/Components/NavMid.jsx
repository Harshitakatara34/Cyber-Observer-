import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./Navmid.css"

const NavMid = () => {
  return (
    <Box
      className="nav-mid-container"
      style={{
        height: '700px',
        zIndex: "1",
        marginTop: "0",
        margin: "0",
        padding: "0",
        position: "relative",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="https://wp-marketing-prod-content.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/03/15200734/Hero_Compressed.mp4" type="video/mp4" />
      </video>
      <div className="nav-mid-content" style={{ position: "absolute", top: "50%", left: "20%", transform: "translate(-50%, -50%)", color: "white" }}>
        <Heading className="nav-mid-heading">Close today's exposures, prevent tomorrow's attacks. See All Ways TM</Heading>
        <br />
        <p className="nav-mid-paragraph">
          XM Cyber is transforming the way organizations find and fix security
          exposures across the hybrid cloud. See how attackers leverage and combine
          misconfigurations, vulnerabilities, identity exposures, and more, across
          your AWS, Azure, GCP, and on-prem environments to compromise your critical
          assets. With XM Cyber, you can see all the ways attackers might go, and all
          the best ways to stop them, with a fraction of the effort.
        </p>
        <div className="nav-mid-buttons" style={{paddingBottom:"50px"}}>
          <button className="nav-mid-button">Book a Demo</button>
          <button className="nav-mid-button">Watch a Video</button>
        </div>
      </div>
    </Box>
  );
};

export default NavMid;
