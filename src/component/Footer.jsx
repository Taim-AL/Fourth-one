import React from 'react';
import { Col, Row } from 'react-bootstrap';
////////icon
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default ()=>{
    return(<>
    <Row className='mx-0 foot'>
        
        <Col md='1'></Col>
        
        <Col md='10'>
            <Row>
                
                <Col md='5'>
                    <h1 className='h1-footer'>
                        Logis
                    </h1>
                    <p className='par-footer'>
                        Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.
                    </p>
                    <TwitterIcon className='icon-foot' style={{marginLeft:"0rem",fontSize:"2rem"}}/>
                    <FacebookOutlinedIcon className='icon-foot' style={{fontSize:"2rem"}}/>
                    <InstagramIcon className='icon-foot' style={{fontSize:"2rem"}}/>
                    <LinkedInIcon className='icon-foot' style={{fontSize:"2rem"}}/>
                </Col>
                
                <Col md='4' style={{display:"flex", justifyContent:"space-between"}}>
                    <ul className='ul-foot'>
                        <label className='lable-foot'>
                            Useful Links
                        </label>
                        <li className='li-footer'>
                            Home
                        </li>
                        <li className='li-footer'>
                            About us
                        </li>
                        <li className='li-footer'>
                            Services
                        </li>
                        <li className='li-footer'>
                            Terms of service
                        </li>
                        <li className='li-footer'>
                            Privacy policy
                        </li>
                    </ul>
                    <ul className='ul-foot'>
                        <label className='lable-foot'>
                            Our Services
                        </label>
                        <li className='li-footer'>
                            Web Design
                        </li >
                        <li className='li-footer'>
                            Web Development
                        </li>
                        <li className='li-footer'>
                            Product Management
                        </li>
                        <li className='li-footer'>
                            Marketing
                        </li>
                        <li className='li-footer'>
                            Graphic Design
                        </li>
                    </ul>
                </Col>
                
                <Col md='3' style={{display:"flex" , justifyContent:"center"}}>
                    <div>
                        <h3 className='h3-footer'>
                            Contact Us
                        </h3>
                        <p className='par2-footer'>
                            A108 Adam Street<br/>New York, NY 535022<br/>United States<br/>
                        </p>
                        <p className='par2-footer'>
                            <strong>Phone: </strong> +1 5589 55488 55<br/><strong>Email: </strong>info@example.com
                        </p>
                    </div>
                    
                </Col>
            
            </Row>
        </Col>
        
        <Col md='1'></Col>
        <h1 className='par3-footer mt-5'>
            © Copyright <strong>Logis.</strong>  All Rights Reserved
        </h1>
        <p className='par3-footer mb-5' >
            Designed by Taim Al
        </p>
    </Row>
    </>)
}