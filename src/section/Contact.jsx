import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../assets/images/mab.png';
import CollapsibleExample from '../component/Navbar';
///////////////////icon
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import Footer from '../component/Footer';
import AOS from 'aos';

export default()=>{
    AOS.init();
    return(<>
    <CollapsibleExample/>
    <Row className='mx-0 detales1'>
        
        <Col md='3'></Col>
        
        <Col md='6'>
            <h1 className='h1-detales' >
                Contact
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
                Contact
            </h2>
        </Col>
        
        <Col md='1'></Col>
    
    </Row>
    <Row className='mx-0'>
        
        <Col md='1'></Col>
        
        <Col md='10' data-aos='fade-up' data-aos-duration="1500">
            <img style={{width:"100%",marginTop:"6rem",marginBottom:"1rem"}} src={img} alt="" />
        </Col>
        
        <Col md='1'></Col>
    
    </Row>

    <Row className='mx-0'>
        
        <Col md='1'></Col>
        
        <Col md='10'>
            <Row className='mx-0'>
                
                <Col md='5' data-aos='fade-up' data-aos-duration="1500">
                    <div className='d-flex mt-5' style={{marginBottom:'2rem'}}>
                        <LocationOnOutlinedIcon className='icon-contact' style={{fontSize:"2.3rem"}}/>
                        <div>
                            <h3 className='h3-cont'>Location:</h3>
                            <p className='par-cont'>A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>
                    <div className='d-flex' style={{marginBottom:'2rem'}}>
                        <EmailOutlinedIcon className='icon-contact' style={{fontSize:"2.3rem"}}/>
                        <div>
                            <h3 className='h3-cont'>Email:</h3>
                            <p className='par-cont'>info@example.com</p>
                        </div>
                    </div>
                    <div className='d-flex' style={{marginBottom:'2rem'}}>
                        <PhoneIphoneOutlinedIcon className='icon-contact' style={{fontSize:"2.3rem"}}/>
                        <div>
                            <h3 className='h3-cont'>Call:</h3>
                            <p className='par-cont'>+1 5589 55488 55</p>
                        </div>
                    </div>
                </Col>
                
                <Col md='7' data-aos='fade-up' data-aos-duration="1500">
                    <Row className='mx-0 mt-3'>
                        
                        <Col md='6'>
                            <input className='input-con' type="text" placeholder='Your Name'/>
                        </Col>
                        
                        <Col md='6'>
                            <input className='input-con' type="email" placeholder='Your Email'/>
                        </Col>
                    
                    </Row>
                    <Row className='mx-0'>
                        
                        <Col md='12'>
                        <input className='input-con' type="text" placeholder='Subject'/>
                    <textarea className='input-con' name="" id="" cols="30" rows="3">Message</textarea>
                        </Col>
                    
                    </Row>
                    
                    <div style={{display:"flex",justifyContent:"center" , alignItems:"center"}}>
                        <button className='but-send'>Send Message</button>
                    </div>
                </Col>
            
            </Row>
        </Col>
        
        <Col md='1'></Col>
    
    </Row>
        <Footer/>
    </>)
}