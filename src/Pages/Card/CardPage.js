import React from "react";
import customer_1 from "../../images/customer-img-1.jpg";
import customer_2 from "../../images/customer-img-2.jpg";
import customer_3 from "../../images/customer-img-3.jpg";
import "./CardPage.css";

function CardPage() {
  return (
    <>
      <section class="section-2" id="customers">
        <h1 class="section-heading">Customers</h1>
        <div class="customers-wrapper">
          <div class="customer">
            <i class="fas fa-quote-left"></i>
            <p class="customer-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              totam voluptatum accusantium pariatur, nulla quasi quibusdam ipsa
              quisquam repellat atque, tempore assumenda vitae. Earum fuga a
              accusamus, nisi ullam delectus!
            </p>
            <div class="customer-rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <img src={customer_1} className="customer-img" />
            <h4 className="customer-name">Jane Lee</h4>
          </div>
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
              <i className="fas fa-star"></i>
            </div>
            <img src={customer_2} className="customer-img" />
            <h4 className="customer-name">Bob smith</h4>
          </div>
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
              <i className="far fa-star"></i>
            </div>
            <img src={customer_3} className="customer-img" />
            <h4 className="customer-name">Ann Brown</h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default CardPage;
