import React, { useState } from 'react';

const Form = ({ todo, setTodo }) => {
  const [value, setValue] = useState('');


  const addTitle = () => {
    if (value) {
      const newTodo = [
        ...todo,
        {
          id: Math.floor(Math.random() * 999999),
          title: value,
          status: true,
        },
      ];
      setTodo(newTodo);
      setValue('');
    }
  };



  return (
    <div style={{ textAlign: 'center' }}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => addTitle()}>add title</button>

    </div>
  );
};

export default Form;
