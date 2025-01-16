import React from "react";
import "../styles/ContactForm.css";

const Form = () => {
  return (
    <div className="form-container">
      <h1 className="form-title">Register Now</h1>
      <p className="form-subtitle">
        Register now to receive access to amazing specials and discounts!
      </p>
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Name (required)</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email (required)</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <button type="submit" className="form-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Form;
