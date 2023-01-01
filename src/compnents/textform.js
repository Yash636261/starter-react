import React, {useState} from 'react'

export default function TextForm(props) {
  const ToUpperCase = () =>{
    let newText= text.toUpperCase()
    setText(newText)
  }
  const ToLowerCase = () =>{
    let newText= text.toLowerCase()
    setText(newText)
  }
  const ToCopy =() =>{
    navigator.clipboard
      .writeText(text)
      .then(
        (success) => alert("text copied"),
        (err) => console.log("error copying text")
      );
  }
  const OnChange = (event) =>{
    setText(event.target.value)
  }
  const [text, setText] = useState('enter text here');
return (
  <>
  <div className="container">
    <h1>{props.heading}</h1>
      <div>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={OnChange} id="mybox" rows="8"></textarea>
      </div>
        <button className="btn btn-primary mx-1" onClick={ToUpperCase}>convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={ToLowerCase}>convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={ToCopy}>copy text</button>
    </div>
  </div>
  <div className="container">
    <h1>your text summary</h1>
    <p>your text containes {text.split(" ").length} words and {text.length} characters.</p>
    <p>{0.008*text.split(" ").length} minutes reading time.</p>
  </div>
  </>
  )
}
