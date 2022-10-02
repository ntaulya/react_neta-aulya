import { React, useState } from "react";
import SideBar from "../component/Sidebar";
import { Container, Row, Col  } from 'react-bootstrap';

function AboutAuthor() {

    return (
        <>
        <Container className='py-5'>
                <Row>
                    <Col sm={3}>
                        <SideBar />
                    </Col>
                    <Col sm={9}>
                        <h3>About Author</h3> 
                        <p>Lorem ipsum</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutAuthor;