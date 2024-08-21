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
import health1 from "../imgs/blog/health1.webp";
import food1 from "../imgs/blog/food1.webp";
import sport1 from "../imgs/blog/sport1.webp";
import health2 from "../imgs/blog/health2.webp";
import food2 from "../imgs/blog/food2.webp";
import sport2 from "../imgs/blog/sport2.webp";
import health3 from "../imgs/blog/health3.webp";
import food3 from "../imgs/blog/food3.webp";
import sport3 from "../imgs/blog/sport3.webp";
import data from "../data/blogs.json";

const Blog = () => {
  const [activeTopic, setActiveTopic] = useState("all");

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
            onClick={() => setActiveTopic("all")}
          >
            View All
          </Nav.Link>
          <Nav.Link onClick={() => setActiveTopic("health")}>Health</Nav.Link>
          <Nav.Link onClick={() => setActiveTopic("sport")}>Sport</Nav.Link>
          <Nav.Link onClick={() => setActiveTopic("food")}>Food</Nav.Link>
        </Nav>
      </Navbar>
      <div className="w-100 m-x d-flex justify-content-center align-items-center">
        <Row className="w-100 card-container">
          {data.map((blog) => {
            if (activeTopic === "all" || blog.activeTopic === activeTopic)
              return (
                <Col
                  key={blog.id}
                  className="mb-3"
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                >
                  <Link className="blog-link" to={`/blogs/${blog.id}`}>
                    <Card
                      className="mt-5 mt-md-0 w-100"
                      style={{ margin: "auto" }}
                    >
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
                          <p className="author-p" style={{ fontSize: "1rem" }}>
                            {blog.author}
                          </p>
                        </Card.Title>
                        <Card.Text>{blog.text.substring(0, 80)}...</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Blog;
