
import { useState } from 'react';
import './App.css';
import Boton from './Components/Boton';
import { evaluate } from 'mathjs';

function App() {
  const [valor,setValor]=useState("")
     const handleKeyPress = (event) => {
       const key = event.key;
       if (key >= "0" && key <= "9") {
         hacerClic(key);
       } else if (key === "+" || key === "-" || key === "*" || key === "/") {
         hacerClic(key);
       } else if (key === "Enter") {
         calcularClic();
       } else if (key === "Escape" || key === "c" || key === "C") {
         setValor("");
       }
     };
  
  
  const hacerClic=(texto)=>{
    //console.log(texto)
    setValor(valor+texto)
  }
  const calcularClic=()=>{
    let resultado = evaluate(valor);
    setValor (resultado)
    console.log("La operacion a calcular es", valor)
  }
  return (
    <div className="App">
      Calculadora
      <div>
        <input type="text" value={valor} onKeyPress={handleKeyPress} />
      </div>
      <div>
        <Boton  hacerClic={hacerClic}>1</Boton>
        <Boton  hacerClic={hacerClic}>2</Boton>
        <Boton hacerClic={hacerClic}>3</Boton>
        <Boton hacerClic={hacerClic}>+</Boton>
      </div>
      <div>
        <Boton hacerClic={hacerClic}>4</Boton>
        <Boton hacerClic={hacerClic}>5</Boton>
        <Boton hacerClic={hacerClic}>6</Boton>
        <Boton hacerClic={hacerClic}>-</Boton>
      </div>
      <div>
        <Boton className='boton' hacerClic={hacerClic}>7</Boton>
        <Boton hacerClic={hacerClic}>8</Boton>
        <Boton hacerClic={hacerClic}>9</Boton>
        <Boton hacerClic={hacerClic}>*</Boton>
      </div>
      <div>
        <Boton hacerClic={hacerClic}>.</Boton>
        <Boton hacerClic={hacerClic}>0</Boton>
        <Boton hacerClic={calcularClic}>=</Boton>
        <Boton hacerClic={hacerClic}>/</Boton>
      </div>
      <div>
        <Boton hacerClic={() => setValor("")}>clear</Boton>
      </div>
    </div>
  );
}

export default App;
