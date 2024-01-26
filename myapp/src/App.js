import { useState } from 'react';
import './App.css';
import About from './components/About.js';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
function App() {

    const [ mode, setMode] = useState('light');

    function changeMode(){
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
      }else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
      }
    }
    return(
      <>
        <Navbar  title="TextUtils" mode={mode} changeMode={changeMode}/>
        <Alert alert='This is alert'/>
        <div className='container my-3'>
          <TextForm heading="Enter the text to analyze" mode={mode}/>
          <About/>
        </div>
      </>
    );
}

export default App;
