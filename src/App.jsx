import React, { useState } from 'react'
import TodoList from './TodoList'
import useStore from './store/Store'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [taskName,setTaskName] = useState('')
  const {addTask} = useStore(state => ({
    addTask : state.addTask
  }))
  return (
    <div className='w-4/5 flex flex-col mx-auto border p-4 my-10 rounded-2xl'>
      <h1 className='text-center text-3xl'>To Do List!</h1>
      <div className='flex justify-between gap-4 py-2'>
        <input className = 'input input-bordered input-primary w-full' onChange={(e) => {setTaskName(e.target.value)}} type="text"/>
        <button className = 'btn btn-primary'onClick={() => addTask(taskName)}>Add</button>
      </div>
      <TodoList/>
      <ToastContainer/>
    </div>
  )
}

export default App
