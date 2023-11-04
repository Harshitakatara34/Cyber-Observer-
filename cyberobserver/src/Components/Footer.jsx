import { Box, Button, Checkbox, Flex, Grid, GridItem, Heading, HStack, Input, List, ListItem, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Image } from '@chakra-ui/react';

import { FcIphone } from "react-icons/fc";
import { FcBookmark } from "react-icons/fc";
import { FcSms } from "react-icons/fc";
import { FaTwitter, FaLinkedin, FaFacebookF, FaYoutube } from "react-icons/fa";
const Footer1 = () => {
  return (
    <Flex  width={"100%"} borderBottom="1px solid lightgrey" backgroundColor="#000033">
    <Box  width={"53vw"} margin={0} padding={0}>
      <Grid  gridTemplateColumns={"repeat(7,1fr)"} width="45vw"  gap={"4vw"}>
            <GridItem align={"start"}>
            <VStack align={"start"} >
            <Image style={{ height: "50px", width: "250px" }} src="https://wp-marketing-prod-content.s3.eu-west-1.amazonaws.com/wp-content/uploads/2023/06/26132404/XM-Logo-light-no-border.svg" alt="logo" />
            </VStack>
            </GridItem>
            
            <GridItem align={"start"}>
            <VStack align={"start"} >
                <Heading color={"white"} fontWeight={"semibold"} size={"md"}>
                    Platform
                </Heading>
               
            </VStack>
            </GridItem>
            <GridItem align={"start"}>
            <VStack align={"start"} >
                <Heading color={"white"} fontWeight={"semibold"} size={"md"}>
                    Resources
                </Heading>
                <List spacing={3} pt="3vh">
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}} color={"white"}>Blog</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}} color={"white"}>Webinars</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}} color={"white"}>Case Studies</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}} color={"white"}> Videos</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}} color={"white"}>Glossary</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}} color={"white"}>e books&whitepappers</ListItem>
                </List>
            </VStack>
            </GridItem>
            <GridItem align={"start"}>
            <VStack align={"start"} >
                <Heading color={"white"} fontWeight={"semibold"} size={"md"} textDecoration={"justify"} style={{ whiteSpace: 'nowrap' }}>
                  Use Cases
                </Heading>
               
            </VStack>
            </GridItem>
            <GridItem align={"start"}>
            <VStack align={"start"} >
                <Heading color={"white"} fontWeight={"semibold"} size={"md"} textDecoration={"justify"} style={{ whiteSpace: 'nowrap' }}>
                 Company
                </Heading>
                <List spacing={3} pt="3vh">
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}} color={"white"}>Leadership</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}} color={"white"}>Careers</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}} color={"white"}>NewsRoom</ListItem>
                   
                </List>
            </VStack>
            </GridItem>
            <GridItem align={"start"}>
            <VStack align={"start"} >
                <Heading color={"white"} fontWeight={"semibold"} size={"md"} textDecoration={"justify"} style={{ whiteSpace: 'nowrap' }}>
                 Partners
                </Heading>
                <List spacing={3} pt="3vh">
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}} color={"white"}>Partners</ListItem>
                    <ListItem cursor={"pointer"} _hover={{textDecoration:"underline"}} color={"white"}>Technology Partners</ListItem>
                    
                </List>
            </VStack>
            </GridItem>
            <GridItem align={"start"}>
            <VStack align={"start"} >
                <Heading color={"white"} fontWeight={"semibold"} size={"md"} textDecoration={"justify"} style={{ whiteSpace: 'nowrap' }}>
                 Support
                </Heading>
                
            </VStack>
            </GridItem>
        </Grid>
        <Heading color={"white"} fontWeight={"semibold"} size={"md"} textDecoration={"justify"} style={{ whiteSpace: 'nowrap' }}>Follow Us</Heading>
        <GridItem>
            <HStack spacing={25} paddingBottom={20}>
              <Box bg="white" borderRadius="50%" p={5}>
                <FaTwitter size={30} color="##000033" />
              </Box>
              <Box bg="white" borderRadius="50%" p={5}>
                <FaLinkedin size={30} color="##000033" />
              </Box>
              <Box bg="white" borderRadius="50%" p={5}>
                <FaFacebookF size={30} color="##000033" />
              </Box>
              <Box bg="white" borderRadius="50%" p={5}>
                <FaYoutube size={30} color="##000033" />
              </Box>
            </HStack>
          </GridItem>
      
      
        </Box>
        

       
    </Flex>
  )
}

export default Footer1