import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

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
      document.body.style.backgroundColor = '#2b2e2e';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      }else{
        setMode("light");
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
        // document.title = "TextUtils - Light mode";
      }
  }
  return (
    <>
    <Router>
      <Navbar title="TextModifier" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
      {/* /users --> component 1
          /users/home --> component 2  */}
          <Route exact path="/about"
            element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm showAlert = {showAlert} heading="Try TextModifier - Word counter, Character counter" mode={mode}/>}/>
      </Routes>
    </div>
    </Router> 
    
    </>
  );
}

export default App;
