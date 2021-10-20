import React from "react";

import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Resume from './Resume'
import ContactMe from './ContactMe'

const Pages = (props) => {

    const renderPage = () => {
        switch (props.currentPage) {
            case 'About Me':
                return <AboutMe />
            case 'Portfolio':
                return <Portfolio />
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

export default Pages