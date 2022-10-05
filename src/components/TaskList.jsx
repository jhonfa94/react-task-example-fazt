import TaskCard from "./TaskCard"


// console.log(tasks);
export default function TaskList({ tasks, deleteTask }) {

    if (tasks.length === 0) {
        return <h1>No hay tareas aún</h1>
    }

    return (
        <div>
            {
                tasks.map((task) => (
                    <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
                ))
            }
        </div>
    )
}
