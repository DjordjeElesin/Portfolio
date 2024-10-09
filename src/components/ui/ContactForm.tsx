import React, { useRef, useState } from "react";
import Button from "./Button";
import "../../style/pages/Contact.scss";
import emailjs from "@emailjs/browser";

type MessageDataType = {
  name: string;
  email: string;
  message: string;
};

type ErrorsType = {
  name?: string;
  email?: string;
  message?: string;
};

const initalData = {
  name: "",
  email: "",
  message: "",
};

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string;

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [messageData, setMessageData] = useState<MessageDataType>(initalData);
  const [errors, setErrors] = useState(initalData);

  const handleMessageData = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setMessageData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const checkMessageData = () => {
    let newErrors: ErrorsType = {};
    if (!messageData.name) {
      newErrors.name = "Name is required";
    }
    if (!messageData.email) {
      newErrors.email = "Email address is required";
    }
    if (!messageData.message) {
      newErrors.name = "Message can not be empty";
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      newErrors,
    }));
    return  Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      if(checkMessageData()){
        emailjs
          .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
            publicKey: PUBLIC_KEY,
          })
          .then(
            () => console.log("SUCCESS"),
            (err) => console.log("ERROR: ", err)
          );
      }
      else{
        return
      }
    }
  };

  return (
    <form className="contactFormContr" onSubmit={handleSubmit} ref={formRef}>
      <h2 className="fs-h3 fw-bold">Get in Touch</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={messageData.name}
          onChange={handleMessageData}
          className="input"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={messageData.email}
          onChange={handleMessageData}
          className="input"
        />
      </div>
      <textarea
        placeholder="Write a message..."
        name="message"
        value={messageData.message}
        onChange={handleMessageData}
        className="input message"
      />
      <Button size="large" className="messageButton" type="submit">
        Send Message
      </Button>
    </form>
  );
}
