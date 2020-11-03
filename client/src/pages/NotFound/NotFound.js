import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
      <section className = "NotFound">
        <p>
          <span>
            404
          </span>
          <Link to="/">Go back</Link>
        </p>
        <div>
        </div>
      </section>
  );
}

export default NotFound;