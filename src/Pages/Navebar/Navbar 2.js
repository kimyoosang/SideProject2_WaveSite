import React from "react";
import "./Navbar.css";

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
        <div class="floating-bg"></div>
        <h1 class="section-1-heading">Creative Design</h1>
        <div class="logo">
          <i class="fas fa-bezier-curve"></i>
        </div>
      </section>
    </>
  );
}

export default Navbar;
