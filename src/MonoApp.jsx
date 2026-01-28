import "./App.css";
import Counter from "./components/Counter";
import Greetings from "./components/Greetings";
import { useState } from "react";

const MonoApp =()=> {
  const word1 = "Class";
   const [count, setCount] = useState(0);
  

  // const handleClick = ()=>{
  //  setCount(prevCount => prevCount + 1);
  // }
  

  return (
    <>
    <Counter count={count} setCount={setCount}/>
    <Greetings word1={word1}/> 

    <div>
      <p> hello {word1}</p>
      <p> Hello {count}</p>
    </div>
    </>
  );
}

export default MonoApp;