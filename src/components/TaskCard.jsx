// import TaskContext from '../context/TaskContext'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskCard({ task }) {

    function mostrarAlerta() {
        // alert(task.id)
    }

    const { deleteTask } = useContext(TaskContext)


    return (

        <div className='bg-gray-800 text-white p-4 rounded-md' key={task.id}>
            <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
            <p className='text-gray-500 text-sm'>{task.description}</p>
            <button className='bg-red-500 text-white px-2 py-1 rounded-md mt-4 hover:bg-red-400'

                onClick={() => deleteTask(task.id)}>
                Eliminar Tarea
            </button>
        </div>

    )


}

export default TaskCard