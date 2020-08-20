import React, { useReducer } from 'react'

import projectContext from './projectContext'
import projectReducer from './projectReducer'
import {v4 as uuid} from 'uuid'

import { 
    FORMULARIO_PROYECTO,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    ACTUAL_PROJECT,
    DELETE_PROJECT
} from '../../types'




const ProjectState = props => {

    const projects = [
        {id:1, name:'Tienda Virtual'},
        {id:2, name:'Mallatex'},
        {id:3, name:'Fibras de coco'},
        {id:4, name:'Api REST for SQL Server'},
        {id:5, name:'Quimexsa Prods'}
    ]
    
    const initialState = {
        projects:[],
        formNewProject : false,
        errorForm : false,
        project : null
    }

    //Dispatch to execute actions
    const [state,dispatch] = useReducer(projectReducer,initialState)

    //Funciones para el CRUD
    // Cambia el estado de el formulario de proyecto
    const showForm = () =>{
        let form = false
        if(state.formNewProject){
            form = false
        }
        else(
            form = true
        )

        dispatch({
            type: FORMULARIO_PROYECTO,
            payload: form
        })
    }

    //Obtiene todos los proyectos
    const getProjects = () =>{
        dispatch({
            type:GET_PROJECTS,
            payload: projects
        })
    }

    //Add project to state
    const addProject = project =>{
        project.id = uuid()
        dispatch({
            type:ADD_PROJECT,
            payload:project
        })
    }

    //Muestra el error
    const showError = () =>{
        dispatch({
            type:VALIDATE_FORM,
        })
    }

    //Selecciona el proyecto que el usuario le dio click
    const actualProject = projectID =>{
        dispatch({
            type:ACTUAL_PROJECT,
            payload: projectID
        })
    }

    //Delete project
    const deleteProject = projectID =>{
        dispatch({
            type:DELETE_PROJECT,
            payload: projectID
        })
    }





    return(
        <projectContext.Provider value ={{
            formNewProject: state.formNewProject,
            projects:state.projects,
            errorForm: state.errorForm,
            project:state.project,
            showForm,
            getProjects,
            addProject,
            showError,
            actualProject,
            deleteProject

        }}>
            {props.children}
        </projectContext.Provider>
    )

}

export default ProjectState