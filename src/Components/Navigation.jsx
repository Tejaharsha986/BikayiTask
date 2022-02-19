import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


function Nav({setToggle}) {

    
    return (
        <Navbar bg="primary" variant="dark">
            <Container fluid>
            <Navbar.Brand href="">Nobel Prize Winners</Navbar.Brand>
            <button style = {{backgroundColor:"white"}} className='btn' onClick={() => setToggle(prev => !prev)}>Winners</button>
            
                    </Container>
        </Navbar>
    )
}

export default Nav