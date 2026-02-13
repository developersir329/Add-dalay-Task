import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { toast } from 'react-toastify'

function App() {
 const [text,setText] =useState("")
 const [task,setTask] = useState(JSON.parse(localStorage.getItem("task"))||[])

  
  //localstorage me data save karne ke liye
  useEffect(()=>{
    localStorage.setItem("task",JSON.stringify(task))
  },[task]);
 //localstorage se data get karne ke liye
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("task"));
    if(data) setTask(data);
  },[])
 //task ko aad karne ke liye addtask function
  const Addtask = () =>{
    if(text===""){
      toast.error('Please Add Task!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
  
});
      return
    }
    const Newtask = {
      id:Date.now(),
      text,
    }
    setTask([Newtask,...task]);
    setText("");
  }
  //task ko delete karne ke liye
  const deleteTask = (id) =>{
  setTask(task.filter((t)=> t.id !== id))
}


  return (
    <>
    <div className='main-container'>
      <div className='result'>
        {task.map((t)=>(
        <div key={t.id} className='result-box'>
          <span>
            <p>{t.text}</p>
          </span>
        <button onClick={()=>deleteTask(t.id)}>Delete</button>
        </div>
        ))}
         </div>
          <div className='task-box'>
            <h1>Add Your Daly Task</h1>
            <input type="text" placeholder='Enter Your Task' value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={Addtask} >Add Task</button>
          </div>
    </div>
    </>
  )
}

export default App
