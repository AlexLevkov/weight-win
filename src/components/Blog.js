import React, { useEffect } from 'react'
import { Navbar, Nav, Form, FormControl, Button, Card, Row, Col, Container } from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';
import health1 from '../imgs/blog/health1.png';
import food1 from '../imgs/blog/food1.jpg';
import sport1 from '../imgs/blog/sport1.png';
import health2 from '../imgs/blog/health2.jpg';
import food2 from '../imgs/blog/food2.jpg';
import sport2 from '../imgs/blog/sport2.jpg';
import health3 from '../imgs/blog/health3.jpg';
import food3 from '../imgs/blog/food3.jpg';
import sport3 from '../imgs/blog/sport3.jpg';

const Blog = () => {

  const [activeTopic, setActiveTopic] = useState('all');
  const [toggle, setToggle] = useState(false);


  useEffect(()=>{
    setActiveTopic('all')
  },[])

  const data = [
    {activeTopic:"health",title:"Yoga for Athletes",text:" Yoga is often thought of as a gentle exercise for flexibility and relaxation, but it can also be ...",img:health1,id:"01"},
    {activeTopic:"health",title:"Tips for Practicing Self-Care",text:"Self-care is essential for maintaining physical and emotional well-being. This article will provide an  ...",img:health2,id:"02"},
    {activeTopic:"health",title:" Understanding the Impact of Chronic Stress",text:"Stress is a normal part of life, but chronic stress can have a negative impact on  ...",img:health3,id:"03"},
    {activeTopic:"sport",title:" The Science of Running",text:" Running is a popular form of exercise that has many benefits for overall health and wellness. ...",img:sport1,id:"04"},
    {activeTopic:"sport",title:"How to Develop a Winning Mindset",text:"A winning mindset is crucial for athletic success. This article will explore the psychological factors that  ...",img:sport2,id:"05"},
    {activeTopic:"sport",title:"Benefits of High-Intensity Interval Training",text:"High-Intensity Interval Training (HIIT) is a type of cardio training that alternates ...",img:sport3,id:"06"},
    {activeTopic:"food",title:"Seasonal Vegetables",text:"Eating a diet rich in vegetables can have many health benefits. ...",img:food1,id:"07"},
    {activeTopic:"food",title:"Top 10 Superfoods for Optimal Health",text:"Superfoods are nutrient-dense foods that are packed with vitamins, minerals, antioxidants ...",img:food2,id:"08"},
    {activeTopic:"food",title:"The Ultimate Guide to Meal Prep",text:"Meal prepping can be a great way to save time and ensure that you are eating healthy ...",img:food3,id:"09"},
  ]

  return (
    <div className='layout mt-3'>

      <Navbar id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className={activeTopic === 'all' ? 'active' : ''} href="#all" onClick={() => setActiveTopic('all')}>View All</Nav.Link>
          <Nav.Link href="#health" onClick={() => setActiveTopic('health')}>Health</Nav.Link>
          <Nav.Link href="#sport" onClick={() => setActiveTopic('sport')}>Sport</Nav.Link>
          <Nav.Link href="#food" onClick={() => setActiveTopic('food')}>Food</Nav.Link>
        </Nav>
      </Navbar>

      <div className='w-100 m-x d-flex justify-content-between align-items-center'>
        <Row className='w-100 card-container'>
          {data.map((blog)=>{ return (activeTopic === 'all' || activeTopic === blog.activeTopic ?
              <Col key={blog.id} className='mb-3' xs={12} sm={6} md={4} lg={4}>
              <Card className="mt-5 mt-md-0 w-100" style={{margin:'auto' }}>
              <div style={{backgroundImage:`url(${blog.img})`,height:'100%',backgroundSize: "cover",height:"35vh"}}></div>
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>
                  {blog.text}
                  </Card.Text>
                  <Button className='btn-app btn-blog' href="#" onClick={()=>setToggle(true)}>Continue reading</Button>
                </Card.Body>
              </Card> 
              </Col> : null )
            })}
        </Row>
      </div>

      <Modal isOpen={toggle} >
          <ModalHeader >Coming Soon</ModalHeader>
          <ModalBody>
            <div style={{textAlign:'center',margin:'10%'}}>
            <h4 className='mb-3'>This feature is under construction</h4>
            <div style={{width:'15%',margin:'auto'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM104 432c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24z"/></svg>
            </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button className='btn-app' color="secondary" onClick={()=>{setToggle(!toggle)}}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
  
    </div>
  )
}

export default Blog







