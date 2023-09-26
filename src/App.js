
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Text from './components/Text';

import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');// whether dark mode is enable or not
  
  const [alert, setAlert] = useState(null);// whether dark mode is enable or not

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(1 38 45 / 97%)';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#dbf4f8';
      showAlert("light mode has been enabled", "success");
    }
  }

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Navbar title="TextPerfecta" mode={mode} toggleMode={toggleMode}/>
     
      <Alert alert={alert}/>

      <div className="container my-3" >
        <Text showAlert={showAlert} heading ="Enter your Text here" mode={mode}/>
      </div>
    </>
    
  );
}

export default App;
