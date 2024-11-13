import './App.css';
import { useEffect, useState } from 'react';

function App() {
const [number, setNumber] = useState(0)
const [name, setName] = useState("Mehmet")



useEffect(() =>{
  console.log("Component mount edildi");
  
}, []);

useEffect(() => {
  console.log("Number State güncellendi");
  
}, [number]);

useEffect(() => {
  console.log("Name State güncellendi");
  
}, [name]);

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
   <hr></hr>
      <h1>{name}</h1>
      <button onClick={() => setName("Mete")}>Click</button>
    </div>
  );
}

export default App;
