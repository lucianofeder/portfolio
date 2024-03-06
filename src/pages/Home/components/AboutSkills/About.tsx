import React from "react";

import { Flex, Text } from "@chakra-ui/react";
import { SectionTitle } from "../SectionTitle";


export const About: React.FC = () => {
    return (
        <Flex
            as="section"
            flexDirection="column"
            alignItems="center"
        >
            <SectionTitle
                // @ts-ignore
                id="about"
                text="About"
            />
            <Flex
                flexDirection="column"
                maxW="1024px"
                bg="neutral.800"
                borderRadius="16px"
                p="32px"
            >
                <Text color="neutral.100">I worked on solutions that involve refactoring and maintenance of legacy systems, largely using Python, Fastapi, Flask, Django, Typescript, React. I often work with microservices architecture integrated with multiple APIs in the Back-End and auxiliary technologies such as: PostgresSQL, DynamoDB, MongoDB, AWS Lambda, AWS S3 and SQS. Always using different Design Patterns depending on the scenario. Involved in many automation cases that helped the flow of companies in which I was present.</Text>
                <Text color="neutral.100" mt="16px">Super excited and eager to learn, I love getting involved with projects that challenge me and give me the freedom to bring up technical points to be discussed. Always looking for continuous improvement with good communication and critical thinking.</Text>
            </Flex>
        </Flex>
    )
}