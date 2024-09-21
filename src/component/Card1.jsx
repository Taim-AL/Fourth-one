import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AOS from 'aos'
import {useNavigate} from 'react-router-dom'

export default ({icon , title , about })=>{
    const navigate = useNavigate()
    AOS.init();
    return(<>
    <div className='card-1' data-aos='fade-up' data-aos-duration="1000" >
        {icon}
        <div className='con-card'>
            <h1 className='h1-2'>{title}</h1>
            <p className='par-2'>{about}</p>
                <button className='but-learn' onClick={()=>{navigate("/servicesDetales")}}>Learn More  <ArrowForwardIcon style={{fontSize:"18px"}}/></button>
        </div>
    </div>
    </>)
}