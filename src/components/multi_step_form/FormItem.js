import { Form } from "react-bootstrap";
import { useState } from "react";

export const FormItem = ({ item, onChange, answer, answers }) => {
  const [currentValue, setCurrentValue] = useState(answer || "");

  const handleChange = (value) => {
    setCurrentValue(value);
    onChange(value, item.value);
  };

  switch (item.type) {
    case "text":
      return (
        <>
          <Form.Label>{item.label}</Form.Label>
          <Form.Control
            required
            type="text"
            id={item.label}
            onChange={(e) => handleChange(e.target.value, item.value)}
            value={currentValue}
          />
        </>
      );
      break;
    case "check":
      return (
        <>
          <Form.Label>{item.label}</Form.Label>

          {item.valuesArr.map((value, index) => {
            return (
              <Form.Check
                key={index}
                type="checkbox"
                id={`checkbox-${index}`}
                label={value}
                onChange={(e) => handleChange(value, item.value)}
                checked={answer === value}
              />
            );
          })}
        </>
      );
      break;
    case "information":
      return (
        <>
          <h5>Well done {answers.userName}!</h5>
          {/* <p>well done {JSON.stringify(answers)}</p> */}
          <p>
            Your current weight is {answers.currWeight}, Your goal weight is{" "}
            {answers.goalWeight} and your current BMI based on your height is{" "}
            {(answers.currWeight / (answers.height ^ 2)).toFixed(1)}
          </p>
          <p>We are ready to start!</p>
        </>
      );
  }
};
