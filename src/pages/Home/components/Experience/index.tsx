import { Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { SectionTitle } from "../SectionTitle";
import { Timeline } from "../Timeline";


export const Experience: React.FC = () => {
    return (
        <Flex p="100px" w="100%" flexDirection="column" alignItems="center" as="section">
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