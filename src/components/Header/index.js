import React from 'react'
import Nav from '../Navigation/index'
import './header.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'

const Header = (props) => {

    return (
            <Container className='mt-3'>
                <header>
                    <Row>
                        <Col xs={12} lg={6} > <h1>Charlie Rick</h1> </Col>

                        <Col xs={12} lg={6}> <Nav currentPage={props.currentPage} handlePageChange={props.handlePageChange}/> </Col>
                    </Row>
                </header>
            </Container>
    )
}

export default Header