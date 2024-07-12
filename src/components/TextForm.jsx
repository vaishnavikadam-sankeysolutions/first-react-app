import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("You have clicked handleOnUpperClick" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text is cleared!", "success");
  };

  // const speak = () => {
  //   let msg = new SpeechSynthesisUtterance();
  //   setText(msg);
  // };

  const handleOnChange = (e) => {
    console.log("OnChange triggered");
    setText(e.target.value);
  };

  const handleCopy = () => {
    console.log("Text is getting copy");
    const text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            onChange={handleOnChange}
            rows="6"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy to clipboard
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
        {/* <button className="btn btn-secondary mx-2" onClick={speak}>
          Read text loudly
        </button> */}
        {/* <button className="btn btn-warning mx-2" onClick={speak}>
          Speak
        </button> */}
      </div>

      <div className="container">
        <h1>Your text summary is here</h1>
        <p>
          your text has {text.split(" ").length} words and {text.length}{" "}
          characters
        </p>
        <br />
        <p>{0.008 * text.split(" ").length} Minutes required to read</p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
