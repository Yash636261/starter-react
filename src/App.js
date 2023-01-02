
import './App.css';
import About from './compnents/about';
import Navbar from './compnents/Navbar';
// import TextForm from './compnents/textform';
function App() {
  return (
    <>
      <Navbar title="React" />
      <div className="container">
        {/*<TextForm heading="enter the text here"/> */}
        <About/>
      </div>
      
    </>
  );
}

export default App;
