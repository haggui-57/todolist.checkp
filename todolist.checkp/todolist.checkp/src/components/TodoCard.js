import React from 'react'
import {connect} from 'react-redux'
import {remove_todo,toglle_complite} from '../redux/actions/action'
import EditTodo from './EditTodo'
import {Button} from 'react-bootstrap'

const TodoCard = ({todo,remove_todo,toglle_complite}) => {
const deletetodo =() =>{
  remove_todo(todo.id)
}
    return (
        <div>
          <h3  style={todo.isComplite ? {textDecoration :"line-through"}:{}}>{todo.text}</h3>
         <EditTodo todo={todo}/>
          <Button onClick={deletetodo} style={{margin:20 }}>Delete</Button>
          <Button onClick={()=>toglle_complite(todo.id)}>Complete</Button>      
        </div>
    )
}

export default connect(null,{remove_todo,toglle_complite}) (TodoCard);