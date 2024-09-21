import React from 'react';
import { Col, Row } from 'react-bootstrap';
////////imag
import img from '../assets/images/ser3.jpg';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import AOS from 'aos';

export default ()=>{
    AOS.init();
    return(<>
    <Row className='mx-0'>
        
        <Col md='1'></Col>
        
        <Col md='10'>
            <Row className='mx-0'>
                
                <Col md='5' data-aos='fade-up' data-aos-duration="1000">
                    <img className='img-serv3' src={img} alt="" />
                </Col>
                
                <Col md='7' data-aos='fade-up' data-aos-duration="1000">
                    <h1 className='h1-serv3'>
                        Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
                    </h1>
                    <p className='par-serv3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <ul className='ul-serv3'>
                        <li className='li-serv3'>
                            <DoneOutlinedIcon className='done'/>
                            <p className='par-serv3'>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </li>
                        <li className='li-serv3'>
                            <DoneOutlinedIcon className='done'/>
                            <p className='par-serv3'> Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                        </li>
                        <li className='li-serv3'>
                            <DoneOutlinedIcon className='done'/>
                            <p className='par-serv3'> Ullam est qui quos consequatur eos accusamus.</p>
                        </li>
                    </ul>
                </Col>
            
            </Row>
        </Col>
        
        <Col md='1'></Col>
    
    </Row>
    </>)
}