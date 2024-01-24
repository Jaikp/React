import React, {useState} from 'react'

function TextForm(props) {

    const [text, setText] = useState('enter text here');

    function handleClick(){
        
        let NewText = text.toUpperCase();
        setText(NewText);
        
    }
    function handleChange(event){
        setText(event.target.value);
    }
    return ( 
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleClick}>Convert to Uppercase</button>
        </div>
    );
}

export default TextForm;