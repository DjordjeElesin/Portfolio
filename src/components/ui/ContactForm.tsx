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
  const [validationMessage, setValidationMessage] = useState("");

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

  const createValidationString = (errors: string[]) => {
    let validationString;
    if(errors.length === 1){
      validationString = errors[0] + " is required."
    }else if(errors.length === 2){
      validationString = errors.join('and') + 'are required.'
    }else{
      validationString = errors.slice(0,2).join(', ') + ` and ${errors[2]} are required`;
    }
  }

  const checkMessageData = () => {
    let newErrors: ErrorsType = {};

    if (!messageData.name) {
      newErrors.name = "Name";
    }
    if (!messageData.email) {
      newErrors.email = "Email";
    }
    if (!messageData.message) {
      newErrors.message = "Message";
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      newErrors,
    }));
    createValidationString(Object.values(newErrors))
   
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      if (checkMessageData()) {
        /* emailjs
          .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
            publicKey: PUBLIC_KEY,
          })
          .then(
            () => console.log("SUCCESS"),
            (err) => console.log("ERROR: ", err)
          );
        setMessageData(initalData);
        setValidationMessage('Email has been sent successfully!'); */
      } else {
        return;
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
      {validationMessage &&
         <div>
          {validationMessage}
        </div>
      }
      <Button size="large" className="messageButton" type="submit">
        Send Message
      </Button>
    </form>
  );
}
