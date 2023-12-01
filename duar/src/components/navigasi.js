import "../index.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigasi = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Acukumalaka</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Kategori" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/smartphones">Smartphones</NavDropdown.Item>
                            <NavDropdown.Item href="/laptops">Laptops</NavDropdown.Item>
                            <NavDropdown.Item href="/fragrances">Fragrances</NavDropdown.Item>
                            <NavDropdown.Item href="/skincare">Skincare</NavDropdown.Item>
                            <NavDropdown.Item href="/groceries">Groceries</NavDropdown.Item>
                            <NavDropdown.Item href="/decors">Home Decorations</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigasi;