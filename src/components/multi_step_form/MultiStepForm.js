import { useState, useEffect } from "react";
import { FormItem } from "./FormItem.js";

export const MultiStepForm = (props) => {
  // store index number with the answers?
  const [answers, setAnswers] = useState({ index: props.step });

  useEffect(() => {
    // console.log("answers:", answers);
    // check if the answers isn't empty
    if (Object.keys(answers).length > 1) {
      // update page answers
      props.onPageUpdate(answers.index, answers);
      // update page number locally
      setAnswers((prev) => {
        return { ...prev, index: props.step };
      });
    } else {
      // update page number locally
      setAnswers((prev) => {
        return { ...prev, index: props.step };
      });
    }
  }, [props.step]);

  useEffect(() => {
    props.onPageUpdate(answers.index, answers);
  }, [answers]);

  const updateAnswers = (value, category) => {
    setAnswers((answers) => {
      return { ...answers, [category]: value };
    });
  };

  return (
    <div className="text-left">
      {props.list[props.step - 1].items?.map((item, index) => {
        return (
          <FormItem
            answers={answers}
            required={true}
            key={`${index}_${item.label}`}
            item={item}
            onChange={updateAnswers}
            answer={
              props.pagesAnswers[props.step]
                ? props.pagesAnswers[props.step][item.value]
                : null
            }
          />
        );
      })}
    </div>
  );
};
