import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  const { id } = useParams();
  const { data, loading } = useFetch({
    url: `https://fakestoreapi.com/products/${id}`,
  });

  if (loading) return "Loading...";

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img className="img-fluid" src={data.image} alt="" />
        </div>
        <div className="col-8">
          <h1>{data.title}</h1>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{data.description}</li>
            <li className="list-group-item">{data.category}</li>
            <li className="list-group-item">{data.price}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Product;
