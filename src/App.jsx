import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import TaskForm from './components/TaskForm';

import { tasks as data } from './data/tasks.js'

import TaskList from './components/TaskList';

function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(data)
    console.log("Render useEffect");
  }, [])

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


  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  )
}

export default App
