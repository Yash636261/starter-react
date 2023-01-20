
import './App.css';
//import About from './compnents/about';
import About from './compnents/about';
import Navbar from './compnents/Navbar';
// import TextForm from './compnents/textform';
import React, { useState } from 'react';


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
      <Navbar title="React" />
      <Navbar title="React" mode={Mode} toggleMode={toggleMode}/>
      <div className="container">
        {<TextForm heading="enter the text here"/> }
        {/*<About/>*/}
      </div>
      
    </>
  );
}

export default App;
