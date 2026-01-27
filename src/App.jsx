import { useState } from "react";

const App=()=>{
  const [name, setName] = useState("");
  return(
    <>
    <div>
      <h2>Name</h2>
      <input 
      value={name} 
      onChange={(event) => setName(event.target.value)} 
      placeholder="type here"
      /> 
    </div>
    <div>
      {name}
    </div>
    </>
  )
}

export default App;