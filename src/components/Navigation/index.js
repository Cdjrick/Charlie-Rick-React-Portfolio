import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import './nav.css'

const Nav = (props) => {

    const tabs = ['About Me', 'Portfolio', 'Resume', 'Contact Me']

    return (
        <div>
            <Container>
                <Row>
                    {tabs.map(tab => (
                        <Col xs={3} key={tab}>
                            <a href={'#' + tab.replace(' ', '')} onClick={() => props.handlePageChange(tab)}
                                className={props.currentPage === tab ? 'nav-link active' : 'nav-link'}
                            >
                                {tab}
                            </a>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Nav