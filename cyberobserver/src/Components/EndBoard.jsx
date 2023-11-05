import { Center } from "@chakra-ui/react";
import React from "react";
import "./EndBoard.css";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  CheckboxGroup,
  Divider,
  HStack,
  Heading,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
const EndBoard = () => {
  return (
    <div>
      <Stack>
        <HStack marginLeft={"5px"} height={"1vh"} gap={5} width={"100%"}>
          <Text
            fontSize={"sm"}
            color={"gray"}
            _hover={{
              color: "white",
              textDecoration: "underline",
              fontWeight: "semibold",
            }}
          >
            CONTROLS
          </Text>
          <Divider orientation="vertical" />
          <Text
            fontSize={"sm"}
            color={"gray"}
            _hover={{
              color: "white",
              textDecoration: "underline",
              fontWeight: "semibold",
            }}
          >
            COVERAGE
          </Text>
          <Divider orientation="vertical" />
          <Text
            fontSize={"sm"}
            color={"gray"}
            _hover={{
              color: "white",
              textDecoration: "underline",
              fontWeight: "semibold",
            }}
          >
            TOOLS
          </Text>
          <Divider orientation="vertical" />
          <Text
            fontSize={"sm"}
            color={"gray"}
            _hover={{
              color: "white",
              textDecoration: "underline",
              fontWeight: "semibold",
            }}
          >
            TRENDS
          </Text>
        </HStack>
        <VStack mt={"2vh"}>
          <Text fontSize={"sm"} color={"gray"}>
            TOOLS SCORE
          </Text>
          <Box
            height={"8vh"}
            width={"4vw"}
            border={"5px dotted yellow"}
            borderRadius={"50%"}
          >
            <Text
              fontWeight={"semibold"}
              color={"white"}
              textAlign={"center"}
              fontSize={"lg"}
              pt={"1.5vh"}
              margin={"auto"}
            >
              64
            </Text>
          </Box>
        </VStack>
        <VStack mt={"5vh"}>
          <HStack>
            <Text fontSize={"sm"} color={"gray"}>
              TOOLS SCORE
            </Text>
            <RadioGroup>
              <Stack gap={4} direction={"row"} paddingLeft={"4vw"}>
                <Radio value="1" size="md" colorScheme="red">
                  <Text fontSize={"sm"} color={"white"}>
                    Slow
                  </Text>
                </Radio>
                <Radio value="2" size="md" colorScheme="green">
                  <Text fontSize={"sm"} color={"white"}>
                    Regular
                  </Text>
                </Radio>
                <Radio value="3" size="md" colorScheme="orange">
                  <Text fontSize={"sm"} color={"white"}>
                    Fast
                  </Text>
                </Radio>
              </Stack>
            </RadioGroup>
          </HStack>
          <VStack></VStack>
        </VStack>
      </Stack>

      <div
        className="image-container"
        style={{ width: "90%", height: "250px" }}
      >
        <div className="image-wrapper">
        <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>

          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
           <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              ></div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "50px",
                paddingRight: "20px",
                backgroundColor: "#121115",
              }}
            >
            <heading style={{color:"black"}}>Qualyze</heading>
              <div
                style={{
                  backgroundColor: "white",
                  height: "80%",
                  width: "50px",
                }}
              ></div>
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px dotted  yellow",
                  textAlign: "Center",
                  marginTop: "10px",
                  borderSpacing: "20px",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                <heading style={{color:"white"}}>60</heading>
              </div>
            </div>
            <div
              style={{
                width: "106%",
                height: "40px",
                backgroundColor: "#010001",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <CloudOutlinedIcon style={{ color: "white" }} />
                <ClearOutlinedIcon
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </div>
              <div style={{ marginTop: "10px", paddingRight: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    margin: "auto",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  60
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndBoard;
