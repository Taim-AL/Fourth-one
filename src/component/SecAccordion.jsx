import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ControlledAccordions from './Accordion';

export default ()=>{
    return(<>
    <h1 className='h1-serv1' data-aos='fade-up' data-aos-duration="1500">
         FREQUENTLY ASKED QUESTIONS
    </h1>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className='hr-2' data-aos='fade-up' data-aos-duration="1500"></div>
    </div>
    <Row className='mx-0'>
        
        <Col md='2'></Col>
        
        <Col md='8'>
            <ControlledAccordions/>
        </Col>
        
        <Col md='2'></Col>
    
    </Row>
    </>)
}