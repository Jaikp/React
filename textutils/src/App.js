import { useState } from 'react';
import './App.css';
import About from './components/About.js';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {

    const [ mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message,type) =>{
      setAlert({
        msg: message,
        type: type,
      })

      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }
    function changeMode(){
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
        showAlert("Dark mode enabled", "success");
      }else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("light mode enabled", "success");
      }
    }
    return(
      <>
      <Router>
        <Navbar  title="TextUtils" mode={mode} changeMode={changeMode}/>
        <Alert alert={alert}/>
        <div className='container my-3'>
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} />
          <Route path="/about" element={<About mode={mode}/>} />
          </Routes>
        </div>
      </Router>
      </>
    );
}

export default App;
