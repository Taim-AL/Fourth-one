import React from 'react';
import AOS from 'aos'
import { Link } from 'react-router-dom';

export default ({imag , title , about})=>{
    AOS.init();
    return(<>
    <Link to={"/servicesDetales"} style={{textDecoration:"none",color:"#0e1d34"}}>
    <div className='card mt-3 mb-3 card2' data-aos='fade-up' data-aos-duration="1500">
        <div style={{height:"18rem",overflow:"hidden"}}>
            <img className='img-card2' src={imag} alt="" />
        </div>
        <div className='p-3'>
            <h1 className='h1-card2'>{title}</h1>
            <p className='par-card2'>{about}</p>
        </div>
    </div>
    </Link>
    </>)
}