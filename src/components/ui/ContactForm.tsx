import React from "react";
import Button from "./Button";
import "../../style/pages/Contact.scss"

export default function ContactForm() {
  return (
    <div className="contactFormContr">
      <h2 className="fs-h3 fw-bold">Get in Touch</h2>
      <div>
        <input type="text" placeholder="Name" className="input" />
        <input type="text" placeholder="Email" className="input" />
      </div>
      <textarea
        placeholder="Write a message..."
        className="input message"
      />
      <Button size="large" className="messageButton">
        Send Message
      </Button>
    </div>
  );
}
