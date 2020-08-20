import React, { useContext } from 'react'
import ProjectContext from '../../context/projects/projectContext'
import TaskContext from '../../context/tasks/taskContext'

const Project = ({proyecto}) =>{

    const projectContext = useContext(ProjectContext)
    const { actualProject } = projectContext

    const taskContext = useContext(TaskContext)
    const { getTasks } = taskContext

    const handleClick = e =>{
        actualProject(proyecto.id)
        getTasks(proyecto.id)
        
    }    

    return(
        <li>
            <button
                type="button"
                className={`btn btn-blank`}
                onClick ={handleClick}
            >{proyecto.name}</button>
        </li>
    )
}

export default Project