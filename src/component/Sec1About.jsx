import React from 'react';
import { Col, Row } from 'react-bootstrap';
//////////icon
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import img from '../assets/images/about.jpg';
import AOS from 'aos';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import GrowExample from './Spinner';

export default ()=>{
    AOS.init();
    return(<>
    <Row className='mx-0'>
        
        <Col md='1'></Col>
        
        <Col md='10' className='mt-5'>
            <Row className='mx-0'>
                
                <Col md='6' >
                    <h1 className='h1-about' data-aos='fade-up' data-aos-duration="1000">
                        About Us
                    </h1>
                    <p className='par-about' data-aos='fade-up' data-aos-duration="1000">
                        Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis veritatis asperiores placeat.
                    </p>
                    <div style={{display:"flex"}} data-aos='fade-up' data-aos-duration="1000">
                        <AccountTreeOutlinedIcon className='icon-about' style={{fontSize:"60px",paddingRight:"0.5rem"}}/>
                        <div>
                            <h2 className='h2-about'>
                                Ullamco laboris nisi ut aliquip consequat
                            </h2>
                            <p className='par-about'>
                                Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade
                            </p>
                        </div>
                    </div>
                    <div style={{display:"flex"}} data-aos='fade-up' data-aos-duration="1000">
                        <DashboardOutlinedIcon className='icon-about' style={{fontSize:"60px",paddingRight:"0.5rem"}}/>
                        <div>
                            <h2 className='h2-about'>
                                Magnam soluta odio exercitationem reprehenderi
                            </h2>
                            <p className='par-about'>
                                Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi
                            </p>
                        </div>
                    </div>
                    <div style={{display:"flex"}} data-aos='fade-up' data-aos-duration="1000">
                        <SensorsOutlinedIcon className='icon-about' style={{fontSize:"60px",paddingRight:"0.5rem"}}/>
                        <div>
                            <h2 className='h2-about'>
                                Voluptatem et qui exercitationem
                            </h2>
                            <p className='par-about'>
                                Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime veniam
                            </p>
                        </div>
                    </div>
                </Col>
                
                <Col md='6' data-aos='fade-up' data-aos-duration="1000" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <img className='img-about' src={img} alt="" />
                    <a href='https://youtu.be/LXb3EKWsInQ' style={{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute"}}>
                    <PlayArrowIcon className='play-arrow'/>
                    <GrowExample />
                    </a>
                </Col>
            </Row>
        </Col>
        
        <Col md='1'></Col>
    
    </Row>
    
    </>)
}