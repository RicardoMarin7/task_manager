import React, { useState, useContext } from 'react'
import ProjectContext from '../../context/projects/projectContext'
import TaskContext from '../../context/tasks/taskContext'

const TaskForm = () => {
    const projectContext = useContext(ProjectContext)
    const { project } = projectContext

    const taskContext = useContext(TaskContext)
    const { addTask, validateTask,getTasks } = taskContext
    


    const [task,setTask] = useState({
        name:'',
        state:false,
        proyectoID:''
    })

    if(!project){
        return null
    }

    const [actualProject] = project


    const handleChange = e =>{
        setTask({
            [e.target.name] : e.target.value
        })
    }

    const {name} = task

    const handleSubmit = e =>{
        e.preventDefault()
        if(name.trim() === ''){
            validateTask()
            return
        }

        //Agregamos id a la tarea
        task.name = task.name.trim()
        task.proyectoID = actualProject.id
        task.state = false

        //Anadimos la tarea al state
        addTask(task)

        //Reiniciamos el formulario
        setTask({
            name:'',
            state:false,
            id:''
        })

        //Obtener tareas
        getTasks(actualProject.id)
    }




    return(
        <div className="formulario">
            <form
                onSubmit={handleSubmit}
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