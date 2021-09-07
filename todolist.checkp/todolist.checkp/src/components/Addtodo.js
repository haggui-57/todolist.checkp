import React ,{useState} from 'react'
import {connect} from 'react-redux'
import {add_todo} from '../redux/actions/action'
import {Button,InputGroup ,FormControl ,Row,Col} from 'react-bootstrap'

const Addtodo = ({add_todo}) => {
const [text,setText]=useState("")
const HandelSubmit =(e)=>{
e.preventDefault();
if(text.trim()===''){
    alert('enter your todo')
}else{const newtodo ={
    id:Math.random(),
    text :text ,
    isComplite:false
}
add_todo(newtodo)
setText("")}

}
    return (
        <div>
            <Row className="justify-content-md-center">
            <Col md="auto">
            <InputGroup className="mb-3">
    <FormControl type="text" placeholder="Enter your next todo" value={text} onChange={(e)=>setText(e.target.value)}
      placeholder="Enter your next todo"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"/>
    <InputGroup.Append>
      <Button  onClick={HandelSubmit} variant="outline-secondary">Add</Button>
    </InputGroup.Append>
  </InputGroup>
  </Col>
  </Row>
</div>
    )
}

export default connect(null ,{add_todo})(Addtodo;