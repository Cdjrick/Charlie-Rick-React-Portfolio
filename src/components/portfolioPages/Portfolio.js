import React from 'react'

import Project from './Project'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, } from 'react-bootstrap'

const Projects = () => {

    return (
        <div>
            <Container className='mt-5'>
                <Row>
                        <Project />
                </Row>
            </Container>
        </div>
    )
}

export default Projects