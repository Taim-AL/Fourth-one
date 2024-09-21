import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
///////////////////icon
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import AOS from 'aos';
import axios from 'axios';
import CollapsibleExample from '../component/Navbar';

export default()=>{
    const navigate = useNavigate()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirm,setConfirm] = useState('')
    const [address,setAddress] = useState('')
    const [phone,setPhone] = useState('')
    const [gender,setGender] = useState('')

    function submit(){
        axios.post('https://jsonplaceholder.typicode.com/users', {
            name : name ,
            email : email,
            username : password ,
            zipcode : confirm , 
            city : address ,
            phone : phone ,
            website : gender
        }).then((req)=>{
            console.log(req)
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
                Registr
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
                Register
                <strong style={{textDecoration:"none",paddingRight:"0.5rem",cursor:"pointer",color:"#0d42ff",marginLeft:"1rem"}} onClick={()=>{navigate('/singin')}}>/ Login</strong>
            </h2>
        </Col>
        
        <Col md='1'></Col>
    
    </Row>
    <Row className='mx-0'>
        
        <Col md='1'></Col>
        
        <Col md='10' data-aos='fade-up' data-aos-duration="1500">
        <h1 className='h1-serv1' data-aos='fade-up' data-aos-duration="1500">
        REGISTER
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
                    <Row className='mx-0 mt-3'>
                        
                        <Col md='6'>
                            <input className='input-con' type="text" onChange={(e)=>{setName(e.target.value)}} placeholder='Your Name'/>
                        </Col>
                        
                        <Col md='6'>
                            <input className='input-con' type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Your Email'/>
                        </Col>
                    
                    </Row>
                    <Row className='mx-0'>
                        
                        <Col md='12'>
                        <input className='input-con' type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Your Password'/>
                        
                        <input className='input-con' type="password" onChange={(e)=>{setConfirm(e.target.value)}} placeholder='Confirm Password'/>
                        
                        <input className='input-con' type="text" onChange={(e)=>{setAddress(e.target.value)}} placeholder='Adrees' />
                        
                        <input type="tel" className='input-con' onChange={(e)=>{setPhone(e.target.value)}} placeholder='Phone Number'/>
                        
                        {/* <RowRadioButtonsGroup /> */}

                        <FormControl className='mt-3 '>
                            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group">
                                    <FormControlLabel  value="female" control={<Radio onChange={()=>{setGender("female")}}/>} label="Female" />
                                    <FormControlLabel  value="male" control={<Radio onChange={()=>{setGender("male")}}/>} label="Male" />
                                    <FormControlLabel  value="other" control={<Radio onChange={()=>{setGender("other")}}/>} label="Other" />
                                </RadioGroup>
                            </FormControl>

                        </Col>
                    
                    </Row>
                    
                    <div style={{display:"flex",justifyContent:"center" , alignItems:"center"}}>
                        <button className='but-send' onClick={submit} >LOG IN</button>
                    </div>
                </Col>
            
            </Row>
        </Col>
        
        <Col md='1'></Col>
    
    </Row>
    </>)
}