import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AOS from 'aos';
import img from '../assets/images/hero-img.svg';
import CountUp from 'react-countup';

export default ()=>{
    AOS.init();
    const data=[
        {
            num:"232",
            title:"Clients"
        },
        {
            num:"521",
            title:"Projects"
        },
        {
            num:"1453",
            title:"Support"
        },
        {
            num:"32",
            title:"Workers"
        },
    ]
    return(<>
    <Row className='mx-0 sec1-home'  >
        
        <Col md='1'></Col>
        
        <Col md='10'>
            <Row className='mx-0'>

            <Col md='6' data-aos="fade-up" data-aos-duration="1000"> 
            <h1 className='h1-1' id='home1'>
                Your Lightning Fast Delivery Partner
            </h1>
            <p className='par-1'>
                Facere distinctio molestiae nisi fugit tenetur repellat non praesentium nesciunt optio quis sit odio nemo quisquam. eius quos reiciendis eum vel eum voluptatem eum maiores eaque id optio ullam occaecati odio est possimus vel reprehenderit
            </p>
            <div style={{display:"flex",justifyContent:"right",alignItems:"center"}}>
                <input type="text" placeholder='ZIP code or citY' className='input-1'/>
                <button className='but-1'>Search</button>
            </div>
            <Row>
            {data.map((e)=>{
                return(<>
                    <Col md='3' xs='6'>
                        <CountUp start={'0'} end={e.num} duration={'3'} className='h1-num'/>
                        {/* <h1 className='h1-num'>{e.num}</h1> */}
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <div className='hr-1'></div>
                        </div>
                        <h2 className='h2-title'>{e.title}</h2>
                    </Col>
                    </>)})}
            </Row>
                    
        </Col>
        
        <Col md='6' data-aos="fade-down-right" data-aos-duration="2000" style={{display:'flex',justifyContent:"center"}}>
            <img className='img-1' src={img} alt="" />
        </Col>
            </Row>
        </Col>
        
        <Col md='1'></Col>
    </Row>
    </>)
}