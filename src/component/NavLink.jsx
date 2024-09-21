import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import {useLocation, useNavigate} from 'react-router-dom';

export default ({e})=>{
    const location =useLocation()
    const navigate = useNavigate()
    const [class1 , setClass1] = useState("nav-items")
    useEffect(()=>{
        location.pathname === e.to ?setClass1('nav-items1'):setClass1('nav-items')
    },[location])
    return(<>
    
    <Nav.Link onClick={()=>{navigate(e.to)}} className={class1}>{e.title}</Nav.Link>
    
    
    </>)
}