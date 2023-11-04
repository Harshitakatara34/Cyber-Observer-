import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import  Capture  from '../Image/Capture.PNG'
const Middle = () => {
  return (
    <div  class="max-w-[760px] mx-auto pt-[100px] flex flex-col snap-center" style={{margin:"auto",width:"55%",height:"auto",marginTop:"120px"}}>
        <Heading fontSize={"40px"} textAlign={"Center"}>See your true risk when exposures and security controls come together</Heading>
        <Box fontSize={"18px"} lineHeight={"30px"} textAlign={"Center"}>Uncover security control gaps and exposures that are exploitable in your environment to understand how attackers use them to move through your hybrid and cloud networks. With XM Cyber, you can see the path attackers take, and where your critical assets are at risk. Then cut them off at choke points to prioritize what's most important, for accurate and cost-effective remediation.</Box>
 <div style={{marginLeft:"100px",marginTop:"70px",paddingBottom:"10px"}}>
 <img margin ="auto"       src={Capture} alt=""/>
 </div>
 
    </div>
  )
}

export default Middle