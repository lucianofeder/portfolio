import { Main } from "@src/components/Main"
import React from "react"
import { Header } from "./components/Header"
import { Landing } from "./components/Landing"
import { AboutSkills } from "./components/AboutSkills"
import { Experience } from "./components/Experience"
import { Contact } from "./components/Contact"
import { AnimatedBG } from "./components/AnimatedBG"


export const Home: React.FC = () => {
    return (
        <Main>
            <Header />
            <AnimatedBG />
            <Landing />
            <AboutSkills />
            <Experience />
            {/* <Portfolio /> */}
            <Contact />
        </Main>
    )
}
