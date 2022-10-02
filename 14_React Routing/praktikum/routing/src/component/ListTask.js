import { React, useState } from "react";
import { Container, Row, Col, Form, InputGroup, Offcanvas, Button, Nav, NavLink } from 'react-bootstrap';
import '../App.scss';
import { FaAlignJustify } from 'react-icons/fa';

export default function ListTask(props) {
    const {initialValue, hapusTask} = props
    console.log(initialValue)
    const [state, setState] = useState([{
        title: ""
    }])

    const onChange = (e) => {
        setState({
            [e.target.name] : e.target.value
        })
    }

    const submitTask = (e) => {
        e.preventDefault()
        if (state.title) {
            props.tambahTask({title:state.title})
            setState({
                title:""
            })
        }
        else {
            alert("tidak terinput")
        }
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div id="homepage">
            <Container className='py-5'>
                <Row>
                    <Col sm={3}>
                        <Button variant="primary" onClick={handleShow}>
                            <FaAlignJustify />
                        </Button>
                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Menu</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <NavLink href="/">Home</NavLink>
                                <NavLink href="/AboutApp">About App</NavLink>
                                <NavLink href="/AboutAuthor">About Author</NavLink>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </Col>
                    <Col sm={9}>
                        <div className="todoss text-center">
                            <h5 className="title">todos</h5>
                        </div>
                        <InputGroup className="mb-3">
                            <Form.Control onChange = {onChange} name="title" value={state.title} className="form-control" placeholder="Add todo..."/>
                            <Button className="input-group-text" id="basic-addon2" onClick={submitTask}>Submit</Button>
                        </InputGroup>
                        { initialValue.map ((ListTask => 
                            <InputGroup className="mb-3">
                                <InputGroup.Checkbox className="form-check-input mt-0" />
                                <p key={ListTask.id} className={ListTask.completed? 'not-completed ms-3' : 'completed ms-3'}>{ListTask.title}</p>
                                <Button className="ms-auto input-group-text" id="basic-addon2" onClick={()=>{hapusTask(ListTask.id)}}>Delete</Button>
                            </InputGroup>
                        ))} 
                    </Col>
                </Row>
            </Container>

        </div>
    );
}