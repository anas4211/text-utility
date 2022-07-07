import React, { useState } from 'react';

function Test() {
  const [value, setValue] = useState("");
  const [btnText, setBtnText] = useState("Yes");
  const [count, setCount] = useState(0);

  const btnStyle = {
      color: 'white',
      fontWeight:'bold',
      backgroundColor: 'darkBlue',
      margin: '8px',
      padding:'4px',
      width:'60px',
      border: '2px solid black',
      borderRadius:'4px'
  }

  function clickHandle (){
   setBtnText(btnText==="Yes" ? "No" : "Yes")
   setCount(count+1);
  }
  
  function onChange(e) {
    setValue(e.target.value);
    setCount(count+1);
  }

  return (
    <div>
      <input
        onChange={onChange}
        placeholder="Type In Here"
      />
      <h1> {value} </h1>
      <button style={btnStyle} onClick={clickHandle}>{btnText}</button>
      <span>Rerender {count} </span>
    </div>
  );
}

export default Test;