import React from 'react'
import Task from './Task'

const TaskList = () =>{

    const tasks = [
        {name:'Crear pagina',state:true},
        {name:'Crear componente',state:true},
        {name:'Hacer que exporte a pdf',state:false},
        {name:'Crear estilos form',state:false}
    ]

    return(
        <React.Fragment>
            <h2>Proyecto: <span>Mallatex</span></h2>
            <ul className="listado-tareas">
                {tasks.map( task =>(
                    <Task task={task}/>
                ))}
                
            </ul>

            <button 
                type="button"
                className="btn btn-eliminar"
            >Eliminar Proyecto &times;</button>
        </React.Fragment>
    )
}

export default TaskList