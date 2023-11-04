import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./Navmid.css"; // Import the CSS file for additional styles

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
      }}
    >
      <div className="nav-mid-content">
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
        <div className="nav-mid-buttons">
          <button className="nav-mid-button">Book a Demo</button>
          <button className="nav-mid-button">Watch a Video</button>
        </div>
      </div>
      <motion.div className="bubble-container">
        <motion.div
          className="bubble1"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="bubble2"
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="bubble3"
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>
    </Box>
  );
};

export default NavMid;
