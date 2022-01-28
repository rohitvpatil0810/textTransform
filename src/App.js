import "./App.css";
import Navbar from "./components/Navbar";
import Mybox from "./components/Mybox";
import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>
  {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    // mode === 'light'? ( setMode('dark') , document.body.style.backgroundColor: `#22303C` ) : setMode('light');
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = `#22303C`;
      showAlert("Dark Mode is enabled!", "success")
    }
    else
    { 
      setMode('light');
      document.body.style.backgroundColor = `white`; 
      showAlert("Light Mode is enabled!", "success")
    }
  }

  return (
    <>
      <Router>
      <Navbar title="Text Transform" aboutText="About Us" Mode={mode} toggleState={toggleMode}/>
      <Alert alert={alert}/>
      
      <Switch>
          <Route path="/about">
          <About title="About Us" Mode={mode}/>
          </Route>
          <Route path="/">
          <Mybox title="Try Text Transform | Word Counter | Character Counter | Lowercase to Uppercase | Uppercase to Lowercase" showalert={showAlert} Mode={mode}/>
          </Route>
        </Switch>
        </Router>
    </>
  );
}

export default App;