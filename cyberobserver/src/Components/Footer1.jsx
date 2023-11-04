import { Box } from '@chakra-ui/react'
import React from 'react'

const Footer2 = () => {
  return (
    <Box width={"100%"} height={"auto"} display={"flex"} justifyContent={"space-around"}>
<Box> <p>© 2023 XM Cyber All Rights Reserved</p></Box>
<Box display={"flex"} justifyContent={"space-between"} width={"50%"}>
<p>Privacy Policy</p>
<p>Terms of Use </p>
<p>Cookie Policy</p>
<p>Security , Compliance and Privacy</p>
</Box>
    </Box>
  )
}

export default Footer2