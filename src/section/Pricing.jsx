import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import CollapsibleExample from '../component/Navbar';
import Sec1Pricing from '../component/Sec1Pricing';
import Sec2Pricing from '../component/Sec2Pricing';

export default ()=>{
    return(<>
    <CollapsibleExample/>
    <Row className='mx-0 detales1'>
        
        <Col md='3'></Col>
        
        <Col md='6'>
            <h1 className='h1-detales' >
                Pricing
            </h1>
            <p className='par-detales'>
                Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
            </p>
        </Col>
        
        <Col md='3'></Col>
    
    </Row>
    <Row className='mx-0' style={{backgroundColor:"#f3f6fc"}}>
        
        <Col md='1'></Col>
        
        <Col md='10'>
            <h2 className='h2-detales'>
                <Link to={'/'} style={{textDecoration:"none",paddingRight:"0.5rem"}}>
                    Home    /
                </Link>
                Pricing
            </h2>
        </Col>
        
        <Col md='1'></Col>
    
    </Row>
    <Sec1Pricing/>
    <Sec2Pricing/>
    <Footer/>
    </>)
}