// import TaskContext from '../context/TaskContext'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskCard({ task, deleteTask }) {

    function mostrarAlerta() {
        // alert(task.id)
    }

    const valor = useContext(TaskContext)
    // console.log(valor)

    return (

        <div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <button onClick={() => deleteTask(task.id)}>
                Eliminar Tarea
            </button>
        </div>

    )


}

export default TaskCard