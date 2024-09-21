import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import CollapsibleExample from '../component/Navbar';
import Card5 from '../component/Card5';



export default ()=>{
    const [data,setData] = useState('')
    const [newData,setNewData] = useState([])

    return(<>
    
    <CollapsibleExample/>
    <div className='con-todo'>

        <Row className='mx-0 mt-5' >
            
            <Col md='4'></Col>
            
            <Col md='4' className='todo shadow mt-5'>

        <Row className='mx-0'>

        <Col md='8'>
            <input type="text" className='in-1todo shadow'  placeholder='Enter a todo....' onChange={(e)=>{setData(e.target.value)}}/>
        </Col>
        
        <Col md='4' style={{display:"flex",justifyContent:"center" ,alignItems:"center"}}>
            <button className='but-1todo shadow' onClick={()=>{
                setNewData(Prev =>[...Prev,data])
            }}>Add</button>
        </Col>

        </Row>
        <hr style={{backgroundColor:"#0d6efd"}}/>

            {newData.map((e)=>{
                return(<>
                
                <Card5 e={e}/>
                
                </>)
            })}

            </Col>
            
            <Col md='4' >
                
            </Col>
        
        </Row>

    </div>
    
    
    </>)
}