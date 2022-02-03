import React from "react";

function Navbar() {
  return (
    <>
      <title>Creative Design</title>
      <section className="section-1">
        <nav className="navbar">
          <a href="" className="navbar-link">
            Design
          </a>
          <a href="" className="navbar-link">
            Customers
          </a>
          <a href="" className="navbar-link">
            Team
          </a>
          <a href="" className="navbar-link">
            Contact
          </a>
        </nav>
        <div className="floating-bg">
          <h1 className="section-1-heading">Creative Design</h1>
          <div className="logo">
            <i className="fas fa-bezier-curve"></i>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
