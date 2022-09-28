import { useState } from 'react';
import Form from './components/Form';
import Todo from './components/Todo';

function App() {
  
  const [todo, setTodo] = useState([
    { id: 1, title: 'i am n1', status: true },
    { id: 2, title: 'i am n2', status: true },
    { id: 3, title: 'i am n3', status: false },
  ]);

  return (
    <div className="App">
      <Form todo={todo} setTodo={setTodo}/>
      <Todo todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
