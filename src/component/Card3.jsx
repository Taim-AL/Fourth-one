import { Rating } from '@mui/material';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default ({img , name , work })=>{
    return(<>
    <Row className='mx-0'>
        
        <Col md='4'></Col>
        
        <Col md='4'>
            <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
                <img className='img-splide' src={img} alt="" />
            </div>
            <h3 className='h3-name'>{name}</h3>
            <h5 className='h5-work'>{work}</h5>
            <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
                <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly style={{marginTop:"0.5rem",marginBottom:"1rem"}} />
            </div>
        </Col>
        
        <Col md='4'></Col>
    
    </Row>
            <p className='para-about'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam error voluptate accusamus quod, facere natus quo impedit iusto et magnam eum maxime nemo voluptatum expedita.
            </p>
    </>)
}