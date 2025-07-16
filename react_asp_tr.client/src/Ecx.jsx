import Image from './assets/images.jpg'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Style/Ecx.css';
import Icon from '@reacticons/bootstrap-icons';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Ecx() { 
    return (
        <Navbar expand="sm" style={{ backgroundColor: '#302f2b', margin: '0', padding: '0' } }>
            <Container fluid>
                <Navbar.Brand expand="lg" href="#" style={{
                    color: 'white', fontWeight: 'bold',
                    backgroundColor: 'blue', margin: '-20px',
                    alignItems:'center',
                    width: "25%",
                    paddingLeft:'10px'
                }}> <img className="rounded" src={Image} width='30px' height='20px' />
                    <span style={{ marginLeft: '7px' }}>ECX</span>
                </Navbar.Brand>
                <Navbar.Toggle style={{ color: 'white', borderColor: 'white', backgroundColor:'white' }} aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-3 my-lg-0"
                        style={{
                            maxHeight: '200px',
                            color: 'white',
                            paddingLeft:'10px'
                        }}
                        /*navbarScroll*/
                    >
                        <Button className="navMenu" style={{ color: 'white', fontWeight: 'bold', paddingBottom: '10px', backgroundColor: '#302f2b', border: 'none' }} href="#action1"><Icon style={{ fontWeight: 'bold', fontSize: '20px' }} name="list" size={52} /></Button>
                        <Nav.Link  style={{ color: 'white', fontWeight: 'bold', paddingTop:'10px' }} href="#action2">Ecx Budget expense system </Nav.Link>
                      
                    </Nav>
                    <Nav className="d-flex">
                        <Button style={{ backgroundColor: '#302f2b', border: 'none' }}>
                            <i style={{ color: 'white', fontSize: '30px' }} className="bi bi-person-fill">
                            </i>
                            admin
                        </Button>

                       
                 


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Ecx; 