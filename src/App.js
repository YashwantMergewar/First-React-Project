import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  let toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = '#2b3c78';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light mode";
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      <Alert alert={alert}/>
      <TextForm showAlert = {showAlert} heading="Enter the text to analyze" mode={mode}/>
    </div>
    </>
  );
}

export default App;
