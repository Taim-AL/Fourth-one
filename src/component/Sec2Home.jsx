import React from 'react';
/////////////icon
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Col, Row } from 'react-bootstrap';
import Card1 from './Card1';

export default()=>{
    const data=[
        {
            icon:<ShoppingCartOutlinedIcon style={{color:"#2756ff",fontSize:"50px",marginTop:"2rem",marginRight:"8px"}}/>,
            titel:"Lorem Ipsum",
            about:"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
        },
        {
            icon:<LocalShippingIcon style={{color:"#2756ff",fontSize:"60px",marginTop:"2rem",marginRight:"8px"}}/>,
            titel:"Dolor Sitema",
            about:"Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
        },
        {
            icon:<InventoryIcon style={{color:"#2756ff",fontSize:"50px",marginTop:"2rem",marginRight:"8px"}}/>,
            titel:"Sed ut perspiciatis",
            about:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        },
    ]
    return(<>
    <Row className='mx-0'>
        
        <Col md='1'></Col>
        
        <Col md='10'>
            <Row className='mx-0'>
                {data.map((e)=>{
                    return(<>
                    <Col md='4'>
                        <Card1 icon={e.icon} title={e.titel} about={e.about}/>
                    </Col>
                    </>)
                })}
            </Row>
        </Col>
        
        <Col md='1'></Col>
    
    </Row>
    </>)
}