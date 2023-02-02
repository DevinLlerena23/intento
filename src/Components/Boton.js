import React  from "react";


export default function Boton(props) {
  
    return (
    <button onClick={()=>props.hacerClic(props.children)}>{props.children}</button>
  )
}
