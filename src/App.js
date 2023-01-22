
import './App.css';
import About from './compnents/about';
import Navbar from './compnents/Navbar';
import TextForm from './compnents/textform';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState(`dark`);

  const toggleMode =()=>{
    if(Mode==='light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }

  return (
    <>
      <Router>
      <Navbar title="React" mode={Mode} toggleMode={toggleMode}/>
      <div className="container">
      <Switch>
          <Route path="/about">
            {<About/>}
          </Route>
          <Route path="/">
            {<TextForm heading="enter the text here"/> }
          </Route>
        </Switch>
      </div>
      </Router>
      
    </>
  );
}

export default App;
