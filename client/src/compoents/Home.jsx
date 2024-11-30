import React from 'react' 
import { useNavigate } from 'react-router-dom'; 
import { useState ,useEffect} from 'react';

export default function Home(props) {  
    const [isHovered,setIsHovered]=useState(false) ;
   const navigate = useNavigate();
   const handleClick = () => {
     navigate("todo");
   };     
 useEffect(()=>{
  console.log("3asba");
  
 },[])

  return (
    <>
      <div>{props.brand.name}</div>
      <div>{props.brand.model}</div>
      <button
        style={{
          backgroundColor: isHovered ? "red" : "#4CAF50",
          border: "none",
          color: "white",
          padding: "10px 15px", 
      
          textAlign: "justify",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "13px",
          margin: "4px 2px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          borderRadius: 12,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        Hover Me
      </button>
    </>
  );
}
