import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Calculator = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const oprs = ["/", "*", "+", "-", "."];

  const updateCalc = (val) => {
    if (
      (oprs.includes(val) && calc === "") ||
      (oprs.includes(val) && oprs.includes(calc.slice(-1)))
      // if the value is operator and calculation has nothing
      // or the value is operator and last value is also operator
    ) {
      return; // return nothing
    }
    setCalc(calc + val);

    if (!oprs.includes(val)) {
      setResult(eval(calc + val).toString());
      // if last item is not a operator
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
    setResult(eval(value));
  };

  const clear = () => {
    setCalc("");
    setResult("");
  };
  return (
    <div className="app">
      <h1>Calculator</h1>

      <div className="calculator">
        <div className="display">
          <span>({result})</span>
          {calc || "0"}
        </div>

        <div className="buttons">
          <Button className="btn btn-dark" onClick={() => updateCalc("1")}>
            1
          </Button>
          <Button className="btn btn-dark" onClick={() => updateCalc("2")}>
            2
          </Button>
          <Button className="btn btn-dark" onClick={() => updateCalc("3")}>
            3
          </Button>
          <Button onClick={() => deleteLast()} className="delete">
            AC
          </Button>
          <Button className="btn btn-secondary" onClick={() => updateCalc("/")}>
            ÷
          </Button>

          <Button className="btn btn-dark" onClick={() => updateCalc("4")}>
            4
          </Button>
          <Button className="btn btn-dark" onClick={() => updateCalc("5")}>
            5
          </Button>
          <Button className="btn btn-dark" onClick={() => updateCalc("6")}>
            6
          </Button>
          <Button className="btn btn-secondary" onClick={() => updateCalc("*")}>
            *
          </Button>

          <Button className="btn btn-dark" onClick={() => updateCalc("7")}>
            7
          </Button>
          <Button className="btn btn-dark" onClick={() => updateCalc("8")}>
            8
          </Button>
          <Button className="btn btn-dark" onClick={() => updateCalc("9")}>
            9
          </Button>
          <Button onClick={clear} className="clear">
            C
          </Button>
          <Button className="btn btn-secondary" onClick={() => updateCalc("+")}>
            +
          </Button>

          <Button className="btn btn-dark" onClick={() => updateCalc("0")}>
            0
          </Button>
          <Button className="btn btn-dark" onClick={() => updateCalc(".")}>
            .
          </Button>
          <Button onClick={() => calculate()} className="btn btn-danger equals">
            =
          </Button>
          <Button className="btn btn-secondary" onClick={() => updateCalc("-")}>
            -
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
