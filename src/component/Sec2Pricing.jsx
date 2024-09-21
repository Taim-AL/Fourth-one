import React from 'react';
import { Col, Row } from 'react-bootstrap';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { Link } from 'react-router-dom';
import AOS from 'aos';

export default ()=>{
    AOS.init();
    return(<>
    <h1 className='h1-serv1 ' style={{marginTop:"8rem"}} data-aos='fade-up' data-aos-duration="1500">
        HORIZONTAL PRICING
        </h1>
            <div  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div className='hr-2' data-aos='fade-up' data-aos-duration="1500"></div>
            </div> 

        <Row className='mx-0 '>
            
            <Col md='1'></Col>
            
            <Col md='10'>
                <Row className='mx-0 shadow mt-3 mb-3 p-3' data-aos='fade-up' data-aos-duration="1500">
                    <Col md='3' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <h1 className='h1-pric2'>
                            Free Plan
                        </h1>
                    </Col>
                    <Col md='3' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div style={{display:"flex"}}>
                        <h1 className='h1-pric'>$0</h1>
                        <h3 className='h3-pric'> / month</h3>
                    </div>
                    </Col>
                    <Col md='3' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <ul className='ul-pric2'>
                    <li className='li-pric2'>
                                <DoneOutlinedIcon className='done-pric2'/>
                                <p className='par-price2'>
                                    Nec feugiat nisl pretium
                                </p>
                            </li>
                            <li className='li-pric2'>
                                <DoneOutlinedIcon className='done-pric2'/>
                                <p className='par-price2'>
                                    Nulla at volutpat diam uteera
                                </p>
                            </li>
                            <li className='li-pric2'>
                                <ClearOutlinedIcon className='cross-price2'/>
                                <del>
                                    <p className='par-price2'>
                                        Pharetra massa massa ultricies
                                    </p>
                                </del>
                            </li>
                    </ul>
                    </Col>
                    <Col md='3' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Link style={{textDecoration:"none",color:"#fff"}} to={"/"}>
                        <button className='but2-pricing2'> Buy Now </button>
                        </Link>
                    </Col>
                </Row>

                <Row className='mx-0 shadow mt-3 mb-3 p-3' style={{backgroundColor:"#0d42ff"}} data-aos='fade-up' data-aos-duration="1500">
                    <Col md='3' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <h1 className='h1-pric3'>
                            Business Plan
                        </h1>
                    </Col>
                    <Col md='3' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div style={{display:"flex"}}>
                        <h1 className='h1-pric' style={{color:"#fff"}}>$29</h1>
                        <h3 className='h3-pric' style={{color:"#fff"}}> / month</h3>
                    </div>
                    </Col>
                    <Col md='3' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <ul className='ul-pric2'>
                    <li className='li-pric2'>
                                <DoneOutlinedIcon className='done-pric3'/>
                                <p className='par-price3'>
                                    Nec feugiat nisl pretium
                                </p>
                            </li>
                            <li className='li-pric2'>
                                <DoneOutlinedIcon className='done-pric3'/>
                                <p className='par-price3'>
                                Nec feugiat nisl pretium
                                </p>
                            </li>
                            <li className='li-pric2'>
                                <DoneOutlinedIcon className='done-pric3'/>
                                <p className='par-price3'>
                                    Nulla at volutpat diam uteera
                                </p>
                            </li>
                        </ul>
                    </Col>
                    <Col md='3' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Link style={{textDecoration:"none",color:"#fff"}} to={"/"}>
                        <button className='but3-pricing'> Buy Now </button>
                        </Link>
                    </Col>
                </Row>
        
                <Row className='mx-0 shadow mt-3 p-3' style={{marginBottom:"8rem"}} data-aos='fade-up' data-aos-duration="1500">
                    <Col md='3' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <h1 className='h1-pric2'>
                            Developer Plan
                        </h1>
                    </Col>
                    <Col md='3' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div style={{display:"flex"}}>
                        <h1 className='h1-pric'>$49</h1>
                        <h3 className='h3-pric'> / month</h3>
                    </div>
                    </Col>
                    <Col md='3' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <ul className='ul-pric2'>
                    <li className='li-pric2'>
                                <DoneOutlinedIcon className='done-pric2'/>
                                <p className='par-price2'>
                                    Quam adipiscing vitae proin
                                </p>
                            </li>
                            <li className='li-pric2'>
                                <DoneOutlinedIcon className='done-pric2'/>
                                <p className='par-price2'>
                                    Nec feugiat nisl pretium
                                </p>
                            </li>
                            <li className='li-pric2'>
                                <DoneOutlinedIcon className='done-pric2'/>
                                <p className='par-price2'>
                                    Nulla at volutpat diam uteera
                                </p>
                            </li>
                    </ul>
                    </Col>
                    <Col md='3' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Link style={{textDecoration:"none",color:"#fff"}} to={"/"}>
                        <button className='but2-pricing2'> Buy Now </button>
                        </Link>
                    </Col>
                </Row>
            </Col>
            
            <Col md='1'></Col>
        
        </Row>
    </>)
}