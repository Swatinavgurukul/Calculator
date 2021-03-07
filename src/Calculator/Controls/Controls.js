import React from 'react';
import Button from './Button/Button';

const Controls = (props) => {
  const data = require('./buttons.json');
  const buttons = data.buttons;

  const renderNewLine = (newLine) => {
    if (newLine) {
      return (
        <br />
      );
    }
  }

  return (
    <div>
      {buttons.map((item, index) => {
        return (
          <span key={index}>
            {renderNewLine(item.newLine)}
            <Button
              symbol={item.symbol}
              operator={item.operator}
              displayValue={props.displayValue}
              setDisplayValue={props.setDisplayValue}
              formula={props.formula}
              setFormula={props.setFormula}
              clearBtn={item.clear}
            />
          </span>
        );
      })}
    </div>
  );
}

export default Controls;