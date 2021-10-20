import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap'

const AboutMe = () => {
    return (
        <div>
            <Container className='mt-5'>
                <Row>
                <h3 className='aboutMe'>About me</h3>
                </Row>
                <Row className='mt-3'>
                    <p>
                        My name is Charlie Rick. I am currently looking for a job in the field of Mobile Development, Web Development, User Interface Design or User Experience 
                        Design. I attended a 2 year course at Algonquin College for Mobile App Design and Development, and then a 6 month Carleton University Coding Bootcamp.
                        Over this time I have obtained many important skills outlined on my resume, including but not limited to react, handlebars, nodeJS, express, bootstrap, 
                        mongodb, mysql, UX design, UI design and more.
                    </p>
                    <p>
                        Please take a look at my portfolio to see projects I have created or worked on over the time I was in school.
                        If you would like to contact me, fill out the contact form and I will respond as soon as possible.
                    </p>
                </Row>
            </Container>
        </div>
    )
}

export default AboutMe