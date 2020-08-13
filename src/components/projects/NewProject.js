import React, { useState, useContext } from 'react'
import ProjectContext from '../../context/projects/projectContext'



const NewProject = () =>{

    //State form
    const projectContext = useContext(ProjectContext)
    const { formNewProject, showForm, addProject, errorForm, showError } = projectContext


    //Project state for save
    const [project,setProject] = useState({
        name:''
    })
    
    //Extract name from the state
    const {name} = project

    //Handle change for values
    const hanldeChange = e => {
        setProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }

    //Handle submit for forms
    const handleSubmit = e =>{
        e.preventDefault()

        // Validate project
        if(name === ''){
            showError()
            return
        }

        //add to state
        addProject(project)


        //Reset the form
        setProject({
            name:''
        })
    }

    const handleClick = () =>{
        showForm()
    }

    return(

        <React.Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={handleClick}
            >Nuevo Proyecto</button>

            {formNewProject ? (
                <form 
                className="formulario-nuevo-proyecto"
                onSubmit={ handleSubmit }
            >
                <input 
                    type="text"
                    className="input-text"
                    placeholder="El nombre de tu proyecto"
                    name="name"
                    onChange={hanldeChange}
                    value={name}
                />
                <button className="btn btn-block btn-primario">Agregar Proyecto</button>
            </form>
            ) : (
                null
            )}

            { errorForm ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null}
        </React.Fragment>
    )
}

export default NewProject