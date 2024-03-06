import React from "react";
import { ExperienceDTO, Row } from "./Row";

const data: ExperienceDTO[] = [
    {
        companyName: "Confitec",
        companyUrl: "https://www.linkedin.com/company/confitec/",
        startedAt: "08/2022",
        endedAt: undefined,
        activities: [
            {
                position: "Back End Developer",
                startedAt: "08/2022",
                endedAt: undefined,
                description: `- Developed and planned new features using python frameworks such as Flask, Django and Fastapi.
                              - Integrated microservices with AWS SQS and AWQ lambda.
                              - Redesigned features from a monolyth into microservices.
                              - Improved code quality and test coverage with unit tests and end to end tests.`,
                skills: ["Python", "FastApi", "Flask", "SQS", "DynamoDB", "AWS Lambda", "AWS S3", "MySQL", "Docker"]
            }
        ]
    },
    {
        companyName: "Topaz",
        companyUrl: "https://www.linkedin.com/company/topazevolution/",
        startedAt: "02/2022",
        endedAt: "08/2022",
        activities: [
            {
                position: "Back End Developer",
                startedAt: "02/2022",
                endedAt: "08/2022",
                description: `- Developed and planned a new project to manage the implementation of new customers in the company making the proccess faster and eazier. 
                              - Developed unit tests and end to end tests to ensure code quality. 
                              - Planned the mvp of the system and technologies that was used to develop it.
                              - Was a reference with React and used Python/Flask in conjuction with AWS Lambda and DynamoDB`,
                skills: ["Python", "Flask", "React", "Typescript", "DynamoDB", "AWS Lambda", "AWS S3"]
            }
        ]
    },
    {
        companyName: "Kenzie Academy Brasil",
        companyUrl: "https://www.linkedin.com/school/kenzieacademybr/",
        startedAt: "01/2021",
        endedAt: "02/2022",
        activities: [
            {
                position: "Supervisor",
                startedAt: "11/2021",
                endedAt: "02/2022",
                description: `- Helped and managed a team over 8 instructors to work with a group with over 200 students.
                              - Developed backend API's using Flask, Django and Express to integrate into students frontend applications.
                              - Presented programming concepts, including frontend and backend, in front of over 200+ people`,
                skills: ["Python", "Flask", "Django", "React", "Typescript", "Postgres", "Mongo", "AWS S3", "HTML", "CSS"]
            },
            {
                position: "Instructor",
                startedAt: "03/2021",
                endedAt: "11/2021",
                description: `Oriented groups with over 30+ students teching them soft skills and hard skills. Teaching mainly Javascript and programming logic.
                              Worked creating development content and making presentations for the students.`,
                skills: ["Python", "Flask", "React", "Typescript", "Postgres", "HTML", "CSS"]
            },
            {
                position: "Peer Coach",
                startedAt: "03/2021",
                endedAt: "11/2021",
                description: `Helped a group with over 30 students with their doubts, giving exemple and explanations about development content. Worked in conjuction with a supervisor giving him feedback about the students performance and weak points so they can improve.`,
                skills: ["HTML", "CSS", "Javascript"]
            },
        ]
    }
]

export const Timeline: React.FC = () => {
    return (
        data.map((experience, i) => <Row key={`Activity-${i}`}experience={experience} invert={i%2 == 1}/>)
    )
}
