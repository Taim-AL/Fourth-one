import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default()=>{
    return(<>
    <Row className='mx-0 services2 mt-5 mb-5'>
        
        <Col md='2'></Col>
        
        <Col md='8' data-aos="zoom-out" data-aos-duration="1500">
            <h1 className='h1-ser2'>
                Call To Action
            </h1>
            <p className='par-ser2'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <a href="/" style={{textDecoration:"none",color:"#fff"}}>
                <button className='but-ser2'>  Call To Action</button>
            </a>
            </div>
        </Col>
        
        <Col md='2'></Col>
    
    </Row>
    </>)
}