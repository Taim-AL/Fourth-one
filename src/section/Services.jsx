import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import CollapsibleExample from '../component/Navbar';
import Sec1Services from '../component/Sec1Services';
import Sec2Home from '../component/Sec2Home';
import Sec3Services from '../component/Sec3Services';
import Sec4Services from '../component/Sec4Services';
import Sec5Services from '../component/Sec5Services';
import Sec6Services from '../component/Sec6Services';
import SecAccordion from '../component/SecAccordion';
import SecTeam from '../component/SecTeam';

export default ()=>{
    return(<>
    <CollapsibleExample/>
    <Row className='mx-0 detales1'>
        
        <Col md='3'></Col>
        
        <Col md='6'>
            <h1 className='h1-detales' >
                Services
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
                Services
            </h2>
        </Col>
        
        <Col md='1'></Col>
    
    </Row>
    <Sec2Home/>
    <Sec1Services/>
    {/* <Sec2Services/> */}
    <div style={{height:"5rem"}}></div>
    <Sec3Services/>
    <Sec4Services/>
    <Sec5Services/>
    <Sec6Services/>
    <div style={{height:"5rem"}}></div>
    <SecTeam/>
    <SecAccordion/>
    <Footer/>
    </>)
}