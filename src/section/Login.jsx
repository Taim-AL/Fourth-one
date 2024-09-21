import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
///////////////////icon
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import AOS from 'aos';
import axios from 'axios';
import CollapsibleExample from '../component/Navbar';

export default()=>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    function handelsubmit(){
        axios.post('https://jsonplaceholder.typicode.com/users',{
            email : email,
            website : password
        }).then((req)=>{
            console.log(req.data);
            if(req.status === 201){
                navigate('/')
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
    AOS.init();
    return(<>
    <CollapsibleExample/>
    <Row className='mx-0 detales1'>
        
        <Col md='3'></Col>
        
        <Col md='6'>
            <h1 className='h1-detales' >
                Login
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
                <strong style={{textDecoration:"none",paddingRight:"0.5rem",cursor:"pointer",color:"#0d42ff",marginRight:"1rem"}} onClick={()=>{navigate('/')}}>Home    /</strong>
                Login
                <strong style={{textDecoration:"none",paddingRight:"0.5rem",cursor:"pointer",color:"#0d42ff",marginLeft:"1rem"}} onClick={()=>{navigate('/register')}}>/ Regester</strong>
            </h2>
        </Col>
        
        <Col md='1'></Col>
    
    </Row>
    <Row className='mx-0'>
        
        <Col md='1'></Col>
        
        <Col md='10' data-aos='fade-up' data-aos-duration="1500">
        <h1 className='h1-serv1' data-aos='fade-up' data-aos-duration="1500">
            SING IN
        </h1>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div className='hr-2' data-aos='fade-up' data-aos-duration="1500"></div>
            </div>  
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
                    
                    <Row className='mx-0 mt-5'>
                        
                        <Col md='12' className='mt-3'>

                        <input className='input-con' type="email" placeholder='Your Email' onChange={(e)=>{
                            setEmail(e.target.value)
                        }}/>
                        
                        <input className='input-con' type="password" placeholder='Your Password' onChange={(e)=>{
                            setPassword(e.target.value)
                        }}/>

                        </Col>
                    
                    </Row>
                    
                    <div style={{display:"flex",justifyContent:"center" , alignItems:"center"}}>
                        
                        <button className='but-send' onClick={handelsubmit}>LOG IN</button>
                    
                    </div>
                </Col>
            
            </Row>
        </Col>
        
        <Col md='1'></Col>
    
    </Row>
    </>)
}