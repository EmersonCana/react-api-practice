import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Blog = () => {
  const { id } = useParams();
  const { data, loading } = useFetch({
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
  });
  if (loading) return "Loading. . .";

  return (
    <div className="container">
      <div className="card p-3">
        <div className="card-body">
          <h2>{data.title}</h2>
          <hr />
          <p className="h4">{data.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
