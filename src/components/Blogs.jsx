import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Blogs = () => {
  const { data, loading } = useFetch({
    url: "https://jsonplaceholder.typicode.com/posts",
  });
  if (loading) return "Loading. . .";

  return (
    <div className="container">
      <h1>Blogs</h1>
      <ul className="list-group list-group-flush">
        {data.map((blog) => (
          <li key={blog.id} className="list-group-item">
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
