import { useState, createContext, useEffect } from 'react'
import { tasks as data } from '../data/tasks'

//Almacena los datos
export const TaskContext = createContext()

//componente que engloba a los demas componentes hijos
export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([])



    function createTask(task) {
        // setTasks([...tasks, task])
        // setTasks([...tasks, {
        //   title: taskTitle,
        //   id: tasks.length,
        //   description: "Nueva tarea"
        // }])
        setTasks([...tasks, {
            title: task.title,
            id: tasks.length + 1,
            description: task.description
        }])
    }

    function deleteTask(taskId) {
        // console.log(tasks);
        // console.log(taskId);
        // Eliminar el elemento del arreglo
        // tasks.filter(task => task.id !== taskId)
        setTasks(tasks.filter(task => task.id !== taskId))

    }

    useEffect(() => {
        setTasks(data)
        console.log("Render useEffect");
    }, [])

    return (
        <>
            <TaskContext.Provider value={{
                tasks: tasks,
                deleteTask: deleteTask,
                createTask: createTask
            }

            }>
                {props.children}
            </TaskContext.Provider>
        </>
    )
}
