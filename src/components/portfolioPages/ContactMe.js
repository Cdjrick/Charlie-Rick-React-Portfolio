import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap'

const ContactMe = () => {
    return (
        <div>
            <Container className='mt-5'>
                <h3>Contact Me</h3>
                <Form className='mt-5'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>

                    <Form.Group className='mt-5 mb-3'>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as='textarea'/>
                    </Form.Group>
                    
                    <Button className='mb-5' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default ContactMe