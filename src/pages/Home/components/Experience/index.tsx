import { Spacer, Flex } from "@chakra-ui/react";
import React from "react";
import { SectionTitle } from "../SectionTitle";
import { Timeline } from "../Timeline";


export const Experience: React.FC = () => {
    return (
        <Flex
            p={["10px","20px", "50px", "100px"]}
            w="100%"
            flexDirection="column"
            alignItems="center"
        >
            <SectionTitle
                // @ts-ignore
                id="experience"
                text="Experience"
            />
            <Spacer mt="128px" />
            <Timeline />
        </Flex>
    )
}
