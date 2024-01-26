import React, {useState} from 'react'

function TextForm(props) {

    const [text, setText] = useState('');

    function handleClick(){
        
        let NewText = text.toUpperCase();
        setText(NewText);

    }
    function handleClearClick(){
        
        let NewText = '';
        setText(NewText);

    }

    function handleClickLower(){
        
        let NewText = text.toLowerCase();
        setText(NewText);

    }
    function handleChange(event){
        setText(event.target.value);
    }
    return ( 
        <>
            <div className='container' style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white' ,color : props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary' onClick={handleClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleClickLower}>Convert to Lowercase</button>
                <button className='btn btn-primary' onClick={handleClearClick}>Clear</button>
            </div>
            <div className='container my-3' style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>Your text summary</h1>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} minutes read</p>

                <h2>Preview</h2>
                <p>{text.length>0 ? text : 'Enter text in text-box to preview it'}</p>
            </div>
        </>
        
    );
}

export default TextForm;