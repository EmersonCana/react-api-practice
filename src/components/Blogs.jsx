import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogList, setBlogList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const getBlogs = fetch(url);
    getBlogs.then((res) => res.json()).then((data) => setBlogList(data));
  }, []);

  return (
    <div className="container">
      <h1>Blogs</h1>
      <ul className="list-group list-group-flush">
        {blogList.map((blog) => (
          <li key={blog.id} className="list-group-item">
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
