import React from 'react'
import './resume.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'

const Resume = () => {

    const generalSkills = ['Github', 'Git', 'Jira', 'Agile']
    const frontEndSkills = ['React', 'HandleBars', 'Html', 'CSS', 'Javascript', 'Bootstrap']
    const backEndSkills = ['NodeJS', 'ExpressJS', 'MongoDB', 'GraphQL', 'mySql', 'Sequelize']

    return (
        <div>
            <Container className='mt-5'>
                <h3>Resume</h3>

                <ul>    
                    <h5 className='mt-5'>General Skills</h5>
                        {generalSkills.map(skill => (
                            <li> {skill} </li>
                        ))}
                </ul>

                <ul>    
                    <h5 className='mt-5'>Front End Skills</h5>
                        {frontEndSkills.map(skill => (
                            <li> {skill} </li>
                        ))}
                </ul>

                <ul className='mb-5'>    
                    <h5 className='mt-5'>Back End Skills</h5>
                        {backEndSkills.map(skill => (
                            <li> {skill} </li>
                        ))}
                </ul>
            </Container>
        </div>
    )
}

export default Resume