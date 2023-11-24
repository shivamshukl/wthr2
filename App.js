import logo from './logo.svg';
import './App.css';
import Box from './Components/Box';
import { useEffect, useState } from 'react';
function App() {
  const request=new XMLHttpRequest();
    request.open("GET","https://catfact.ninja/fact");
    request.send();
    console.log(request.response);
  
  const[city,setcity]=useState("kanpur");

  const handleclick=()=>{
    const inptext=document.querySelector("input").value;
    setcity(inptext);
    console.log(inptext);
    
  }
  return (
    <div className="App">
      <div className="search">
        <input className="input " placeholder='Enter City' />
        <button className="btn" onClick={handleclick}>Search</button>
      </div>

      <div className="answer"><Box city={city}/></div>
    </div>
  );
}

export default App;
