import React from 'react';
import { Col, Row } from 'react-bootstrap';
///////img
import img from '../assets/images/ser4.jpg';

export default ()=>{
    return(<>
    <Row className='mx-0 mt-5'>
        
        <Col md='1'></Col>
        
        <Col md='10'>
            <Row className='mx-0'>
                
                <Col md='7' data-aos='fade-up' data-aos-duration="1000">
                    <h1 className='h1-serv3 ' style={{marginTop:"5rem"}}>
                        Corporis temporibus maiores provident
                    </h1>
                    <p className='par-serv3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p className='par-serv3'>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </Col>
                
                <Col md='5' data-aos='fade-up' data-aos-duration="1000">
                    <img className='img-serv3' src={img} alt="" />
                </Col>
            
            </Row>
        </Col>
        
        <Col md='1'></Col>
    
    </Row>
    </>)
}