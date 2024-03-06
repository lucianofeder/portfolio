import { Flex } from "@chakra-ui/react";
import React from "react";
import { SectionTitle } from "../SectionTitle";
import { Skill, TechSkill } from "./Skill";

const skills = Object.values(TechSkill)

export const Skills: React.FC = () => {
    return (
        <Flex
            flexDirection="column"
            alignItems="center"
        >
            <SectionTitle
                // @ts-ignore
                id="skills"
                text="Skills"
            />
            <Flex gap="25px" maxW="80%" flexWrap="wrap" justifyContent="center" maxWidth="1024px">
                {skills.map((skill, i) => <Skill key={`skill-${i}`} skillName={skill} />)}
            </Flex>
        </Flex>
    )
}
