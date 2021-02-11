
import './App.css';
//import restaurant from "./restaurant.jpg";
import React, { useReducer } from 'react';


function App() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
      <>
        <input
            type={'checkbox'}
            value={checked}
            onChange={toggle}
        />
        <p>{checked ? 'the box is checked' : 'the box is unchecked'} </p>
      </>
  );
}

export default App;

