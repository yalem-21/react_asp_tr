import Image from './assets/images.jpg'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Style/Ecx.css';
import Icon from '@reacticons/bootstrap-icons';
import 'bootstrap-icons/font/bootstrap-icons.css';
import  { useState } from 'react';

function Ecx() { 

    const [isNavMenuClicked, setIsNavMenuClicked] = useState(true);
        const handleMenu = (event) => {
            //console.log("items are clickedgghghghghghghgh here");
           // const leftNavBody = document.querySelector('.bodyLeftNav');
            setIsNavMenuClicked(!isNavMenuClicked);
        }
    return (
        <>
            {/*  top nav bar are done from here   */ } 
        <Navbar expand="sm" style={{ backgroundColor: '#302f2b', margin: '0', padding: '0', position:'relative' } }>
            <Container fluid>


                    {isNavMenuClicked ? (<Navbar.Brand expand="lg" href="#" style={{
                        color: 'white', fontWeight: 'bold',
                        backgroundColor: 'blue', margin: '-20px',
                        alignItems: 'center',
                        width: "25%",
                        paddingLeft: '10px'
                    }}> <img className="rounded" src={Image} width='30px' height='20px' />
                        <span style={{ marginLeft: '7px' }}>ECX</span>
                    </Navbar.Brand>) :null  }


                    <Button onClick={handleMenu} className="navMenu" style={{ color: 'white', fontWeight: 'bold', paddingBottom: '10px', backgroundColor: '#302f2b', border: 'none' }} href="#action1"><Icon style={{ fontWeight: 'bold', fontSize: '20px' }} name="list" size={52} /></Button>

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

            {/* body are start from here it divided into left part and main body */}
            <div className="d-flex">
                {isNavMenuClicked ? 
                    (<div className="bodyLeftNav" style={{ marginLeft: '-10px' }}>
                        <ul style={{ display: 'flex', flexDirection: 'column' }}>
                            <li> <a href="#" >act1</a></li>
                            <li></li>

                        </ul>
                    </div>) : (<div style={{ width: '100%', height: '100vh', backgroundColor: 'green', marginRight: '0' }}>
                        Main part
                    </div>)
                }

                {isNavMenuClicked ? (<div style={{ width: '80%', height: '100vh', backgroundColor: 'green', marginRight: '0' }}>
                    Main part
                </div>): null
                }
            </div>

      </>
    );
}

export default Ecx; 