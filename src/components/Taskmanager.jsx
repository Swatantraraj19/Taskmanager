import React, { useReducer, useEffect } from 'react'
import { taskReducer } from '../reducer/taskreducer'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
// import { useLocalStorage } from '../hooks/useLocalStorage'


const initialState = {
  task: "",
  taskdesc: "",
  createdAt: "",
  tasklist: [],
  isEditing: false,
  editId: null

}


const initializer = (initialState) => {
  const savedTasks = localStorage.getItem('tasklist')

  if (savedTasks) {
    return JSON.parse(savedTasks)
  }

  return initialState

}

const Taskmanager = () => {


  const [state, dispatch] = useReducer(taskReducer, initialState, initializer)

  useEffect(() => {
    localStorage.setItem('tasklist', JSON.stringify(state))
  }, [state])


  return (
    <div className='min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center p-4 font-sans'>
      <div className='w-full max-w-4xl flex flex-col  md:flex-row gap-8'>
        <div className='flex flex-col justify-center w-full md:w-1/2 '>
          <TaskForm state={state} dispatch={dispatch} />
        </div>

        <div className='flex flex-col w-full md:w-1/2 '>
          <TaskList state={state} dispatch={dispatch} />
        </div>
      </div>
    </div>
  )
}

export default Taskmanager
