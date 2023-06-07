import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();
  const getBlog = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const getData = await fetch(url);
    const data = await getData.json();
    setBlog(data);
  };
  getBlog();

  return (
    <div className="container">
      <div className="card p-3">
        <div className="card-body">
          <h2>{blog.title}</h2>
          <hr />
          <p className="h4">{blog.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
