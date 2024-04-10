import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home.js";
import Blog from "./components/Blog";
import BlogArticle from "./components/BlogArticle";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blogs/:id" element={<BlogArticle />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
