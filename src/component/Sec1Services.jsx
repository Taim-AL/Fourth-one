import React from 'react';
import { Col, Row } from 'react-bootstrap';
/////////images
import img1 from '../assets/images/service1.jpg';
import img2 from '../assets/images/service2.jpg';
import img3 from '../assets/images/service3.jpg';
import img4 from '../assets/images/service4.jpg';
import img5 from '../assets/images/service5.jpg';
import img6 from '../assets/images/service6.jpg';
import Card2 from './Card2';



export default ()=>{
    const data=[
        {
            imag:img1,
            title:"STORAGE",
            about:" Cumque eos in qui numquam. Aut aspernatur perferendis sed atque quia voluptas quisquam repellendus temporibus itaqueofficiis odit",
        },
        {
            imag:img2,
            title:"LOGISTICS",
            about:"Asperiores provident dolor accusamus pariatur dolore nam id audantium ut et iure incidunt molestiae dolor ipsam ducimus occaecati nisi",
        },
        {
            imag:img3,
            title:"CARGO",
            about:"Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil",
        },
        {
            imag:img4,
            title:"TRUCKING",
            about:"Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil aut et molestiae ut et nihil",
        },
        {
            imag:img5,
            title:"PACKAGING",
            about:"Illo consequuntur quisquam delectus praesentium modi dignissimos facere vel cum onsequuntur maiores beatae consequatur magni voluptates",
        },
        {
            imag:img6,
            title:"WAREHOUSING",
            about:"Quas assumenda non occaecati molestiae. In aut earum sed natus eatae in vero. Ab modi quisquam aut nostrum unde et qui est non quo nulla",
        },
    ]
    return(<>
    <Row className='mx-0'>
        
        <Col md='1'></Col>
        
        <Col md='10'>
            <h1 className='h1-serv1' data-aos='fade-up' data-aos-duration="1500">
                OUR SERVICES
            </h1>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div className='hr-2' data-aos='fade-up' data-aos-duration="1500"></div>
            </div>
            <Row>
                {data.map((e)=>{
                    return(<>
                    <Col md='4'>
                        <Card2 imag={e.imag} title={e.title} about={e.about}/>
                    </Col>
                    </>)
                })}
            </Row>
        </Col>
        
        <Col md='1'></Col>
    
    </Row>
    </>)
}