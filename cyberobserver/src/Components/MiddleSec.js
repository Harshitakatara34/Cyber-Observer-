import React from 'react'
import { border, Heading } from '@chakra-ui/react'
import capture2 from "../Image/Capture2.PNG"
import capture3 from "../Image/Capture3.PNG"
import capture4 from "../Image/Capture4.PNG"
const MiddleSec = () => {
  return (
    <>
 <div style={{margin:"auto",width:"100%",height:"auto",marginTop:"120px",backgroundColor:"#000033", zIndex: "100"}}>
    <div style={{margin:"auto",width:"60%",height:"auto",marginTop:"20px"}}>
    <Heading color={"white"} fontSize={"40px"} textAlign={"Center"}>Continuous exposure reduction
across on-prem, cloud, SaaS and hybrid</Heading>
    </div>

<div style={{margin:"auto",width:"60%",height:"auto",marginTop:"50px"}}>
<img src={capture2} alt="capture2" />
</div>
 <div style={{display:"flex",justifyContent:"space-between",height:"50px",width:"25%",marginTop:"60px",margin:"auto",paddingBottom:"100px"}}>
<button style={{backgroundColor:"yellow",color:"black",width:"170px",borderRadius:"20px",fontWeight:"bold",fontSize:"18px"}}>Book a Demo</button>
<button style={{ backgroundColor:"#000033",color:"yellow",width:"170px",borderRadius:"20px", border:"3px solid yellow",fontWeight:"bold",fontSize:"18px"}}>Learn More</button>
      </div>

    </div>
    <img src={capture3} width="100%"/>
    <img src={capture4} width="100%"/>
    <div style={{margin:"auto",marginTop:"100px",paddingBottom:"10px",width:"90%",marginLeft:"200px", zIndex: "100"}}>
    <video width="80%" height="500" controls loop muted margin="auto">
        <source src="https://wp-marketing-prod-content.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/03/15200902/XM-Cyber-x-Plymouth-Rock-Insurance-120S_V2.mp4" type="video/mp4"/>
        
    </video>
   
    </div>
  
    </>
   
  )
}

export default MiddleSec