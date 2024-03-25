import React, { useEffect } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Card,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import health1 from "../imgs/blog/health1.png";
import food1 from "../imgs/blog/food1.jpg";
import sport1 from "../imgs/blog/sport1.png";
import health2 from "../imgs/blog/health2.jpg";
import food2 from "../imgs/blog/food2.jpg";
import sport2 from "../imgs/blog/sport2.jpg";
import health3 from "../imgs/blog/health3.jpg";
import food3 from "../imgs/blog/food3.jpg";
import sport3 from "../imgs/blog/sport3.jpg";
import data from "../data/blogs.json";

const Blog = () => {
  const [activeTopic, setActiveTopic] = useState("all");
  const [toggle, setToggle] = useState(false);

  const ImgArr = {
    health1,
    food1,
    sport1,
    health2,
    food2,
    sport2,
    health3,
    food3,
    sport3,
  };

  useEffect(() => {
    setActiveTopic("all");
  }, []);

  return (
    <div className="layout mt-3">
      <Navbar id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            className={activeTopic === "all" ? "active" : ""}
            href="#all"
            onClick={() => setActiveTopic("all")}
          >
            View All
          </Nav.Link>
          <Nav.Link href="#health" onClick={() => setActiveTopic("health")}>
            Health
          </Nav.Link>
          <Nav.Link href="#sport" onClick={() => setActiveTopic("sport")}>
            Sport
          </Nav.Link>
          <Nav.Link href="#food" onClick={() => setActiveTopic("food")}>
            Food
          </Nav.Link>
        </Nav>
      </Navbar>

      <div className="w-100 m-x d-flex justify-content-between align-items-center">
        <Row className="w-100 card-container">
          {data.map((blog) => {
            return activeTopic === "all" || activeTopic === blog.activeTopic ? (
              <Col key={blog.id} className="mb-3" xs={12} sm={6} md={4} lg={4}>
                <Card className="mt-5 mt-md-0 w-100" style={{ margin: "auto" }}>
                  <div
                    style={{
                      backgroundImage: `url(${ImgArr[blog.img]})`,
                      height: "100%",
                      backgroundSize: "cover",
                      height: "35vh",
                    }}
                  ></div>
                  <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Title>
                      <p className="author-p" style={{fontSize: '1rem'}}>
                        {blog.author}
                      </p>
                    </Card.Title>
                    <Card.Text>{blog.text.substring(0, 80)}...</Card.Text>
                    <Button className="btn-app btn-blog" href="#">
                      <Link to={`/blogs/${blog.id}`}>Continue reading</Link>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ) : null;
          })}
        </Row>
      </div>

      <Modal isOpen={toggle}>
        <ModalHeader>Coming Soon</ModalHeader>
        <ModalBody>
          <div style={{ textAlign: "center", margin: "10%" }}>
            <h4 className="mb-3">This feature is under construction</h4>
            <div style={{ width: "15%", margin: "auto" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM104 432c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24z" />
              </svg>
            </div>
          </div>
        </ModalBody>
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

export default Blog;
