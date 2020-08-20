import React, { useReducer } from 'react'

import TaskContext from './taskContext'
import TaskReducer from './taskReducer'

import {
    GET_TASKS,
    ADD_TASK,
    VALIDATE_TASK
} from '../../types'

const TaskState = props =>{
    const initialState = {
        tasks : [
            {name:'Crear pagina',state:true, proyectoID:1},
            {name:'Crear componente',state:true,proyectoID:2},
            {name:'Hacer que exporte a pdf',state:false,proyectoID:3},
            {name:'Crear estilos form',state:false,proyectoID:4},
            {name:'Crear pagina',state:true, proyectoID:1},
            {name:'Crear componente',state:true,proyectoID:2},
            {name:'Hacer que exporte a pdf',state:false,proyectoID:4},
            {name:'Crear estilos form',state:false,proyectoID:1},
            {name:'Crear pagina',state:true, proyectoID:3},
            {name:'Crear componente',state:true,proyectoID:2},
            {name:'Hacer que exporte a pdf',state:false,proyectoID:1},
            {name:'Crear estilos form',state:false,proyectoID:5}
        ],
        projectTasks:[],
        errorTask:false
    }

    //Dispatch to execute actions
    const [state,dispatch] = useReducer(TaskReducer,initialState)

    const getTasks = proyectoID =>{  
        dispatch({
            type:GET_TASKS,
            payload: proyectoID
        })
    }

    const addTask = task =>{  
        dispatch({
            type:ADD_TASK,
            payload: task
        })
    }

    const validateTask = () =>{
        dispatch({
            type:VALIDATE_TASK
        })
    }


    return(
        <TaskContext.Provider value={{
            tasks: state.tasks,
            projectTasks: state.projectTasks,
            getTasks,
            validateTask,
            addTask
        }}>

            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState