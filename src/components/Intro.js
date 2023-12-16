import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState , useEffect } from 'react'
import { MultiStepProgressBar } from "./multi_step_form/MultiStepProgressBar.js";
import { MultiStepForm } from "./multi_step_form/MultiStepForm.js";
import { questions } from "./multi_step_form/Questions";


const Intro = ({submitUserData}) => {
  const [index, setIndex] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const totalPagesCount = questions?.length || 0;
  const [pagesAnswers, setPagesAnswers] = useState({});
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    
  },[pagesAnswers])

  const prevButton = () => {
    if (index > 1) {
      setIndex(prevIndex => prevIndex - 1);
    }
  }

  const nextButton = () => {
    if (index - 4) {
      if (!pagesAnswers[index]) {setToggle(true);return}
      setIndex(prevIndex => prevIndex + 1);
    } else {
      // clear the form on submit
      if (!pagesAnswers[1] || !pagesAnswers[2] || !pagesAnswers[3] ){
        setToggle(!toggle)
      }
      else{
     
        submitUserData(pagesAnswers);
        setSubmitted(true);
      }

    }
  }

  const onPageAnswerUpdate = (step, answersObj) => {
    setPagesAnswers({...pagesAnswers, [step]: answersObj});
  }

  const handleStart = () => {
    setIndex(1);
    setSubmitted(false);
  }

  return (
    <div className="App intro-container ">
      <Container className="h-100 align-items-center">
        <Row className="m-5">
          <Col className="">
            <MultiStepProgressBar
              step={index}
              />
          </Col>
        </Row>
        <Row className='d-flex justify-content-center'>
        { submitted ?
            <Card className='intro-card'>
              <Card.Body>
                <p>Your answers have been submitted!</p>
              </Card.Body>
              <Card.Footer style={{backgroundColor:'transparent'}}>
                <Button onClick={handleStart}>Start Over</Button>
              </Card.Footer>
            </Card>
             :
            <Card className='intro-card'>
              <Card.Body>
                <MultiStepForm
                  list={questions}
                  step={index}
                  onPageUpdate={onPageAnswerUpdate}
                  pagesAnswers={pagesAnswers}
                  />
              </Card.Body>
              <Card.Footer style={{backgroundColor:'transparent'}} className="d-flex justify-content-between">
                <Button className='btn-app' onClick={prevButton} disabled={index == 1}>Previous</Button>
                <Button className='btn-app' onClick={nextButton}>{index == totalPagesCount ? 'Submit' : 'Next'}</Button>
              </Card.Footer>
            </Card>
        }
        </Row>
      </Container>


      <Modal isOpen={toggle} toggle={()=>{}}>
          <ModalHeader toggle={()=>{}}>Alert</ModalHeader>
          <ModalBody>
            Please make sure you fill all the required fields.
          </ModalBody>
          <ModalFooter>
            <Button className='btn-app' color="secondary" onClick={()=>{setToggle(!toggle)}}>
              Close
            </Button>
          </ModalFooter>
        </Modal>

    </div>
  );
}

export default Intro




