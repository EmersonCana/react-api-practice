import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>
        You might be lost. <Link to="/">Go Back.</Link>
      </p>
    </div>
  );
};

export default NotFound;
