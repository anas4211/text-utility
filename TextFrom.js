import React, { useState } from 'react'

 
 
const TextFrom = (props) => {
  
    const handleUpClick = ()=> {
      //  console.log("You have clicked")
       let newText = text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to uppercase","success")
    };

    const handleLowClick = ()=> {
      // console.log("You have clicked")
      let lowText = text.toLowerCase();
      setText(lowText);
      props.showAlert("Converted to lowercase","success")
   };

   const handleClearClick = ()=>{
     // console.log("You have clicked")
     let clearText = "";
     setText(clearText);
     props.showAlert("Text cleared","success")
   };

    const handleOnChange = (e)=> {
      // console.log("On change")
      setText(e.target.value)
   };

   const handleCopy = () =>{ 
   console.log("I am copy"); 
   let text = document.getElementById("myBox");
   text.select(); 
   navigator.clipboard.writeText (text.value);
   props.showAlert("Copy to clipboard","success")
  };

  const [text, setText] = useState("");  
    // text = "new text"; // wrong way to change the state
    // setText("new text"); // right way to change the state

  return (
    <>   
     <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
     <h1>{props.heading}</h1>
     <div className="mb-3">
     <textarea className="form-control" value={text} onChange={handleOnChange} 
     style={{backgroundColor: props.mode==='light'?'white':'#13466e', 
     color: props.mode==='dark'?'white':'black', fontWeight: 'bold'}}
     id="myBox" rows="8">
       {/* style={{props.mode==='light' ?'darkGrey':'white'}} */}
     </textarea>
     </div>
     <button className="btn btn-primary mx-2 my-1 " onClick={handleUpClick}>Convert to UpperCase</button>
     <button className="btn btn-primary mx-2 my-1 " onClick={handleLowClick}>Convert to LowerCase</button>
     <button className="btn btn-danger mx-2 my-1 " disabled={text.length === 0 ? true : false} onClick={handleClearClick}>Clear text</button>
     <button className='btn btn-success mx-2 my-1' id='myBox' onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length-1} words, and {text.length} chracters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length-1} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div> 
   </>
  );
}

export default TextFrom;