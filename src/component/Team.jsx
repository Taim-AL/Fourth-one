import React from 'react';
import { Col, Row } from 'react-bootstrap';
///////////image
import img1 from '../assets/images/team/team-1.jpg';
import img2 from '../assets/images/team/team-2.jpg';
import img3 from '../assets/images/team/team-3.jpg';
import Card4 from './Card4';

export default ()=>{
    const data=[
        {
            img:img1,
            name:"Walter White",
            work:" Web Development",
            about:"Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut",
        },
        {
            img:img2,
            name:"Sarah Jhinson",
            work:"Marketing",
            about:"Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus",
        },
        {
            img:img3,
            name:"William Anderson",
            work:"Content",
            about:"Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara",
        },
    ]
    return(<>
    <h1 className='h1-serv1 mt-5' data-aos='fade-up' data-aos-duration="1500">
            OUR TEAM
        </h1>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div className='hr-2' data-aos='fade-up' data-aos-duration="1500"></div>
            </div> 
    <Row className='mx-0'>
        
        <Col md='1'></Col>
        
        <Col md='10'>
            <Row className='mx-0'> 
                {data.map((e)=>{
                    return(<>
                    <Col md='4'>
                        <Card4 about={e.about} work={e.work} name={e.name} img={e.img}/>
                    </Col>
                    </>)
                })}
            </Row>
        </Col>
        
        <Col md='1'></Col>
    
    </Row>
    </>)
}