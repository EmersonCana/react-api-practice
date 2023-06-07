import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Products = () => {
  const { data, loading } = useFetch({
    url: "https://fakestoreapi.com/products",
  });
  console.log(data);
  return (
    <>
      <div>Products</div>
      <div className="row">
        {data.map((product) => (
          <div className="col-3">
            <div className="card">
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  {product.description.substring(0, 100)}
                </p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
