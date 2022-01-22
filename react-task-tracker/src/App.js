import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"
import AddTask from './components/AddTask'
// import DateTimePicker from 'react-datetime-picker'
// const name = "gowtham";

const App = () =>{
  const [showAddTask, setShowAddTask]   = useState(false)
  const [tasks,setTasks] = useState([{
    id:1,
    text:'Doctors Appointment',
    day:'Feb 5th at 2:30 pm',
    reminder: true,
},
{
    id:2,
    text:'Wedding Appointment',
    day:'Feb 10th at 6:00 pm',
    reminder: false,
}
])



//Add task
const addTask =(task) => {
const id = Math.floor(Math.random() * 10000)+1 
const newTask ={id,...task}
setTasks([...tasks,newTask])
}

//delete task
const deleteTask = (id) => {
setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
 setTasks(tasks.map((task) => 
 task.id === id ? {...task,reminder:!task.reminder}:task))
}
  return (
    <div className="container">
      
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {/* <DateTimePicker /> */}
     
      {tasks.length > 0 ? (<Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/>):('No Tasks To Show')}
    </div>
  );
}

export default App;
;