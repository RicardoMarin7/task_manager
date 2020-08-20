import React, { useContext } from 'react'
import Task from './Task'
import ProjectContext from '../../context/projects/projectContext'
import TaskContext from '../../context/tasks/taskContext'

const TaskList = () =>{  

    const projectContext = useContext(ProjectContext)
    const { project, deleteProject } = projectContext

    const taskContext = useContext(TaskContext)
    const { projectTasks } = taskContext

    if(!project){
        return <h2>No hay ningun proyecto seleccionado</h2>
    }

    const [actualProject] = project

    const handleClick = e =>{
        deleteProject(actualProject.id)
    }

    

    return(
        <React.Fragment>
            <h2>Proyecto: <span>{actualProject.name}</span></h2>
            <ul className="listado-tareas">
                {projectTasks.map( task =>(
                    <Task 
                        task={task}
                    />
                ))}
                
            </ul>

            <button 
                type="button"
                className="btn btn-eliminar"
                onClick={handleClick}
            >Eliminar Proyecto &times;</button>
        </React.Fragment>
    )
}

export default TaskList