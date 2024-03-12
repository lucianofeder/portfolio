import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AWSIconSVG } from "../svg/AWSIconSVG";
import { CSSIconSVG } from "../svg/CSSIconSVG";
import { DjangoIconSVG } from "../svg/DjangoIconSVG";
import { DockerIconSVG } from "../svg/DockerIconSVG";
import { FastapiIconSVG } from "../svg/FastapiIconSVG";
import { FlaskIconSVG } from "../svg/FlaskIconSVG";
import { GitIconSVG } from "../svg/GitIconSVG";
import { HTMLiconSVG } from "../svg/HTMLiconSVG";
import { JavascriptIconSVG } from "../svg/JavascriptIconSVG";
import { MongoIconSVG } from "../svg/MongoIconSVG";
import { MysqlIconSVG } from "../svg/MysqlIconSVG";
import { PostgresIconSVG } from "../svg/PostgresIconSVG";
import { PythonIconSVG } from "../svg/PythonIconSVG";
import { RabbitMQIconSVG } from "../svg/RabbitMQIconSVG";
import { ReactIconSVG } from "../svg/ReactIconSVG";
import { ReddisIconSVG } from "../svg/ReddisIconSVG";
import { TypescriptIconSVG } from "../svg/TypescriptIconSVG";


export enum TechSkill {
    PYTHON = "python",
    FASTAPI = "fastapi",
    FLASK = "flask",
    DJANGO = "django",
    TYPESCRIPT = "typescript",
    JAVASCRIPT = "javascript",
    REACT = "react",
    HTML = "html",
    CSS = "css",
    GIT = "git",
    POSTGRES = "postgres",
    MYSQL = "mysql",
    // DYNAMODB = "dynamodb",
    MONGODB = "mongodb",
    REDDIS = "reddis",
    DOCKER = "docker",
    // SQS = "sqs",
    RABBITMQ = "rabbitmq",
    AWS = "aws"
    // AWSLAMBDA = "aws lambda",
    // AWSS3 = "aws s3"
}

interface Props {
    skillName: TechSkill
}

const componentMapper = {
    "python": PythonIconSVG,
    "fastapi": FastapiIconSVG,
    "flask": FlaskIconSVG,
    "django": DjangoIconSVG,
    "typescript": TypescriptIconSVG,
    "javascript": JavascriptIconSVG,
    "react": ReactIconSVG,
    "html": HTMLiconSVG,
    "css": CSSIconSVG,
    "git": GitIconSVG,
    "postgres": PostgresIconSVG,
    "mysql": MysqlIconSVG,
    // "dynamodb": PythonIconSVG,
    "mongodb": MongoIconSVG,
    "reddis": ReddisIconSVG,
    "docker": DockerIconSVG,
    // "sqs": PythonIconSVG,
    "rabbitmq": RabbitMQIconSVG,
    "aws": AWSIconSVG,
    // "aws lambda": PythonIconSVG,
    // "aws s3": PythonIconSVG,
}

export const Skill: React.FC<Props> = ({ skillName }) => {
    const [isHovered, setHovered] = useState(false)
    // @ts-ignore
    const Component = componentMapper[skillName.valueOf()]
    return (
        <Flex
            as="section"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Box
                w={{base: "30px", lg:"70px"}}
                h={{base: "30px", lg:"70px"}}
            >
                <Component style={{
                    filter: isHovered ? "grayscale(0%)" : "grayscale(100%)"
                }} />
            </Box>
            <Text color="neutral.100" fontSize={{base: "12px", lg:"16px"}}>{skillName}</Text>
        </Flex>
    )
}
