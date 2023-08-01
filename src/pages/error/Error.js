import React from "react";
import "./error.scss";

function Error() {
  return (
    <section id="error-section">
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src="./logo.jpg" className="img-fluid" alt="user"></img>
          <h2>404</h2>
          <h4>Səhifə tapılmadı</h4>
        </div>
      </div>
    </section>
  );
}

export default Error;
