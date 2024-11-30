import {useState} from "react" ; 
import {BrowserRouter,Routes,Route} from "react-router-dom" ;  
import Todo from "./compoents/Todo";
import Home from "./compoents/Home";
import Layout from "./compoents/Layout";
function App() { 
  const carInfo={name :"ford", model:"BMW"};  
  const todos=["wake up","eat","program","sleep","repeat"]
 return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout />}>
             <Route index element={<Home brand={carInfo}/>}></Route>
             <Route path="todo" element={<Todo todos={todos} />}></Route>
       </Route>
     </Routes>
   </BrowserRouter>
 );
}  

export default App;
