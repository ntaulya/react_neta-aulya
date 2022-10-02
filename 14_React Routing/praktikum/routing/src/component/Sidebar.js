import React, {useState} from "react";
import { Offcanvas, Button, NavLink  } from 'react-bootstrap';
import '../App.scss';
import { FaAlignJustify } from 'react-icons/fa';

function SideBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        // Sidebar
        <>
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
        </>
    )
}

export default SideBar;