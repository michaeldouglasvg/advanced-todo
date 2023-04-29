import React, { createContext, useState } from "react";
import Axios from "axios";


export const TaskContext = createContext(null);

export const TaskContextProvider = (props) => {
 const[tasktitle, setTasktitle] = useState('');
 const[taskmessage, setTaskmessage] = useState('');
 const[taskreminder, setTaskreminder] = useState('');
 const[reminderdate, setREminderdate] = useState('');
 const[tasks, setTasks] = useState([{}]);

 // Add single task to task array
 const updateTaskArray = () => {
  setTasks(...tasks, {tasktitle, taskmessage, taskreminder, reminderdate})
 }

 // Checking if all filds are filled
 const onSaveTask = (e) => {
  e.preventDefault();

  if(tasktitle === ''){
   alert("Task title must be provided")
  }

  if(taskmessage === ''){
   alert("Task Text must be provided")
  }

  if(taskreminder === ''){
   alert("Task Reminder must be provided");
  }
  
  if(taskreminder === 'true' && reminderdate === ''){
   alert("Reminder date must be set if Task reminder is On");
   return false
  }

  Axios.post("http://localhost:3001/api/savetask", {
    tasktitle: tasktitle, 
    taskmessage: taskmessage, 
    taskreminder: taskreminder, 
    reminderdate: reminderdate,
   })
   .then((res) => res.json())
   .catch((err) => console.log(err))
  }

 
 const TaskContextValues = {tasktitle, taskmessage, taskreminder, reminderdate, tasks, setTasktitle, setTaskmessage, setTaskreminder, setREminderdate, updateTaskArray, onSaveTask}

 return (
  <TaskContext.Provider value={TaskContextValues}>{props.children}</TaskContext.Provider>
 )
}