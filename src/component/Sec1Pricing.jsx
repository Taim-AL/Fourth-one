import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AOS from 'aos'
///////icon
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { Link } from 'react-router-dom';

export default ()=>{
    AOS.init();
    return(<>
    <Row className='mx-0 mb-5'>
        
        <Col md='1'></Col>
        
        <Col md='10'>
        <h1 className='h1-serv1' data-aos='fade-up' data-aos-duration="1500">
                PRICING
        </h1>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div className='hr-2' data-aos='fade-up' data-aos-duration="1500"></div>
            </div>  
            <Row className='mx-0'>
                
                <Col md='4' className='mt-5' data-aos='fade-right' data-aos-duration="1500">
                    <div className='card shadow p-3'>
                        <h2 className='h2-pric'>Free Plan</h2>
                        <div style={{display:"flex"}}>
                            <h1 className='h1-pric'>$0</h1>
                            <h3 className='h3-pric'> / month</h3>
                        </div>
                        <ul className='ul-pric'>
                            <li className='li-pric'>
                                <DoneOutlinedIcon className='done-pric'/>
                                <p className='par-price'>
                                    Quam adipiscing vitae proin
                                </p>
                            </li>
                            <li className='li-pric'>
                                <DoneOutlinedIcon className='done-pric'/>
                                <p className='par-price'>
                                    Nec feugiat nisl pretium
                                </p>
                            </li>
                            <li className='li-pric'>
                                <DoneOutlinedIcon className='done-pric'/>
                                <p className='par-price'>
                                    Nulla at volutpat diam uteera
                                </p>
                            </li>
                            <li className='li-pric'>
                                <ClearOutlinedIcon className='cross-price'/>
                                <del>
                                    <p className='par-price'>
                                        Pharetra massa massa ultricies
                                    </p>
                                </del>
                            </li>
                            <li className='li-pric'>
                                <ClearOutlinedIcon className='cross-price'/>
                                <del>
                                    <p className='par-price'>
                                        Massa ultricies mi quis hendrerit
                                    </p>
                                </del>
                            </li>
                        </ul>
                        <Link style={{textDecoration:"none",color:"#0d42ff"}} to={"/"}>
                        <button className='but1-pricing'> Buy Now </button>
                        </Link>
                    </div>
                </Col>
                
                <Col md='4' className='mt-5' data-aos='fade-down' data-aos-duration="1500">
                    <div className='card shadow p-3' style={{borderTop:"4px solid #0d42ff"}}>
                        <h2 className='h2-pric'>Business Plan</h2>
                        <div style={{display:"flex"}}>
                            <h1 className='h1-pric'>$29</h1>
                            <h3 className='h3-pric'> / month</h3>
                        </div>
                        <ul className='ul-pric'>
                            <li className='li-pric'>
                                <DoneOutlinedIcon className='done-pric'/>
                                <p className='par-price'>
                                    Quam adipiscing vitae proin
                                </p>
                            </li>
                            <li className='li-pric'>
                                <DoneOutlinedIcon className='done-pric'/>
                                <p className='par-price'>
                                    Nec feugiat nisl pretium
                                </p>
                            </li>
                            <li className='li-pric'>
                                <DoneOutlinedIcon className='done-pric'/>
                                <p className='par-price'>
                                    Nulla at volutpat diam uteera
                                </p>
                            </li>
                            <li className='li-pric'>
                                <DoneOutlinedIcon className='done-pric'/>
                                <p className='par-price'>
                                    Pharetra massa massa ultricies
                                </p>
                            </li>
                            <li className='li-pric'>
                                <DoneOutlinedIcon className='done-pric'/>
                                <p className='par-price'>
                                    Massa ultricies mi quis hendrerit
                                </p>
                            </li>
                        </ul>
                        <Link style={{textDecoration:"none",color:"#fff"}} to={"/"}>
                        <button className='but2-pricing'> Buy Now </button>
                        </Link>
                    </div>
                </Col>
                
                <Col md='4' className='mt-5' data-aos='fade-left' data-aos-duration="1500">
                    <div className='card shadow p-3'>
                        <h2 className='h2-pric'>Developer Plan</h2>
                        <div style={{display:"flex"}}>
                            <h1 className='h1-pric'>$49</h1>
                            <h3 className='h3-pric'> / month</h3>
                        </div>
                        <ul className='ul-pric'>
                            <li className='li-pric'>
                                <DoneOutlinedIcon className='done-pric'/>
                                <p className='par-price'>
                                    Quam adipiscing vitae proin
                                </p>
                            </li>
                            <li className='li-pric'>
                                <DoneOutlinedIcon className='done-pric'/>
                                <p className='par-price'>
                                    Nec feugiat nisl pretium
                                </p>
                            </li>
                            <li className='li-pric'>
                                <DoneOutlinedIcon className='done-pric'/>
                                <p className='par-price'>
                                    Nulla at volutpat diam uteera
                                </p>
                            </li>
                            <li className='li-pric'>
                                <DoneOutlinedIcon className='done-pric'/>
                                <p className='par-price'>
                                    Pharetra massa massa ultricies
                                </p>
                            </li>
                            <li className='li-pric'>
                                <DoneOutlinedIcon className='done-pric'/>
                                <p className='par-price'>
                                    Massa ultricies mi quis hendrerit
                                </p>
                            </li>
                        </ul>
                        <Link style={{textDecoration:"none",color:"#0d42ff"}} to={"/"}>
                        <button className='but1-pricing'> Buy Now </button>
                        </Link>
                    </div>
                </Col>
            
            </Row>
        </Col>
        
        <Col md='1'></Col>
    
    </Row>
    </>)
}