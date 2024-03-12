import { Main } from "@src/components/Main"
import React from "react"
import { Header } from "./components/Header"
import { Landing } from "./components/Landing"
import { AboutSkills } from "./components/AboutSkills"
import { Experience } from "./components/Experience"
import { Contact } from "./components/Contact"
import { AnimatedBG } from "./components/AnimatedBG"
import { useBreakpointValue } from "@chakra-ui/react"


export const Home: React.FC = () => {
    const isDesktop = useBreakpointValue({ base: false, xl: true }, { ssr: false })
    return (
        <Main>
            <Header />
            {isDesktop && <AnimatedBG />}
            <Landing />
            <AboutSkills />
            <Experience />
            {/* <Portfolio /> */}
            <Contact />
        </Main>
    )
}
