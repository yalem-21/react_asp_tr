import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react'
function Dashboard() {
    const [date, setDate] = useState(new Date())
    return (
        <>
            <Container fluid>
                <div> <h3 style={{ textAlign: 'center', marginTop: '20px', fontFamily: 'fantasy', letterSpacing: '10px' }}>
                    Wellcome To admin Dashboard
                </h3
                ></div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Card style={{margin:'20px', padding:'30px'} }>
                        <Card.Title>Total Overall budget</Card.Title>
                      
                        <Card.Body>{ 2000000000} ETB</Card.Body>
                    </Card>
                    <Card style={{ margin: '20px', padding: '30px' }}>
                        <Card.Title>Today Budget Expense</Card.Title>

                        <Card.Body>{200000} ETB</Card.Body>
                    </Card>
                    <Card style={{ margin: '20px', padding: '30px' }}>
                        <Card.Title>Today Budget expense</Card.Title>

                        <Card.Body>{20000} ETB</Card.Body>
                    </Card>
                </div>
                <div>
                    <h4 style={{ textAlign: 'start' }}>Current Budget Catagory in each</h4>

                </div>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Card style={{ margin: '20px', padding: '30px' }}>
                        <Card.Title>Electricity</Card.Title>

                        <Card.Body>
                            <i style={{ color: 'yellow', fontSize:'20px' }} className="bi bi-lightbulb-fill"></i>
                            {1000} ETB</Card.Body>
                    </Card>
                    <Card style={{ margin: '20px', padding: '30px' }}>
                        <Card.Title>Water</Card.Title>

                        <Card.Body> {500} ETB</Card.Body>
                    </Card>
                    <Card style={{ margin: '20px', padding: '30px' }}>
                        <Card.Title>Maintenance</Card.Title>

                        <Card.Body>{10000} ETB</Card.Body>
                    </Card>
                    <Card style={{ margin: '20px', padding: '30px' }}>
                        <Card.Title>Other</Card.Title>

                        <Card.Body>{10000} ETB</Card.Body>
                    </Card>
                </div>
            </Container>

            <div >
                <p style={{ textAlign: 'center', marginTop: '60px', marginBottom:'0' }} >all right reserved: {date.toLocaleDateString()}</p>
            </div>

        </>
    );
}

export default Dashboard;