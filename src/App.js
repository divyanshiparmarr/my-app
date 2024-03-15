import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';
// import About from './Components/About';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');  // wheather dark mode is enable or not
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark mode has been enable", "success");
      document.title = "Text Utils - Dark Mode"

      // setInterval(() => {
      //   document.title = "Install TextUtils Now"
      // }, 1500);

      // setInterval(() => {
      //   document.title = "TextUtils is Amazing"
      // }, 2000);

    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode has been enable", "success");
      document.title = "Text Utils - Light Mode"
    }
  }
    return (
    <>
      {/* <Navbar title="Text Utils" aboutText="About us"/> */}
      {/* <Navbar /> */}
      {/* <Router> */}
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}  />

      <div className="container my-3">

      {/* <Switch> */}

        {/* /users --> component 1
        /users/home --> component 2 */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
                    
          {/* <Route exact path="/"> */}
          <TextForm heading="Enter the Text to analyze below" showAlert={showAlert} mode={mode}/>
          {/* </Route>
        </Switch> */}

      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
