import React, { useReducer } from 'react'

import projectContext from './projectContext'
import projectReducer from './projectReducer'

const projectState = props => {
    const initialState = {
        newProject : false
    }

    //Dispatch to execute actions
    const [state,dispatch] = useReducer(projectReducer,initialState)
}