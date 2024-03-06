import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import React from "react";
import { LogoIconSVG } from "../svg/LogoIconSVG";
import "./landing.css";



export const Landing: React.FC = () => {
    return(
        <Flex
            as="section"
            flexDirection="row"
            alignItems="center"
            bg="neutral.800"
            w="100%"
            h="100vh"
            px="100px"
            justifyContent="space-between"
            id="home"
        >
            <Flex flexDirection="column" color="neutral.100">
                <Text pl="5px" fontSize={["45px"]} fontWeight="700">Hi, I'm</Text>
                <Heading
                    as="h1"
                    fontSize={["120px"]}
                    color="brand.500"
                    mb="-30px"
                    mt="50px"
                >
                    LUCIANO FEDER
                </Heading>
                <Text pl="5px" fontSize={["40px"]}>Fullstack Developer</Text>
            </Flex>
            <Flex flexGrow={1} justifyContent="center">
                <Box w="300px" h="300px" p="10px">
                    <LogoIconSVG className="logo-icon"/>
                </Box>
            </Flex>
        </Flex>
    )
}