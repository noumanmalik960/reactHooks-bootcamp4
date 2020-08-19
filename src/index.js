import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./index.css";


function Room() {

  let [isLit, setLit] = useState(true);
  let [age, setAge] = useState(19);
  let [temp, setTemp] = useState(22);
  const brightness = isLit ? "lit": "dark"

  return (
    <div className={`room ${brightness}`}>
      <br/>
      <h2>The room is {isLit ? "LIT" : "DARK"}</h2>
      <br />
      <button onClick={() => setLit(true)}>On</button>
      <button onClick={() => setLit(!isLit)}>flip</button>
      <button onClick={() => setLit(false)}>Off</button>
      <hr />

      <h2>The age is: {age}</h2>
      <button onClick={() => setAge(++age)}>incrAge</button>
      <button onClick={() => setAge(19)}>resetAge</button>
      <hr />

      <h2>Temperature is: {temp}</h2>
      <button onClick={() => setTemp(++temp)}>+</button>
      <button onClick={() => setTemp(22)}>reset</button>
      <button onClick={() => setTemp(--temp)}>-</button>
      
      <hr />

    </div>
  );
}


ReactDOM.render(<Room />, document.getElementById('root'));
