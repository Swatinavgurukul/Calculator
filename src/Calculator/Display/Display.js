import React from 'react';
import './Display.css'

const Display = (props) => {
  return (
    <div >
      <input
        value={props.formula}
        readOnly={true}
        className="inputContainer formulaContainer"
      />
      <input
        value={props.displayValue}
        readOnly={true}
        className="inputContainer displayContainer"
      />
    </div>
  );
}

export default Display;