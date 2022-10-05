function TaskCard({ task, deleteTask }) {

    function mostrarAlerta() {
        // alert(task.id)


    }

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