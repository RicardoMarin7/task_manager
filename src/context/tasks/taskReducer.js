import {
    GET_TASKS, 
    ADD_TASK,
    VALIDATE_TASK
} from '../../types'


export default (state,action) =>{
    switch(action.type){
        case GET_TASKS:
            return{
                ...state,
                projectTasks: state.tasks.filter( task => task.proyectoID === action.payload)
            }

        case ADD_TASK:
            return{
                ...state,
                tasks: [...state.tasks,action.payload],
                errorTask:false
            }

        case VALIDATE_TASK:
            return{
                ...state,
                errorTask:true
            }

        


        default:
        return state
    }
    
}