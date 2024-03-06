import { Grid, GridItem, Text, Flex, Heading, Box, Spacer } from "@chakra-ui/react";
import React from "react";


interface Activity {
    position: string
    startedAt: string
    endedAt?: string
    description: string
    skills: string[]
}

export interface ExperienceDTO {
    companyName: string
    companyUrl: string
    startedAt: string
    endedAt?: string
    activities: Activity[]
}

interface Props {
    experience: ExperienceDTO
    invert?: boolean
}

const DateElement: React.FC<Props> = ({ experience, invert=false }) => {
    return (
        <Text
            color="neutral.200"
            fontWeight="700"
            w="100%"
            transform={"translateY(-50%)"}
            pl={invert ? '0px' : '15px'}
            pr={invert ? '15px' : '0px'}
            textAlign={invert ? "end" : "start"}
            display="inline-block"
        >
            {experience.endedAt ?? "Present"}
        </Text>
    )
}

const DescriptionElement: React.FC<Props> = ({ experience, invert=false }) => {
    return (
        <>
            <Flex>
                <Heading
                    as="a"
                    color="neutral.200"
                    fontWeight="400"
                    fontSize="x-large"
                    textAlign={invert ? "start" : "end"}
                    display="inline-block"
                    transform={"translateY(-50%)"}
                    pr={invert ? '0px' : '15px'}
                    pl={invert ? '15px' : '0px'}
                    w="100%"
                    href={experience.companyUrl}
                >
                    {experience.companyName}
                </Heading>
            </Flex>
            {experience.activities.map((activity, i) => (
                <Flex
                    key={`actv-${i}`}
                    flexDirection="column"
                    bg="neutral.700"
                    m="20px"
                    mt="0px"
                    padding="16px"
                    borderRadius="16px"
                >
                    <Heading
                        as="h4"
                        color="brand.300"
                        mb="0px"
                    >
                        {activity.position}
                    </Heading>
                    <Text
                        pl="16px"
                        lineHeight="16px"
                        mb="16px"
                        color="neutral.100"
                        fontWeight="300"
                    >
                        {activity.startedAt} - {activity.endedAt ?? 'Present'}
                    </Text>
                    <Text color="neutral.100" whiteSpace="pre-line">
                        {activity.description}
                    </Text>
                </Flex>
            ))}
            <Spacer mb="100px"/>
        </>
    )
}


export const Row: React.FC<Props> = ({ experience, invert=false }) => {
    return (
        <Grid gridTemplateColumns={'1fr 1px 1fr'} w="1024px">
            <GridItem>
                {invert ? <DateElement experience={experience} invert={invert} /> : <DescriptionElement experience={experience} invert={invert} />}
            </GridItem>
            <GridItem bg="neutral.500" position="relative" flexDirection="column" justifyContent="center" alignItems="center" display="flex">
                <Box
                    bg="brand.500"
                    w="16px"
                    h="16px"
                    borderRadius="50%"
                    position="absolute"
                    top="0"
                    left="0"
                    transform="translate(-50%, -50%)"
                />
            </GridItem>
            <GridItem>
                {invert ? <DescriptionElement experience={experience} invert={invert} /> : <DateElement experience={experience} invert={invert} />}
            </GridItem>
        </Grid>
    )
}