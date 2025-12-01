import React, { useState } from 'react'
import { Trash2, Plus, CheckCircle2 } from 'lucide-react'

const Taskmanager = () => {
  const [task, settask] = useState('')
  const [taskdesc, settaskdesc] = useState('')
  const [tasklist, settasklist] = useState([])

  function add(e) {
    e.preventDefault()
    if (!task.trim()) return
    const arr = [...tasklist]
    arr.push({ task, taskdesc, createdAt: new Date().toLocaleTimeString() })
    settasklist(arr)
    settask('')
    settaskdesc('')
  }

  function deleteTask(index) {
    const arr = [...tasklist]
    arr.splice(index, 1)
    settasklist(arr)
  }

  return (
    <div className='min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center p-4 font-sans'>

      <div className='w-full max-w-4xl flex flex-col  md:flex-row gap-8'>

        
        <div className='flex flex-col justify-center w-full md:w-1/2 '>
          <div className='bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl'>
            <h1 className='text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>
              Task Manager
            </h1>
            <p className='text-zinc-400 mb-8'>Keep track of your daily goals.</p>

            <form onSubmit={add} className='flex flex-col gap-4'>
              <div className='space-y-2'>
                <label className='text-sm font-medium text-zinc-300 ml-1'>Title</label>
                <input
                  type="text"
                  placeholder='e.g., Finish Project'
                  className='w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-zinc-600'
                  value={task}
                  onChange={(e) => settask(e.target.value)}
                />
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-medium text-zinc-300 ml-1'>Description</label>
                <textarea
                  placeholder='Add some details...'
                  className='w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-zinc-600 resize-none h-24'
                  value={taskdesc}
                  onChange={(e) => settaskdesc(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className='mt-2 w-full bg-indigo-500 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20'
              >
                <Plus size={20} />
                Add Task
              </button>
            </form>
          </div>
        </div>

        
        <div className='flex flex-col w-full md:w-1/2 '>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-xl font-semibold text-zinc-200'>Your Tasks</h2>
            <span className='bg-zinc-800 text-zinc-400 text-xs px-3 py-1 rounded-full border border-zinc-700'>
              {tasklist.length} {tasklist.length === 1 ? 'Task' : 'Tasks'}
            </span>
          </div>

          <div className='flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar '>
            {tasklist.length === 0 ? (
              <div className='h-64 flex flex-col items-center justify-center text-zinc-500 border-2 border-dashed border-zinc-800 rounded-2xl bg-zinc-900/50'>
                <CheckCircle2 size={48} className='mb-4 opacity-20' />
                <p>No tasks yet. Add one to get started!</p>
              </div>
            ) : (
              tasklist.map((item, index) => (
                <div
                  key={index}
                  className='group bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-xl p-5 transition-all hover:shadow-lg hover:shadow-black/20 flex justify-between items-start animate-in fade-in slide-in-from-bottom-4 duration-300'
                >
                  <div className='flex-1 pr-4'>
                    <h3 className='font-semibold text-zinc-100 mb-1'>{item.task}</h3>
                    <p className='text-sm text-zinc-400 leading-relaxed'>{item.taskdesc}</p>
                    <span className='text-xs text-zinc-600 mt-3 block'>{item.createdAt}</span>
                  </div>
                  <button
                    onClick={() => deleteTask(index)}
                    className='text-zinc-500 hover:text-red-400 p-2 hover:bg-red-400/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100'
                    title="Delete task"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
        
 
      </div>

    </div>
  )
}

export default Taskmanager