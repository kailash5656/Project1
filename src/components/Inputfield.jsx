import { useState } from "react";

const InputField = ()=>{  
  const [name, setName] = useState("");
  const age= 20;
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
      {name} {age}
    </div>
        </>
    )
}

export default InputField;