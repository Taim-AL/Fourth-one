import React from 'react';
import { Col, Row } from 'react-bootstrap';
////////imag
import img from '../assets/images/ser5.jpg';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import AOS from 'aos';

export default ()=>{
    AOS.init();
    return(<>
    <Row className='mx-0 mt-5'>
        
        <Col md='1'></Col>
        
        <Col md='10'>
            <Row className='mx-0'>
                
                <Col md='5' data-aos='fade-up' data-aos-duration="1000">
                    <img className='img-serv3' src={img} alt="" />
                </Col>
                
                <Col md='7' data-aos='fade-up' data-aos-duration="1000">
                    <h1 className='h1-serv3'>
                        Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas
                    </h1>
                    <p className='par-serv3'>
                        Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.
                    </p>
                    <ul className='ul-serv3'>
                        <li className='li-serv3'>
                            <DoneOutlinedIcon className='done'/>
                            <p className='par-serv3'>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </li>
                        <li className='li-serv3'>
                            <DoneOutlinedIcon className='done'/>
                            <p className='par-serv3'>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                        </li>
                        <li className='li-serv3'>
                            <DoneOutlinedIcon className='done'/>
                            <p className='par-serv3'>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</p>
                        </li>
                    </ul>
                </Col>
            
            </Row>
        </Col>
        
        <Col md='1'></Col>
    
    </Row>
    </>)
}