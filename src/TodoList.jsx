import React from 'react'
import useStore from './store/Store';

const TodoList = () => {
  const cardBody = 'collapse-title text-xl font-medium text-base'
  const { taskList,delTask,editTask,checkTask} = useStore((state) => ({
    taskList: state.taskList,
    delTask : state.delTask,
    editTask : state.editTask,
    checkTask : state.checkTask
  }));  
  
  return (
    <div>
      <div>
        <ol className='flex flex-col gap-2'>
          {taskList.map((el)=>(
          <div className='flex justify-between border px-3' key={el.id}>
            {!el.done
            ?<div className={cardBody} onClick={() => checkTask(el.id)}>{el.name}</div>
            :<div className={cardBody} onClick={() => checkTask(el.id)}><s>{el.name}</s></div>
            }
            <div className='flex gap-4'>
              <button onClick={() => editTask(el.id,prompt('Enter New Name'))}>Edit</button>
              <button onClick={() => delTask(el.id)}>Delete</button>
            </div>
          </div>))}
        </ol>
      </div>
    </div>
  )
}

export default TodoList
