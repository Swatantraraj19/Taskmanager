import React from 'react'
import { Trash2, CheckCircle2, Pencil } from 'lucide-react'

const TaskList = ({ state, dispatch }) => {
    return (
        <>
            <div className='flex items-center justify-between mb-6'>
                <h2 className='text-xl font-semibold text-zinc-200'>Your Tasks</h2>
                <div className='flex gap-4 items-center'>
                    {state.tasklist.length > 0 && (
                        <button
                            onClick={() => dispatch({ type: "DELETE_ALL" })}
                            className='text-xs text-red-400 hover:text-red-300 transition-colors'
                        >
                            Delete All
                        </button>
                    )}
                    <span className='bg-zinc-800 text-zinc-400 text-xs px-3 py-1 rounded-full border border-zinc-700'>
                        {state.tasklist.length} {state.tasklist.length === 1 ? 'Task' : 'Tasks'}
                    </span>
                </div>
            </div>

            <div className='flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar '>
                {state.tasklist.length === 0 ? (
                    <div className='h-64 flex flex-col items-center justify-center text-zinc-500 border-2 border-dashed border-zinc-800 rounded-2xl bg-zinc-900/50'>
                        <CheckCircle2 size={48} className='mb-4 opacity-20' />
                        <p>No tasks yet. Add one to get started!</p>
                    </div>
                ) : (
                    state.tasklist.map((item, index) => (
                        <div
                            key={index}
                            className='group bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-xl p-5 transition-all hover:shadow-lg hover:shadow-black/20 flex justify-between items-start animate-in fade-in slide-in-from-bottom-4 duration-300'
                        >
                            <div className='flex items-start gap-4 flex-1 pr-4'>
                                <button
                                    onClick={() => dispatch({ type: "TOGGLE_TASK", payload: index })}
                                    className={`mt-1 flex-shrink-0 transition-colors ${item.isCompleted ? 'text-green-500' : 'text-zinc-600 hover:text-zinc-400'}`}
                                >
                                    <CheckCircle2 size={22} className={item.isCompleted ? "fill-current opacity-100" : "opacity-50"} />
                                </button>
                                <div>
                                    <h3 className={`font-semibold mb-1 transition-all ${item.isCompleted ? 'text-zinc-500 line-through decoration-zinc-700' : 'text-zinc-100'}`}>{item.task}</h3>
                                    <p className={`text-sm leading-relaxed transition-all ${item.isCompleted ? 'text-zinc-600' : 'text-zinc-400'}`}>{item.taskdesc}</p>
                                    <span className='text-xs text-zinc-600 mt-3 block'>{item.createdAt}</span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <button
                                    onClick={() => dispatch({ type: "EDIT_REQUEST", payload: index })}
                                    className='text-zinc-500 hover:text-orange-400 p-2 hover:bg-orange-400/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100'
                                    title="Edit task"
                                >
                                    <Pencil size={18} />
                                </button>
                                <button
                                    onClick={() => dispatch({ type: "DELETE_TASK", payload: (index) })}
                                    className='text-zinc-500 hover:text-red-400 p-2 hover:bg-red-400/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100'
                                    title="Delete task"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}

export default TaskList
