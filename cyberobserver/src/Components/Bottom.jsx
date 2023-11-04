import React from 'react';
import { Box, Heading, Textarea } from '@chakra-ui/react';

const Bottom = () => {
  return (
    <Box
      backgroundColor="#9CDCE2"
      color={'#000033'}
      style={{ margin: 0, padding: 0 }}  
    >
      <div style={{ margin: "auto", height: "auto" }}>
        <Heading fontSize={"40px"} textAlign={"Center"}>Request a Demo</Heading>
      </div>
      <form style={{ margin: "auto", marginTop: "50px", width: "40%", padding: "20px" }}>
        <input style={{ height: "40px", width: "40%", borderRadius: "5px", marginBottom: "20px" }} type="text" placeholder="First Name*" />
        <input style={{ height: "40px", width: "40%", borderRadius: "5px", marginLeft: "20px" }} type="text" placeholder="Last Name*" />
        <br />
        <br />
        <input style={{ height: "40px", width: "30%", borderRadius: "5px", marginBottom: "20px" }} type="text" placeholder='India' />
        <input style={{ height: "40px", width: "50%", borderRadius: "5px", marginLeft: "20px" }} type="number" placeholder="+91" />
        <br />
        <br />
        <input style={{ height: "40px", width: "85%", borderRadius: "5px", marginBottom: "20px" }} type="email" placeholder="Business email*" />
        <br />
        <br />
        <Textarea style={{ height: "180px", width: "85%", borderRadius: "5px", marginBottom: "20px" }} placeholder='How did you hear about us' />
        <br />
        <label style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
          <input type="checkbox" style={{ marginRight: "10px" }} />
          By signing up you are agreeing to receive occasional marketing, product and event updates from XM Cyber. You can unsubscribe at any time.
          By submitting the form, I acknowledge that I have read the Privacy Policy.*
        </label>
        <br />
        <Box paddingBottom={"80px"}>
        <button style={{ backgroundColor: "yellow", color: "#000033", width: "85%", borderRadius: "5px", height: "40px", fontWeight: "bold", fontSize: "18px"}}>Submit</button>
        </Box>
      
      </form>
    </Box>
  );
};

export default Bottom;