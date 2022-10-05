import { createContext } from 'react'

//Almacena los datos
export const TaskContext = createContext()

//componente que engloba a los demas componentes hijos
export function TaskContextProvider(props) {
    let x = 20
    return (
        <>
            <TaskContext.Provider value={x}>
                {props.children}
            </TaskContext.Provider>
        </>
    )
}
