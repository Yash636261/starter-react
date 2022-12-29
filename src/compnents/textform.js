import React, {useState} from 'react'

export default function TextForm(props) {
  const ToUpperCase = () =>{
    let newText= text.toUpperCase()
    setText(newText)
  }
  const OnChange = (event) =>{
    setText(event.target.value)
  }
  const [text, setText] = useState('enter text here');
return (
  <div>
  <h1>{props.heading}</h1>
  <div>
    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={OnChange} id="mybox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={ToUpperCase}>convert to uppercase</button>
  </div>
  </div>
  )
}
