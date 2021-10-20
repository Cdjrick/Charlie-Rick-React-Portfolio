import React from "react";

import AboutMe from './AboutMe'
import Projects from './Projects'
import Resume from './Resume'
import ContactMe from './ContactMe'

const Portfolio = (props) => {

    const renderPage = () => {
        switch (props.currentPage) {
            case 'About Me':
                return <AboutMe />
            case 'Projects':
                return <Projects />
            case 'Resume':
                return <Resume />
            case 'Contact Me':
                return <ContactMe />
            default:
                return <AboutMe />
        }
    }

    return (
        <div>
            <div>{renderPage()}</div>
        </div>
    )
}

export default Portfolio