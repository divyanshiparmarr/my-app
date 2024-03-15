import React, {useState} from 'react'



export default function TextForm(props) {
    const [text, setText]  = useState('');
   const handleUpClick = ()=>{
        console.log("Uppercase was Clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to UpperCase", "success")
    }
    

    const handleLoClick = ()=>{
        console.log("LowerCase was Clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to LowerCase", "success")

    }

    const handleClearClick = ()=>{
        console.log("clear was Clicked " + text);
        let newText = ' ';
        setText(newText);
        props.showAlert("Text Cleared", "success")

    }

    const handleCopy = ()=> {
        console.log("text copy");
        let newText = document.getElementById('myBox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copy to clipboard", "success")

    }

    const handleExtraSpaces = ()=>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove Extra Spaces", "success")

    }


    const handleOnChange = (event)=>{
        console.log("On Change")
        setText(event.target.value)
    }
    // text = "new text"  Wrong way to change the state
    // setText("New text");  Correct way to change the text
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>

    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length - 1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something in the text box above to preview it here"}</p>
    </div>
    </>
  )
}
