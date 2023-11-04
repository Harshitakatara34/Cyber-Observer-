import React, { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
const ImageSlider = () => {
  const images = [
    "We were living in an imaginary feeling of security, but the reality of existing attack paths was shocking, and the findings were really impressive!",
    "A huge benefit for me right now is that there's no competition between IT security and IT operations anymore. IT operations uses XM Cyber proactive now. The people responsible for servers, for example, have set up some of their own scenarios and solve problems better than in the past. People see that their actions make their responsible area more secure. Things are much better now.",
    "We were living in an imaginary feeling of security, but the reality of existing attack paths was shocking, and the findings were really impressive!",
    // Add more image URLs here
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handlePrev = () => {
    const newIndex = currentImageIndex - 1 < 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  return (
    <>
<div style={{ position: "relative", width: "50%", height: "auto" ,margin:"auto" ,paddingBottom:"100px"}}>
    <div style={{margin:"auto",width:"100%",textAlign:"center"}}> 
    <Heading style={{fontSize:"40px",color:"darkblue"}}>Customer Service</Heading>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdXieiVzFJiuCDc8cq5rmT7-f4FbihBRDB9M5ntuGvwsRIbFm"/>
    </div>
    
   
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "20px",
          cursor: "pointer",
          marginTop:"90px",
        fontSize:"40px"
        }}
        onClick={handlePrev}
      >
        {"<"}
      </div>
      <p style={{marginTop:"90px",margin:"auto",textAlign:"center",width:"55%",lineHeight:"30px",fontSize:"20px",color:"grey"}}> {images[currentImageIndex]}</p>
    
     <h5 style={{margin:"auto", marginTop:"30px" , textAlign:"center",width:"55%",lineHeight:"30px",fontSize:"20px",color:"grey"}}>CISO</h5>
      <p style={{margin:"auto",textAlign:"center",width:"55%",lineHeight:"30px",fontSize:"20px",color:"grey"}}>Large European Bank</p>
   
      
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: "20px",
          cursor: "pointer",
          marginTop:"90px",
        fontSize:"40px"
        }}
        onClick={handleNext}
      >
        {">"}
      </div>
    </div>
    <Heading style={{margin:"auto", marginTop:"90px" , fontSize:"40px",color:"#000033",textAlign:"center",width:"100%",lineHeight:"30px"}}>Risk Exposure By the Number</Heading>
 <div style={{display:"flex",justifyContent:"space-around",height:"auto",width:"90%",paddingBottom:"100px",margin:"auto",marginTop:"50px"}}>
<div><b style={{fontSize:"100px",color:"aqua"}}>11 K</b>
<p style={{fontSize:"20px",color:"grey",width:"45%",justifyContent:"center",lineHeight:"20px"}}>The number of people who security exposures are discovered on average every month that attackers could exploit.</p>
</div>
<div><b style={{fontSize:"100px",color:"aqua"}}>71%</b>
<p style={{fontSize:"20px",color:"grey",width:"45%",justifyContent:"center",lineHeight:"20px"}}>of firms have exposures in their on-prem networks that put their critical assets in the cloud at risk. Once there, 92% of critical assets become vulnerable.</p>
</div>
<div><b style={{fontSize:"100px",color:"aqua"}}>75%</b>
<p style={{fontSize:"20px",color:"grey",width:"45%",justifyContent:"center",lineHeight:"20px"}}>of exposure remediation is wasted on dead ends that can't reach critical assets.</p>
</div>

 </div>
    </>
    
  );
};

export default ImageSlider;
