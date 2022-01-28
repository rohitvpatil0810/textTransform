import React from "react";
import { useState } from "react";

export default function Mybox(props) {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Text Change to Uppercase!","success")
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Text Change to Lowercase!","success")
  };
  const removeextraaspaceClick = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showalert("Extraa Spaces are removed!!","success")
  };
  const copyClick = () => {
    navigator.clipboard.writeText(text);
    props.showalert("Text copied to Clipboard","success")
  };
  const handleClrClick = () => {
    setText("");
    props.showalert("Text Cleared!","success")
  };
  var measuredTime = new Date(null);
  measuredTime.setSeconds(0.008 * (text.split(/\s+/).filter((element)=>{return element.length!==0}).length)*60); 
  var MHSTime = measuredTime.toISOString().substr(11, 8);
  return (
    <div className="container primary rounded my-3 p-3" style={{color: props.Mode === 'dark'?'white':'black', backgroundColor: props.Mode === 'dark'?'#15202B':'#E4E6EB'}}>
      <h3 className="my-10">{props.title}</h3>
      <textarea
        className="form-control border-primary"
        value={text}
        onChange={handleOnChange}
        id="text"
        rows="5"
        style={{color: props.Mode === 'dark'?'white':'black', backgroundColor: props.Mode === 'dark'?'#22303C':'white'}}
      ></textarea>
      <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>
        Change to Uppercase
      </button>
      <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>
        Change to Lowecasecase
      </button>
      <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={removeextraaspaceClick}>
        Remove extraa Spaces
      </button>
      <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={copyClick}>
        Copy to Clipboard
      </button>
      <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleClrClick}>
        Clear Text
      </button>
      <div className="border-primary">
        <h3>The Text Summary</h3>
        <h6>
          Text contains {text.length} characters and{" "}
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words
        </h6>
        <h6>
          Estimated Reading time is {MHSTime}
        </h6>
      </div>
        <h3>Text Preview</h3>
        <p className="container border rounded border-primary">{text.length>0? text : "Text Preview will appear here."}</p>
    </div>
  );
}
