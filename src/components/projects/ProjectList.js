import React, { useContext, useEffect } from 'react'
import Project from './Project'
import ProjectContext from '../../context/projects/projectContext'

const ProjectList = () => {

    const projectContext = useContext(ProjectContext)
    const { projects , getProjects } = projectContext


    useEffect( () =>{
        getProjects()
        // eslint-disable-next-line
    }, [])


    if (!projects) return null;

    return(
        <ul className="listado-proyectos">
            {projects.map( proyecto =>(
                <Project 
                    proyecto={proyecto}
                    key = {proyecto.id}
                />
            ))}
        </ul>
    )
}

export default ProjectList