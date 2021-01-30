import React,{useState}  from "react";
import "./index.css";

export default function Calculator() {
  const [num1,setNum1]=useState('');
  const [num2,setNum2]=useState('');
  const [operator,setOperator]=useState('');
  const [result,setResult]=useState('');
  const [count,setCount]=useState(0);


  const onReset=()=>{
    setResult('');
    setNum1('');
    setNum2('');
    setOperator('');
  }
  const resetForm=()=>{
    setCount(0);
    setNum1('');
    setNum2('');
  }
  
  const calculate=(operator)=>{
    setOperator(operator);
    const res= eval(`${num1}${operator}${num2}`);
    setResult(`Result:${res.toFixed(2)}`)
    setCount(count+1);
  };


  return (
    <div className="layout-column align-items-center">
      <div data-testid="total-operations" className="pt-50 total-operations">{`Total Operations Performed: ${count}`}</div>
      <div className="card">

        <section className="card-text">
          <div className="layout-row justify-content-around align-items-center mt-40">
            <input onFocus={resetForm} type="number" className="ml-3 mr-3" data-testid="app-input1" autoComplete="off" placeholder="Eg: 1"
                  name="input1" value={num1} onChange={e=>setNum1(e.target.value)}/>
            <label className="ml-2 mr-2 symbol text-center" data-testid="selected-operator">{operator}</label>
            <input type="number" data-testid="app-input2" autoComplete="off" className="ml-3 mr-3"
                  placeholder="Eg: 2" value={num2} onChange={(e)=>setNum2(e.target.value)}/>
          </div>

          <div className="layout-row justify-content-around mt-30">
            <button className="operationFont" type="submit" data-testid="addButton" onClick={()=>calculate('+')}>+</button>
            <button className="operationFont" type="submit" data-testid="subtractButton" onClick={()=>calculate('-')}>-</button>
            <button className="operationFont" type="submit" data-testid="multiplyButton" onClick={()=>calculate('*')}>*</button>
            <button className="operationFont" type="submit" data-testid="divideButton" onClick={()=>calculate('/')}>/</button>
          </div>

          <div className="layout-row justify-content-between align-items-center mt-30">
            <button type="reset" data-testid="resetButton" className="outline danger" onClick={onReset}>Reset</button>
            <div className="layout-row justify-content-center align-items-center result-container">
              <div data-testid="result" className="result-value ma-0 slide-up-fade-in">{result}</div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );

}