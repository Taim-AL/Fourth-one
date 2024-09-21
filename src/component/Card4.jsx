import React from 'react';
import { Col, Row } from 'react-bootstrap';
/////////////icon
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AOS from 'aos';

export default({img , name , work , about})=>{
    AOS.init();
    return(<>
    <div className='card mt-3 mb-5' data-aos="fade-up" data-aos-duration="1500">
        <img className='img-card4' src={img} alt="" />
        <h1 className='h1-card4'>{name}</h1>
        <p className='par1-card4'>{work}</p>
        <p className='par-card4'>{about}</p>
        <Row className='mx-0'>
            
            <Col md='3' xs='3'></Col>
            
            <Col md='6' xs='6'style={{display:"flex", justifyContent:"center"}}>
                <TwitterIcon className='icon-card4' />
                <FacebookOutlinedIcon className='icon-card4'/>
                <InstagramIcon className='icon-card4'/>
                <LinkedInIcon className='icon-card4'/>
            </Col>
            
            <Col md='3' xs='3'></Col>
        
        </Row>
    </div>
    </>)
}