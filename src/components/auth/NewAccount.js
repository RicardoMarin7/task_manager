import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NewAccount = () => {

    const [newUser,setNewUser] = useState({
        name:'',
        email:'',
        password:'',
        confirm:''
    })

    const [showPassword,setShowPassword] = useState(false)

    const handleChange = e =>{
        setNewUser({
            ...newUser,
            [e.target.name]:e.target.value
        })
    }

    const handleClick = e =>{
        if(showPassword){
            setShowPassword(false)
        }
        else{
            setShowPassword(true)
        }
    }

    const handleSubmit = e =>{
        e.preventDefault()
    }

    return(
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Inicia sesion con tu cuenta</h1>
                <form onSubmit={handleSubmit}>

                    <div className="campo-form">
                        <label htmlFor="name">Nombre</label>
                        <input 
                            type="text"
                            placeholder="Ricardo"
                            id="name"
                            name="name"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email@example.com"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            onChange={handleChange}
                            placeholder="Password"
                        />
                        {showPassword ? <i className="fas fa-eye-slash icon-password" onClick={handleClick}></i> : <i className="fas fa-eye" onClick={handleClick}></i> }
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="confirm"
                            name="confirm"
                            onChange={handleChange}
                            placeholder="Confirm Password"
                        />
                        {showPassword ? <i className="fas fa-eye-slash icon-password" onClick={handleClick}></i> : <i className="fas fa-eye" onClick={handleClick}></i> }
                    </div>

                    <div className="campo-form">
                        <button className="btn-primario btn btn-block">Registrarme</button>
                    </div>

                    <Link to="/" className="enlace-cuenta">Ya tienes cuenta? Inicia sesion</Link>
                </form>
            </div>
        </div>
    )
}

export default NewAccount