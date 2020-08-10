import React, { useState } from 'react'

const TaskForm = () => {

    const [task,setTask] = useState({
        name:''
    })

    const handleChange = e =>{
        setTask({
            [e.target.name] : e.target.value
        })
    }

    const {name} = task

    return(
        <div className="formulario">
            <form
                
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre de la tarea"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit" 
                        value="Agregar Tarea"
                        className="btn btn-block btn-primario"
                    />
                </div>
            </form>
        </div>
    )
}

export default TaskForm