import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useState, useEffect } from "react";
import { MultiStepProgressBar } from "./multi_step_form/MultiStepProgressBar.js";
import { MultiStepForm } from "./multi_step_form/MultiStepForm.js";
import { questions } from "./multi_step_form/Questions";

const Intro = ({ submitUserData }) => {
  const errorMsgArr = [
    "Please make sure you answer is correct.",
    "Goal weight should be lower then current weight.",
  ];

  const [index, setIndex] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const totalPagesCount = questions?.length || 0;
  const [pagesAnswers, setPagesAnswers] = useState({});
  const [toggle, setToggle] = useState(false);
  const [errorModalMsg, setErrorModalMsg] = useState(errorMsgArr[0]);

  useEffect(() => {}, [pagesAnswers]);

  const prevButton = () => {
    if (index > 1) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const nextButton = () => {
    if (index - 4) {
      const isValidated = validateAnswer(pagesAnswers[index], index);
      if (!isValidated) {
        setToggle(true);
        return;
      }
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      // clear the form on submit
      if (!pagesAnswers[1] || !pagesAnswers[2] || !pagesAnswers[3]) {
        setToggle(!toggle);
      } else {
        submitUserData(pagesAnswers);
        setSubmitted(true);
      }
    }
  };

  const onPageAnswerUpdate = (step, answersObj) => {
    setPagesAnswers({ ...pagesAnswers, [step]: answersObj });
  };

  const handleStart = () => {
    setIndex(1);
    setSubmitted(false);
  };

  function validateAnswer(answer, index) {
    switch (index) {
      case 1:
        if (!answer.userName) return false;
        break;
      case 2:
        if (!answer.currWeight || !answer.goalWeight) return false;
        if (+answer.currWeight <= +answer.goalWeight) {
          setErrorModalMsg(errorMsgArr[1]);
          return false;
        }
        break;

      default:
        break;
    }
    return true;
  }

  return (
    <div className="App intro-container ">
      <Container className="h-100 align-items-center">
        <Row className="m-5">
          <Col className="">
            <MultiStepProgressBar step={index} />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          {submitted ? (
            <Card className="intro-card">
              <Card.Body>
                <p>Your answers have been submitted!</p>
              </Card.Body>
              <Card.Footer style={{ backgroundColor: "transparent" }}>
                <Button onClick={handleStart}>Start Over</Button>
              </Card.Footer>
            </Card>
          ) : (
            <Card className="intro-card">
              <Card.Body>
                <MultiStepForm
                  list={questions}
                  step={index}
                  onPageUpdate={onPageAnswerUpdate}
                  pagesAnswers={pagesAnswers}
                />
              </Card.Body>
              <Card.Footer
                style={{ backgroundColor: "transparent" }}
                className="d-flex justify-content-between"
              >
                <Button
                  className="btn-app"
                  onClick={prevButton}
                  disabled={index == 1}
                >
                  Previous
                </Button>
                <Button className="btn-app" onClick={nextButton}>
                  {index == totalPagesCount ? "Submit" : "Next"}
                </Button>
              </Card.Footer>
            </Card>
          )}
        </Row>
      </Container>

      <Modal isOpen={toggle} toggle={() => {}}>
        <ModalHeader toggle={() => {}}>Alert</ModalHeader>
        <ModalBody>{errorModalMsg}</ModalBody>
        <ModalFooter>
          <Button
            className="btn-app"
            color="secondary"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Intro;
