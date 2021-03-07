import React, { useState } from 'react';
import Controls from './Controls/Controls';
import Display from './Display/Display';
import './Calculator.css'

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [formula, setFormula] = useState("");

  return (
      <div>
    <h1>Calculator-</h1>
    <div className="calcuContainer">
      <Display displayValue={displayValue} formula={formula} />
      <Controls displayValue={displayValue} setDisplayValue={setDisplayValue} formula={formula} setFormula={setFormula}/>
    </div>
      </div>
  );
}

export default Calculator;