import React from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';

const NavBottom = () => {
  return (
    <Box
      style={{
        height: 'auto',
        zIndex: '100',
        backgroundColor: '#000033',
        marginTop: '0',
        margin: '0',
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <div style={{ padding: 'auto' }}>
      <div style={{width:"60%",margin:"auto",paddingTop:"350px"}}>
      <h1 style={{ color: '#ffffff',fontSize:"35px" }}>The new way to address hybrid cloud exposures</h1>
        <p style={{ color: '#ffffff',fontSize:"20px"}}>
          Context is everything when it comes to reducing risk. Instead of looking at endless lists of issues, XM Cyber
          combines them together into an attack graph, to proactively uncover hidden attack paths and security control gaps
          across your cloud and on-prem networks. Now you can efficiently pinpoint and address the issues that actually put
          your organization at risk and cut off attack paths at key junctures for laser-focused remediation to proactively
          reduce your attack surface.
        </p>
      </div>
      
      <div style={{display:"flex",justifyContent:"space-around",marginTop:"80px"}}>
      <div style={{width:"30%"}}>
      <img style={{height:"250px",width:"250px"}} src="https://wp-marketing-prod-content.s3.eu-west-1.amazonaws.com/wp-content/uploads/2023/02/15191257/i1.webp"/>
     <Heading style={{color:"white"}}>Answer Critical Questions</Heading>
     <Box style={{color:"white",fontSize:"20px"}}>Gain complete visibility of what’s putting the business at risk and the insights needed to take precise and decisive preventative actions.</Box>
      </div>
       
      
      <div style={{width:"30%"}}>
      <img style={{height:"250px",width:"250px"}} src="https://wp-marketing-prod-content.s3.eu-west-1.amazonaws.com/wp-content/uploads/2023/02/15191257/i2.svg"/>
     <Heading style={{color:"white"}}>Eliminate Game-Over Issues</Heading>
     <Box style={{color:"white",fontSize:"20px"}}>Using advanced attack graph analysis, pinpoint the exposures that need to be remediated to proactively keep the business secure.</Box>
      </div>
      <div style={{width:"30%"}}>
      <img style={{height:"250px",width:"250px"}} src="https://wp-marketing-prod-content.s3.eu-west-1.amazonaws.com/wp-content/uploads/2023/02/15191257/i3.webp"/>
      <Heading style={{color:"white"}}>Continuously Reduce Risk</Heading>
      <Box style={{color:"white",fontSize:"20px"}}>24/7 monitoring of your environment for new exposures that emerge as a result of the dynamic environment, with accurate remediation of the exposures that matter.</Box>
      </div>
        
      </div>
      <div style={{paddingBottom:"150px",marginTop:"100px"}}>
      <Button backgroundColor={"yellow"} color={'#000033'} height="30px" width={"130px"} borderRadius="10px" fontSize={"20px"}>Learn More</Button>
      </div>
      
      </div>
    </Box>
  );
};

export default NavBottom;
