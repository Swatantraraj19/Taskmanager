import React from 'react'
import { Plus, Pencil } from 'lucide-react'

const TaskForm = ({ state, dispatch }) => {
    return (
        <div className='bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl'>
            <h1 className='text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>
                Task Manager
            </h1>
            <p className='text-zinc-400 mb-8'>Keep track of your daily goals.</p>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (state.task.trim() === "") {
                        alert("Please enter a task");
                        return;
                    }
                    if (state.taskdesc.trim() === "") {
                        alert("Please enter a task description");
                        return;
                    }

                    if (state.isEditing) {
                        dispatch({ type: "UPDATE_TASK" });
                    } else {
                        dispatch({ type: "ADD_TASK" });
                    }
                }}
                className='flex flex-col gap-4'
            >
                <div className='space-y-2'>
                    <label className='text-sm font-medium text-zinc-300 ml-1'>Title</label>
                    <input
                        type="text"
                        placeholder='e.g., Finish Project'
                        className='w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-zinc-600'
                        value={state.task}
                        onChange={(e) => dispatch({ type: "CREATE_TASK", payload: (e.target.value) })}
                    />
                </div>

                <div className='space-y-2'>
                    <label className='text-sm font-medium text-zinc-300 ml-1'>Description</label>
                    <textarea
                        placeholder='Add some details...'
                        className='w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-zinc-600 resize-none h-24'
                        value={state.taskdesc}
                        onChange={(e) => dispatch({ type: "CREATE_DESC", payload: (e.target.value) })}
                    />
                </div>

                <button
                    type="submit"
                    className={`mt-2 w-full font-semibold py-3 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg ${state.isEditing ? 'bg-orange-500 hover:bg-orange-600 shadow-orange-500/20' : 'bg-blue-500 hover:bg-blue-600 shadow-indigo-500/20'} text-white`}
                >
                    {state.isEditing ? <Pencil size={20} /> : <Plus size={20} />}
                    {state.isEditing ? 'Update Task' : 'Add Task'}
                </button>
            </form>
        </div>
    )
}

export default TaskForm
