import { useState, useContext } from "react";
import { TaskContext } from '../context/TaskContext'


function TaskForm() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const { createTask } = useContext(TaskContext)





    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(title)
        // const newTask = {
        //     title,
        //     id: 4,
        //     description: 'algo nuevo'
        // }
        // console.log(newTask)
        createTask({ title, description })
        //Reiniciamos los valores del input
        setTitle('')
        setDescription('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Escribe tu tarea"
                    onChange={(e) => {
                        // e.preventDefault()
                        setTitle(e.target.value);
                    }}
                    value={title}
                    autoFocus

                />
                <br />
                <textarea
                    placeholder="Escribe la descripción de la tarea"
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    value={description}
                ></textarea>
                <br />
                <button >

                    Guardar
                </button>
            </form>
        </>
    )
}

export default TaskForm