import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CollapsibleExample from '../component/Navbar';
import img from '../assets/images/service-details.jpg';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import Footer from '../component/Footer';
import AOS from 'aos';

export default ()=>{
    AOS.init();
    return(<>
    <CollapsibleExample/>
    <Row className='mx-0 detales1'>
        
        <Col md='3'></Col>
        
        <Col md='6'>
            <h1 className='h1-detales' >
                Service Details
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
                <Link to={'/'} style={{textDecoration:"none",paddingRight:"0.5rem"}}>
                    Home    /
                </Link>
                Service Details
            </h2>
        </Col>
        
        <Col md='1'></Col>
    
    </Row>
    <Row className='mx-0 mt-5'>
        
        <Col md='1'></Col>
        
        <Col md='10'>
            <Row className='mx-0'>
                
                <Col md='4' data-aos='fade-down' data-aos-duration="1500">
                    <div className='card'>
                        <ul className='ul-detales'>
                            <li className='li-detales'>
                                <strong className='strong-li'>|</strong>
                                Storage
                            </li>
                            <li className='li-detales'>
                                <strong className='strong-li'>|</strong>
                                Logistics
                            </li>
                            <li className='li-detales'>
                                <strong className='strong-li'>|</strong>
                                Cargo
                            </li>
                            <li className='li-detales'>
                                <strong className='strong-li'>|</strong>
                                Trucking
                            </li>
                            <li className='li-detales'>
                                <strong className='strong-li'>|</strong>
                                Packaging
                            </li>
                            <li className='li-detales'>
                                <strong className='strong-li'>|</strong>
                                Warehousing
                            </li>
                        </ul>
                    </div>
                    <h3 className='h3-detales'>
                        Enim qui eos rerum in delectus
                    </h3>
                    <p className='par2-detales'>
                        Nam voluptatem quasi numquam quas fugiat ex temporibus quo est. Quia aut quam quod facere ut non occaecati ut aut. Nesciunt mollitia illum tempore corrupti sed eum reiciendis. Maxime modi rerum.
                    </p>
                </Col>
                
                <Col md='8' data-aos='fade-down' data-aos-duration="1500">
                    <img  style={{width:"100%"}} src={img} alt="" />
                    <h1 className='h1-detales2'>
                        Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas dolorem ut voluptas
                    </h1>
                    <p className='par2-detales'>
                        Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et doloremque consequuntur. Accusantium labore reprehenderit error temporibus saepe perferendis fuga doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.
                    </p>
                    <p className='par2-detales'>
                        <strong><DoneOutlinedIcon className='done-detales'/></strong> Aut eum totam accusantium voluptatem.
                    </p>
                    <p className='par2-detales'>
                        <strong><DoneOutlinedIcon className='done-detales'/></strong> Assumenda et porro nisi nihil nesciunt voluptatibus.
                    </p>
                    <p className='par2-detales'>
                        <strong><DoneOutlinedIcon className='done-detales'/></strong> Ullamco laboris nisi ut aliquip ex ea
                    </p>
                    <p className='par2-detales'>
                        Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. Deleniti quam sequi optio iste veniam repellat odit. Aut pariatur itaque nesciunt fuga.
                    </p>
                    <p className='par2-detales' style={{marginBottom:"5rem"}}> 
                        Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut consequuntur recusandae mollitia doloremque est architecto cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex repellendus eveniet velit sint quia sapiente cumque. Et ipsa perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum. Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae ipsum at consequatur vero. Architecto ut pariatur autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias explicabo ea.
                    </p>
                </Col>
            
            </Row>
        </Col>
        
        <Col md='1'></Col>
    
    </Row>
    <Footer/>
    </>)
}