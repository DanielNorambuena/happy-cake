import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Barra = () => {
    return (
        <Navbar className="navbar-dark bg-dark " expand="lg">
            <Container fluid>
                <Navbar.Brand >Happy Cake</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav>
                        <Link
                            to="/"
                            className="text-white ms-3 text-decoration-none">
                            Home
                        </Link>
                    </Nav>
                    <Nav>
                        <Link
                            to="/contacto"
                            className="text-white ms-3 text-decoration-none"
                        >
                            Contacto
                        </Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Barra