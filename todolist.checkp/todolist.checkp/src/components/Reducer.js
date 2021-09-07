
import {ADD_TODO,
    EDIT_TODO,
    REMOVE_TODO,
    TOGLLE_COMPLITE } from "../actions/actionType"
    const initialState={
        todo:[{
            id:1,
            text:"Learn react js",
            isComplite:false
        },
        {
            id:2,
            text:"Learn Node js",
            isComplite:false
        }
        ]
    }
    const reducer = (state=initialState,action)=>{
        switch(action.type){
            case ADD_TODO :
            return ({
                ...state , todo:[...state.todo,action.payload]
            })
            case EDIT_TODO :
                return ({
                    ...state ,todo : state.todo.map(el => el.id === action.payload.id ?  action.payload :el)
                })
            case REMOVE_TODO :
                    return ({
                        ...state,todo :state.todo.filter(el => el.id !=action.payload)
                    })
            case TOGLLE_COMPLITE :
                        return ({
                            ...state, todo :state.todo.map(el=>el.id== action.payload ? {...el,isComplite:!el.isComplite}:el)
                        })
                            default:
                        return state
        }
    }
    export default reducer;