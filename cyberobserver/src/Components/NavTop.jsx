import React, { useState } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavTop = () => {
  const [menu, setMenu] = useState(null);

  const handleHover = (id) => {
    setMenu(id);
  };

  const handleLeave = () => {
    setMenu(null);
  };

  return (
    <Box
      backgroundColor="#000033"
      color={"#FBFBFB"}
      style={{
    margin: 0,
    height: "100px",
    padding: 0,
    position: "sticky",
    top: 0, // Specify the top position for the sticky element
    zIndex: 100,
  }}
    >
      <Flex justifyContent="space-around" width="100%" marginTop="15px">
        <Image
          style={{ height: "60px", width: "300px" }}
          src="https://wp-marketing-prod-content.s3.eu-west-1.amazonaws.com/wp-content/uploads/2023/06/26132404/XM-Logo-light-no-border.svg"
        />
        <Box
          _hover={{
            textDecoration: "underline",
            textDecorationColor: "yellow",
          }}
        >
          <p color="#8D8D8D" style={{ fontSize: "18px" }}>
            Platform
          </p>
        </Box>
        <Box
          onMouseEnter={() => handleHover("useCases")}
          onMouseLeave={handleLeave}
          style={{ position: "relative" }}
        >
          <p color="#8D8D8D" style={{ fontSize: "18px" }}>
            Use Cases
          </p>
          {menu === "useCases" && (
            <Box
              bg="white"
              position="absolute"
              top="100%"
              left="50%"
              transform="translateX(-50%)"
              width="160px"
              border="1px solid #e2e8f0"
              borderRadius="5px"
              padding="5px 0"
              zIndex="1"
            >
             <Link to="use-case"><p style={{ color: "#000", padding: "5px" }}>
                Risk Exposure Reduction
              </p></Link> 
              <p style={{ color: "#000", padding: "5px" }}>Cloud Security</p>
              <p style={{ color: "#000", padding: "5px" }}>
                Active Directory Security
              </p>
              <p style={{ color: "#000", padding: "5px" }}>
                Vulnerability Prioritization
              </p>

              <p style={{ color: "#000", padding: "5px" }}>
                Supply Chain and Third Party Risk Management
              </p>
              <p style={{ color: "#000", padding: "5px" }}>
                Ransomware Readiness
              </p>
              <p style={{ color: "#000", padding: "5px" }}>
                Cyber Risk Reporting
              </p>
              <p style={{ color: "#000", padding: "5px" }}>
                Continuous Controls Monitoring
              </p>
              <p style={{ color: "#000", padding: "5px" }}>Breach and Attack</p>
            </Box>
          )}
        </Box>
        <Box
          onMouseEnter={() => handleHover("company")}
          onMouseLeave={handleLeave}
          style={{ position: "relative" }}
        >
          <p color="#8D8D8D" style={{ fontSize: "18px" }}>
            Company
          </p>
          {menu === "company" && (
            <Box
              bg="white"
              position="absolute"
              top="100%"
              left="50%"
              transform="translateX(-50%)"
              width="150px"
              border="1px solid #e2e8f0"
              borderRadius="5px"
              padding="5px 0"
              zIndex="1"
            >
              <p style={{ color: "#000", padding: "5px" }}>Leadership</p>
              <p style={{ color: "#000", padding: "5px" }}>NewsRoom</p>
              <p style={{ color: "#000", padding: "5px" }}>Carrers</p>
            </Box>
          )}
        </Box>
        <Box
          onMouseEnter={() => handleHover("partners")}
          onMouseLeave={handleLeave}
          style={{ position: "relative" }}
        >
          <p style={{ fontSize: "18px" }}>Partners</p>
          {menu === "partners" && (
            <Box
              bg="white"
              position="absolute"
              top="100%"
              left="50%"
              transform="translateX(-50%)"
              width="150px"
              border="1px solid #e2e8f0"
              borderRadius="5px"
              padding="5px 0"
              zIndex="1"
            >
              <p style={{ color: "#000", padding: "5px" }}>Channel Partners</p>
              <p style={{ color: "#000", padding: "5px" }}>Technology Partners</p>
              <p style={{ color: "#000", padding: "5px" }}>MSSP partners</p>
            </Box>
          )}
        </Box>
        <p style={{ fontSize: "18px" }}>DE | Support</p>
        <Box
          _hover={{
            textDecoration: "underline",
            textDecorationColor: "yellow",
          }}
        >
        <Link to="book-a-demo"> <p
            style={{
              backgroundColor: "yellow",
              color: "black",
              width: "150px",
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "18px",
              textAlign: "center",
            }}
          >
            Book a Demo
          </p></Link>
         
        </Box>
      </Flex>
    </Box>
  );
};

export default NavTop;
