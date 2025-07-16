import Image from './assets/images.jpg'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
    return (
        <Navbar expand="sm" style={{ backgroundColor:'#302f2b'} }>
            <Container fluid>
                <Navbar.Brand href="#" style={{ color: 'white', fontWeight: 'bold' }}> <img src={Image} width='30px' height='30px' />
                    <span style={{ marginLeft: '7px' }}>ECX</span>
                </Navbar.Brand>
                <Navbar.Toggle style={{ color: 'white', borderColor: 'white', backgroundColor:'white' }} aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{
                            maxHeight: '200px',
                            color:'white'
                        }}
                        /*navbarScroll*/
                    >
                        <Nav.Link style={{ color: 'white', fontWeight: 'bold' }} href="#action1">Home</Nav.Link>
                        <Nav.Link style={{ color: 'white', fontWeight: 'bold' }} href="#action2">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                      
                    </Nav>
                    <Nav className="d-flex">
                        <Nav.Link style={{ color: 'white', fontWeight: 'bold' }} href="#action1">Home</Nav.Link>
                        <Nav.Link style={{ color: 'white', fontWeight: 'bold' }} href="#action2">Link</Nav.Link>
                        <Button style={{ color: 'white', fontWeight: 'bold' }} variant="outline-success">Search</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample; 