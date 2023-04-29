import React, { useState } from 'react';
import { SingleTaskStyled, TaskHeader, TaskMessageStyled } from './styled/Singletasks';
import { FaClock, FaTrashAlt, FaEdit, FaChevronRight, FaChevronDown } from 'react-icons/fa';

const Singletask = () => {
 const[opensingleTask, setOpensingletask] = useState(false);

  return (
    <SingleTaskStyled>
     <TaskHeader onClick={() => {setOpensingletask(!opensingleTask)}}
     style={{background: opensingleTask ? "linear-gradient(270deg, blue, purple, skyblue)" : "silver"}}>
      <div className='LeftSection'>
       <div className='Showexpand' 
       style={{background: opensingleTask ? "blue" : "silver"}}>
        {!opensingleTask ? 
        <FaChevronRight scale={15}/>
       :
       <FaChevronDown scale={15}/>
       }
       </div>
       <div className='Titlemsg'>
         <p style={{color: opensingleTask ? "white" : "black"}}>Walking pets and washing dishes</p>
         <p style={{color: opensingleTask ? "whitesmoke" : "grey"}}>Saved on: 21/05/2019 at 8:10am</p>
       </div>
      </div>
      <div className='Statusclock'>
       <FaClock size={15}/>
       <p style={{color: opensingleTask ? "white" : "grey"}}>On</p>
      </div>
     </TaskHeader>

     {/* Task message and manipulations */}
     {opensingleTask && <TaskMessageStyled>
      <p>Intends to be a world-class geographic Web framework. Its goal is to make it as easy as possible to build GIS Web applications and he to build GIS Web applications and harness the power of spatiarness the power of spatially eIntends to be a world-class geographic Web framework. Its goal is to make it as easy as possible to build GIS Web d data.</p>
      <div className='Manipulatetask'>
       <div><FaEdit size={15}/></div>
       <div><FaTrashAlt size={15}/></div>
      </div>
     </TaskMessageStyled>}
    </SingleTaskStyled>
  );
}

export default Singletask;
