import React from "react";
import "/.CardPage.css";

function CardPage() {
  return (
    <>
      <section className="section-2">
        <h1 className="section-heading">Customers</h1>
        <div className="customers-wrapper">
          <div className="customer">
            <i className="fas fa-quote-left"></i>
            <p className="customer-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              numquam pariatur dolore quos possimus assumenda qui, eveniet,
              consequatur, totam iste exercitationem dolor corporis nam? Quo
              harum molestiae libero id debitis.
            </p>
            <div className="customer-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CardPage;
