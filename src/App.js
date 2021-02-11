
import './App.css';
//import restaurant from "./restaurant.jpg";
import React, { useState, useEffect } from 'react';


function App() {
  const [emotion, setEmotion] = useState('happy');
  const [secondary, setSecondary] = useState('tired');

  useEffect(() =>{
    console.log('Its ' + emotion  + ' around here!');
  }, [emotion]);

  useEffect(() =>{
    console.log('Its ' + secondary  + ' around here!');
  }, [secondary]);


  return (
      <>
        <h1>Current emotion is {emotion} and {secondary}.</h1>
        <button onClick={() => setEmotion('happy')}>
          Happy
        </button>
        <button onClick={() => setEmotion('frustrated')}>
          Frustrate
        </button>
        <button onClick={() => setEmotion('enthusiastic')}>
          Enthuse
        </button>
        <button onClick={()=> setSecondary('crabby')}>
          Crabbify
        </button>
      </>
  );
}

export default App;

