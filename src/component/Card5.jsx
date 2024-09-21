import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default({e})=>{
    const [color,setColor] = useState(false)
    const [newColor,setNewColor] = useState('#0d6efd')
    const [complit, setComplit] = useState('')
    const [dis , setDis] = useState('flex')
    const [color2 ,setColor2] = useState('')
    return(<>
    
    <div>

    <Row className='mx-0 mt-3' style={{display: dis}}>

<Col md='8'>
    <h2 className='h2-todo' style={{textDecoration: complit,color: color2}}>{e}</h2>
</Col>
<Col md='4' style={{display:"flex", justifyContent:"space-around"}}>
    <button className='but-2todo' onClick={()=>{
      setColor(Prev => !Prev)  
      color?setNewColor('#0d6efd'):setNewColor('rgb(49, 241, 49)')
      color?setComplit('none'):setComplit('line-through')
      color?setColor2("#0d6efd"):setColor2("gray")
      
    }}>
        <TaskAltIcon className='task-todo' style={{color:newColor}}/>
    </button>
    <button className='but-2todo' onClick={()=>{
        setDis('none')
    }}>
        <DeleteOutlineIcon className='del-todo' />
    </button>
</Col>
</Row>

    </div>
        
    </>)
}