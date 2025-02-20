import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        //console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () =>{
        //console.log("Uppercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    // const handleEmailClick = () =>{
    //     if(text.includes('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}')){
    //         alert("Email Found in above text");
    //     }
    // }

    const clearText = () =>{
        setText("");
    }

    const handleCopy = () =>{
        // let text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text)
        .then(() => {
            if(text.selected === true){
                alert("Text Copied");
            }else{
                alert("Text Not Copied");
            }
        })
        
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange = (event)=>{
        //console.log("On change");
        setText(event.target.value);
    }
    //**************************
    //useState is used here
    // useState is a hook that allows you to have state variables in functional components.
    // You pass the initial state to this function and it returns a variable with the current state value (text) and a function that lets you update this value (setText).
    const[text, setText] = useState("");
    //text = "new Text"; //wrong way to change the state of text or update the text
    //setText("New Text Enter Here");    //correct way to change the state of text or update the text
    
return (
    <>
    <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? '#ebe6e6' : 'light'}} id="myBox" rows="8" placeholder='Enter Text Here'></textarea>
        </div>
        <button className="btn btn-primary " onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-danger mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-success mx-2" onClick={clearText}>Clear</button>
        <button className="btn btn-success mx-2" onClick={handleCopy}>Copy</button>
        <button className="btn btn-success mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words, {text.length} characters</p>
        <p>{text.trim().length === 0 ? 0 : (0.008 * text.split(" ").length)} minutes read</p>
        {/* <h2>Email present in Above text</h2> */}
        {/* <button className="btn btn-success " onClick={handleEmailClick}>Check Email</button> */}
        
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
)
}
