import React, { useState } from "react";
// import PropTypes, { element } from "prop-types";
// rgb(16 18 38);
export default function TextForm(props) {
  const [text, setText] = useState("");
  let UPPERCASE = text.toUpperCase();
  let LOWERCASE = text.toLowerCase();

  const reseteverything = () => {
    setText("");
    props.resetAll();
  };

  const handleUpClick = () => {
    setText(UPPERCASE);
    props.showAlert("Text has been Changed to upperCase", "success");
  };
  const handlelowClick = () => {
    setText(LOWERCASE);
    props.showAlert("Text has been Changed to LowerCase", "success");
  };
  const handleonChange = (event) => {
    setText(event.target.value);
  };
  const clear = () => {
    setText("");
    props.showAlert("Text has been cleared", "success");
  };
  const removeExtraSpaces = () => {
    let NewText = text.split(/[ ]+/);
    setText(NewText.join(" "));
    props.showAlert("Text has been Removed", "success");
  };
  const copy = () => {
    const textarea = document.getElementById("myBox");
    navigator.clipboard.writeText(textarea.value);
    props.showAlert("Text has been Copied to Clipboard", "success");
  };
  return (
    <>
      <div className="container">
        <h1 className={`${props.textcolor}`}>{props.heading}</h1>
      </div>
      <div className="mb-3">
        <textarea
          className="form-control textarea mt-5"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleonChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
        Convert to upperCase
      </button>
      <button className="btn btn-primary mx-2 my-1" onClick={handlelowClick}>
        Convert to LowerCase
      </button>
      <button onClick={clear} className="btn btn-primary mx-2 my-1">
        Clear
      </button>
      <button onClick={removeExtraSpaces} className="btn btn-primary mx-2 my-1">
        Remove Extra Spaces
      </button>
      <button onClick={copy} className="btn btn-primary mx-2 my-1">
        Copy To clipboard
      </button>
      <button className="btn btn-primary" onClick={reseteverything}>
        Reset
      </button>
      <div className={`container my-2 ${props.textcolor}`}>
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Lenght
        </p>
        <p>{0.008 * text.length} Minutes to read each text</p>
        <p>
          {0.008 * text.split(" ").length} Minutes to read each Word of text
        </p>
        <h1>Preview</h1>
        <h4 className="fst-italic">
          {text.length > 0
            ? text
            : `Enter Something In Above box to preview here`}
        </h4>
      </div>
    </>
  );
}
