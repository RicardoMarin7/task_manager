import React, { useState } from 'react'

const NewProject = () =>{
    //Project state for save
    const [project,setProject] = useState({
        name:'',
        id:''
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

        //add to state

        //Reset the form
    }

    return(

        <React.Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >Nuevo Proyecto</button>

            <form 
                className="formulario-nuevo-proyecto"
                onSubmit={handleSubmit}
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
        </React.Fragment>
    )
}

export default NewProject