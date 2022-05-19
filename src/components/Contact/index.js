import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("your email is invalid!");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required!`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="parent">
      <h3>Contact Me</h3>
      <form id="contact" onSubmit={handleSubmit}>
        <div id="form-name">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            className="form-input"
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div id="form-email">
          <label htmlFor="email" className="form-label">
            Email Address:
          </label>
          <input
            className="form-input"
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div id="form-message">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            className="form-input"
            name="message"
            rows="10"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div id="form-error">
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" id="form-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
