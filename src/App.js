import React, { useRef, useState } from 'react';
import './style.css';

export default function App() {
  const [name, setName] = useState(null);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input
        type="text"
        placeholder="firstname"
        value={name.fname}
        onChange={(e) => setName({ fname: e.target.value })}
      />
      <input
        type="text"
        placeholder="lastname"
        value={name.lname}
        onChange={(e) => setName({ lname: e.target.value })}
      />
      <br />
      {name.fname} - {name.lname}
    </div>
  );
}
