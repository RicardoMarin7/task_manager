import React, { useReducer } from 'react'

import projectContext from './projectContext'
import projectReducer from './projectReducer'
import {v4 as uuid} from 'uuid'

import { 
    FORMULARIO_PROYECTO,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM
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
        errorForm : false
    }

    //Dispatch to execute actions
    const [state,dispatch] = useReducer(projectReducer,initialState)

    //Funciones para el CRUD
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

    const getProjects = () =>{
        console.log("me ejecute bro")
        dispatch({
            type:GET_PROJECTS,
            payload: projects
        })
    }

    const addProject = project =>{
        project.id = uuid()
        dispatch({
            type:ADD_PROJECT,
            payload:project
        })
    }

    const showError = () =>{
        dispatch({
            type:VALIDATE_FORM,
        })
    }





    return(
        <projectContext.Provider value ={{
            formNewProject: state.formNewProject,
            projects:state.projects,
            errorForm: state.errorForm,
            showForm,
            getProjects,
            addProject,
            showError

        }}>
            {props.children}
        </projectContext.Provider>
    )

}

export default ProjectState