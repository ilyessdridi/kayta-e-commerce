import { useState } from "react"; 
import React from 'react' 
import { useNavigate } from "react-router-dom";

export default function Todo(props) { 
    const navigate=useNavigate() ;  
    const handleClickBack=()=>{ 
        navigate(-1)
    }
  return (
    <>
      <ul>
        {props.todos.map((todo, key) => (
          <li key={key}>{todo}</li>
        ))}
      </ul> 
      <button onClick={handleClickBack}>go back</button>
    </>
  );
}
