import React from "react";
import { useHistory, useParams } from "react-router-dom";
import data from "../data/blogs.json";

import health1 from "../imgs/blog/health1.png";
import food1 from "../imgs/blog/food1.jpg";
import sport1 from "../imgs/blog/sport1.png";
import health2 from "../imgs/blog/health2.jpg";
import food2 from "../imgs/blog/food2.jpg";
import sport2 from "../imgs/blog/sport2.jpg";
import health3 from "../imgs/blog/health3.jpg";
import food3 from "../imgs/blog/food3.jpg";
import sport3 from "../imgs/blog/sport3.jpg";

const BlogArticle = ({}) => {
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
  const { id } = useParams();
  const article = data.find((article) => article.id === id);
  return (
    <div className="blog-article-container">
      <h2>{article.title}</h2>
      <p className="author-p">{article.author}</p>
      <br />
      <p>{article.p1}</p>
      <img src={ImgArr[article.img]} alt="" />
      <br />
      <p>{article.p2}</p>
      <br />
      <p>{article.p3}</p>
    </div>
  );
};

export default BlogArticle;
