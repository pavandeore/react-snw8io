import React, { useRef, useState } from 'react';
import './style.css';

export default function App() {
  const [name, setName] = useState([]);

  useEffect(() => {
    setName([{ fname: 'john', lname: 'doe' }]);
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input
        type="text"
        placeholder="firstname"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
      />
      <input
        type="text"
        placeholder="lastname"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
      />
      <br />
      {fname} - {lname}
    </div>
  );
}
