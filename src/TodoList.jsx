import React, { useState } from 'react'
import useStore from './store/Store';

const TodoList = () => {
  const [editedName,setEditedName] = useState('')
  const cardBody = 'my-auto collapse-title text-xl font-medium text-base'
  const { taskList,delTask,editTask,checkTask,hdlEditClick} = useStore((state) => ({
    taskList: state.taskList,
    delTask : state.delTask,
    editTask : state.editTask,
    checkTask : state.checkTask,
    hdlEditClick : state.hdlEditClick
  }));  
  
  return (
    <div>
      <div>
        <ol className='flex flex-col gap-2'>
          {taskList.map((el)=>(
          <div className='flex justify-between border px-3 py-2' key={el.id}>
            {el.editing?
            <input className='my-auto w-3/4 p-4' onChange={e => setEditedName(e.target.value)} type="text"/>
            :!el.done
            ?<div className={cardBody} onClick={() => checkTask(el.id)}>{el.name}</div>
            :<div className={cardBody} onClick={() => checkTask(el.id)}><s>{el.name}</s></div>
            }
            <div className='flex gap-4 border-white items-center'>
              {el.done
              ?<div><i>Can't Edit</i></div>
              :!el.editing?
              <button onClick = {() => {hdlEditClick(el.id)}}>Edit</button>
              :<button onClick = {() => {
                el.editing = !el.editing
                editTask(el.id,editedName)
              }}>Confirm</button>}
              <button className='h-20' onClick={() => delTask(el.id)}>Delete</button>
            </div>
          </div>))}
        </ol>
      </div>
    </div>
  )
}

export default TodoList