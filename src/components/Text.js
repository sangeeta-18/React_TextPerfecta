import React, {useState} from 'react';

export default function Text(props) {
    const [text, setText] = useState('Enter text');
    
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleUpClick = () =>{
        let newText = text.toUpperCase(text);
        setText(newText);
        props.showAlert("Converted to UPPERCASE","success");
    }
    const handleLwrClick = () =>{
        let newText = text.toLowerCase(text);
        setText(newText);
        props.showAlert("Converted to lowercase","success")
    }

    const handleClrText = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared","success")
    }

    const handleCopyText = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard","success")
    }

    const handleRevText = (event) => {
        let strArr = text.split("");
        strArr = strArr.reverse();
        let newText = strArr.join("");
        setText(newText);
        props.showAlert("Text reversed","success")
    };

    const handleCapText = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Text Capitalized","success")
    }

    const handleExSpc= ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space removed","success")
    };

    
    return (
        <>
        <div className="container" style={{color:props.mode===`light`?'black':'white'}}>
            <h1>  {props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value ={ text} onChange ={handleOnChange} style={{backgroundColor:props.mode===`light`?'white':'#212529', color:props.mode===`light`?'black':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick = {handleUpClick}>UPPER CASE</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick = {handleLwrClick}>lower case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick = {handleCapText}>Capitalize Word</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick = {handleRevText}>Reverse</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick = {handleExSpc}>Remove extra space</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick = {handleCopyText}>Copy to Clipboard</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick = {handleClrText}>Clear</button>
        </div>

        <div className="container my-3" style={{color:props.mode===`light`?'black':'white'}}>
            <h2>Summary</h2>
            <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").filter((e)=>{return e.length!==0}).length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text above to preview"}</p>
        </div>
        </>
    )
}
