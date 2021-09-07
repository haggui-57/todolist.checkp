import './App.css';
import Addtodo from './Components/Addtodo';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <h1 style={{backgroundColor:'#0d6efd',borderColor:'#0d6efd' ,color:'white'}}> Todolist Redux</h1>
   <Addtodo />
   <TodoList />
    </div>
  );
}

export default App;
