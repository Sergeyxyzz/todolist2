import React, { useState } from 'react';

const Todo = ({ todo, setTodo }) => {
  const [inp, setInp] = useState(null);
  const [value, setValue] = useState('');

  const removeItem = (id) => {
    const newTodo = todo.filter((elem) => elem.id !== id);
    setTodo(newTodo);
  };

  const changeStatus = (id) => {
    const newTodo = todo.filter((elem) => {
      if (elem.id === id) {
        elem.status = !elem.status;
      }
      return elem;
    });
    setTodo(newTodo);
    console.log(todo);
  };

  const openInp = (id) => {
    setInp(id);
  };

  const saveTitle = (id) => {
    const newTodo = todo.filter((elem) => {
      if (elem.id === id) {
        elem.title = value
      }
      return elem
    })
    setTodo(newTodo)
    setInp(null)
    setValue('')
  }

  return (
    <>
      {todo.map((elem, id) => {
        return (
          <div key={id} style={{ textAlign: 'center' }}>
            {inp === elem.id ? (
              <div>
                <h1>
                  {elem.title} {elem.status.toString()}
                </h1>
                <input type='text' value={value} onChange={(e) => setValue(e.target.value)}/>
                <button onClick={() => saveTitle(elem.id)}>Save</button>
              </div>
            ) : (
              <div>
                <h1>
                  {elem.title} {elem.status.toString()}
                </h1>
                <button onClick={() => removeItem(elem.id)}>delete item</button>
                <button onClick={() => changeStatus(elem.id)}>change status</button>
                <button onClick={() => openInp(elem.id)}>change title</button>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Todo;
