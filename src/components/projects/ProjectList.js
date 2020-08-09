import React from 'react'
import Project from './Project'

const ProjectList = () => {
    
    const proyectos = [
        {nombre:'Tienda Virtual'},
        {nombre:'Mallatex'},
        {nombre:'Fibras de coco'},
        {nombre:'Api REST for SQL Server'},
        {nombre:'Quimexsa Prods'}
    ]

    return(
        <ul className="listado-proyectos">
            {proyectos.map( proyecto =>(
                <Project 
                    proyecto={proyecto}
                />
            ))}
 
        </ul>
    )
}

export default ProjectList