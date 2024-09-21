import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import CollapsibleExample from '../component/Navbar';
import Sec1About from '../component/Sec1About';
import SecAccordion from '../component/SecAccordion';
import SecTeam from '../component/SecTeam';
import Team from '../component/Team';
import CountUp from 'react-countup';

export default ()=>{
    const data=[
        {
            num:"232",
            title:"Clients"
        },
        {
            num:"521",
            title:"Projects"
        },
        {
            num:"1453",
            title:"Support"
        },
        {
            num:"32",
            title:"Workers"
        },
    ]
    return(<>
    <CollapsibleExample/>
    <Row className='mx-0 detales1'>
        
        <Col md='3'></Col>
        
        <Col md='6'>
            <h1 className='h1-detales' >
                About
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
                About
            </h2>
        </Col>
        
        <Col md='1'></Col>
    
    </Row>
    <Sec1About/>
    <Row className='mx-0'>
        
        <Col md='1'></Col>
        
        <Col md='10'>
        <Row>
        {data.map((e)=>{
            return(<>
                <Col md='3' xs='6' data-aos="fade-up" data-aos-duration="1500">
                    <CountUp start={'0'} end={e.num} duration={5} delay={5} className='h1-num2'/>
                    {/* <h1 className='h1-num2'>{e.num}</h1> */}
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <div className='hr-1' style={{width:"15%"}}></div>
                    </div>
                    <h2 className='h2-title2'>{e.title}</h2>
                </Col>
            </>)})}
        </Row>
        </Col>
        
        <Col md='1'></Col>
    
    </Row>
    <Team/>
    <SecTeam/>
    <SecAccordion/>
    <Footer/>
    </>)
}