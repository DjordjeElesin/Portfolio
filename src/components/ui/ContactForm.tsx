import React, { useState } from "react";
import Button from "./Button";
import "../../style/pages/Contact.scss";

type MessageDataType = {
  name: string;
  email: string;
  text: string;
};

const initalData = {
  name: "",
  email: "",
  text: "",
};

export default function ContactForm() {
  const [messageData, setMessageData] = useState<MessageDataType>(initalData);

  const handleMessageData = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault()
    const { name, value } = e.target;
    setMessageData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(messageData)
  }

  return (
    <form className="contactFormContr" onSubmit={handleSubmit}>
      <h2 className="fs-h3 fw-bold">Get in Touch</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleMessageData}
          className="input"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleMessageData}
          className="input"
        />
      </div>
      <textarea
        placeholder="Write a message..."
        name="text"
        onChange={handleMessageData}
        className="input message"
      />
      <Button size="large" className="messageButton" type="submit">
        Send Message
      </Button>
    </form>
  );
}
