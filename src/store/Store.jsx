import { create } from 'zustand'
import { toast } from 'react-toastify'
import { persist } from 'zustand/middleware'

const Store = (set) => ({
  taskList : [
    {id : 1,name : 'work1',done : false ,editing : false},
    {id : 2,name : 'work2',done : false ,editing : false}
  ],
  addTask : (task) => set(state => {
    toast.success('Added successfully')
    return ({taskList : [...state.taskList,{
      id : Date.now(),
      name : task,
      done : false,
      editing : false
  }]})}),
  delTask : (id) => set(state => {
    toast.error('Deleted successfully')
    return ({taskList : [...state.taskList].filter((el) => el.id != id)})
  }),
  hdlEditClick : (id) => set(state => ({taskList : [...state.taskList].map(el => {
    if (el.id == id){
      return {...el,editing : !el.editing}
    }return el
  })})),
  // editTask : (id,newName) =>set(state=> ({taskList : [...state.taskList].map((el) => {
  //   if (el.id == id){
  //     return {...el, name : newName}
  //   }
  //   return {...el}})})),
  editTask : (id,newName) =>set(state=> ({taskList : [...state.taskList].map(el => el.id == id
    ?{...el,name : newName} 
    : el)})),
  checkTask : (id) => set(state => ({taskList : [...state.taskList].map(el => {
    // console.log('new',{...el, done : !el.done},'ori',{...el, done : el.done})
    if (el.id == id){
      return {...el, done : !el.done}
    }return {...el}
  })}))
})

const usePersist = {
  name: 'Store',
  getStorage : () => localStorage,
  partialize: (state) => ({
    taskList : state.taskList
  })
}

const useStore = create(persist(Store,usePersist))
export default useStore