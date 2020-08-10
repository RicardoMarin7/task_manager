import React from 'react'

const Task = ({task}) =>{
    const {name,state} = task

    return (
        
        <li className="tarea sombra">
            <p>{name}</p>
            <div className="estado">
                {state 
                ?(
                    <button 
                        type="button"
                        className="completo"
                    >Completo</button>
                )
                :(
                    <button 
                        type="button"
                        className="incompleto"
                    >Incompleto</button>
                )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                >Eliminar</button>
            </div>
        </li>
    )
}

export default Task