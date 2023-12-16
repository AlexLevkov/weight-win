import React, {useState} from 'react'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import teamImg from '../imgs/team.jpg';

const Contact = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };


  return (
    <div className='contact-cmp layout'>
      <div className='contact-content'>
        <h4>We want to hear from you!</h4>
        <p>We're excited to hear your feedback! If you have any questions, comments or feedback about the app, please don't hesitate to reach out. We've provided a contact form for you to fill out, and we'll get back to you as soon as possible. Your input is highly appreciated, as it helps us understand how make the app more efficient and to improve the user experience. Thank you for taking the time to review the app. We hope you had a good time using it.</p>
        <h4>Our team</h4>
        <p>We are a team of a Full Stack Web Developer and a UX/UI designer who are dedicated to crafting unique and cutting-edge applications. We take pride in bringing our ideas to life and are always seeking ways to improve our users experience. Our passion for innovation and creativity drives us to create something truly special. We're excited to share our future projects with you.</p>
        <img src={teamImg} alt="" />
        <div className='linkedin-container'>
          <a href="https://www.linkedin.com/in/alex-levkov/"><i className="fa-brands fa-linkedin"></i> Alex Levkov </a>
          <a href="https://www.linkedin.com/in/raz-farage-860466219/"><i className="fa-brands fa-linkedin"></i> Raz Farage </a>
        </div>

      </div>
      <div className='contact-form'>
      <Form 
        onSubmit="sendEmail(); reset(); return false;"
        action="https://formsubmit.co/alexlevkov87@gmail.com" method="POST" >
        <FormGroup>
          <Form.Label>First Name</Form.Label>
          <FormControl name="first-name" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
        </FormGroup>

        <FormGroup>
          <Form.Label>Last Name</Form.Label>
          <FormControl  name="last-name" type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
        </FormGroup>

        <FormGroup>
          <Form.Label>Email Address</Form.Label>
          <FormControl name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </FormGroup>

        <FormGroup>
          <Form.Label>Message</Form.Label>
          <FormControl name="msg" as="textarea" rows="3" value={message} onChange={e => setMessage(e.target.value)} />
        </FormGroup>
        <Button className='btn-app' type="submit">Submit</Button>
          <input
            type="hidden"
            name="_next"
            value={window.location.href}
          />
      </Form>
      </div>
    </div>
  )
}

export default Contact

