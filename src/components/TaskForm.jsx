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
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
                <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
                <input type="text" placeholder="Escribe tu tarea"
                    onChange={(e) => {
                        // e.preventDefault()
                        setTitle(e.target.value);
                    }}
                    value={title}
                    className="bg-slate-300 p-3 w-full mb-2"
                    autoFocus

                />
                <br />
                <textarea
                    placeholder="Escribe la descripción de la tarea"
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    value={description}
                    className="bg-slate-300 p-3 w-full mb-2"
                ></textarea>
                <br />
                <button className="bg-indigo-700 px-3 py-1 text-white hover:bg-indigo-500">

                    Guardar
                </button>
            </form>
        </div>
    )
}

export default TaskForm