import React,{useState} from 'react'
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
// import About from './components/About';
import './App.css';

function App() {

  const [mode,setMode] = useState("light")  // Whether darkmode is enable or not  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
        setAlert({
          msg: message,
          type: type
        });
        setTimeout(() => {
          setAlert(null);
        }, 1500);
  } 

  const toggleMode = ()=>{
    if(mode === 'light'){
     setMode('dark')   
     document.body.style.backgroundColor = '#042743';
     showAlert("Dark mode has been enabled", "success");
    } 
   else {
     setMode('light')
     document.body.style.backgroundColor = 'white';
     showAlert("Light mode has been enabled", "success");
   }
  }

  return (
       <div className="container my-3" >
       <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert} />
    <TextFrom showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> 
    {/* <About/> */}
        </div>
  );
}
 
export default App;