import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Slide from './Slide';
import AOS from 'aos';

export default ()=>{
    AOS.init();
    return(<>
    <Row className='mx-0 conten-splide mb-5 mt-5' >
        
        <Col md='2'></Col>
        
        <Col md='8' >
            <Slide/>
        </Col>
        
        <Col md='2'></Col>
    
    </Row>
    </>)
}