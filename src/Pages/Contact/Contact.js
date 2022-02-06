import React from "react";
import form_img from "../../images/form-img.png";
import "./Contact.css";

function Contact() {
  return (
    <section className="section-4">
      <h1 className="section-heading">Contact</h1>
      <div className="form-container">
        <img src={form_img} className="form-img" />
        <form className="contact-form">
          <input type="text" placeholder="kimyoosang" />
          <input type="email" placeholder="yoo99485@gmail.com" />
          <textarea placeholder="메시지"></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>

      <p className="copyright">
        Copyrignt &copy; CoodeAndCreate All Rights Reserved
      </p>
    </section>
  );
}

export default Contact;
