//style
import "../../style/pages/Contact.scss";
//hooks
import { useRef, useState } from "react";
//components
import Button from "./Button";
//libraries
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import useTheme from "../../hooks/useTheme";
import Spinner from "./Spinner";

type MessageDataType = {
  fullName: string;
  email: string;
  message: string;
};

type ErrorsType = {
  fullName?: string;
  email?: string;
  message?: string;
};

const initalData = {
  fullName: "",
  email: "",
  message: "",
};

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);

  //states
  const [messageData, setMessageData] = useState<MessageDataType>(initalData);
  const [errors, setErrors] = useState<ErrorsType>(initalData);
  const [isLoading, setIsLoading] = useState(false);
  //theme
  const { theme } = useTheme();

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
    const emailRegex = /^(?!.*\s)(?=.*@)(?=.*\.)/;

    if (!messageData.fullName) {
      newErrors.fullName = "Full Name is required";
    }
    if (!messageData.email) {
      newErrors.email = "Email is required";
    }else if(!emailRegex.test(messageData.email)){
      newErrors.email = "Please input a valid email address";
    }
    if (!messageData.message) {
      newErrors.message = "Message can not be empty";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current || !checkMessageData()) return;

    setIsLoading(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      toast.success("Email has been sent successfully!", { theme });
      setMessageData(initalData);
    } catch (error) {
      toast.error("Oops! Failed to send email. Please try again", {
        theme,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="contactFormContr" onSubmit={handleSubmit} ref={formRef}>
      <h2 className="fs-h3 fw-bold">Get in Touch</h2>
      <div className="inputsContr">
        <div className="inputContr">
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={messageData.fullName}
            onChange={handleMessageData}
            className={`input ${errors.fullName ? "error" : ""}`}
          />
          {errors.fullName && <span>{errors.fullName}</span>}
        </div>
        <div className="inputContr">
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={messageData.email}
            onChange={handleMessageData}
            className={`input ${errors.email ? "error" : ""}`}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
      </div>
      <div className="inputContr">
        <textarea
          placeholder="Write a message..."
          name="message"
          value={messageData.message}
          onChange={handleMessageData}
          className={`input message ${errors.message ? "error" : ""}`}
        />
        {errors.message && <span>{errors.message}</span>}
      </div>
      <Button size="large" className="messageButton" type="submit">
        {isLoading ? <Spinner size="30px"/> : "Send Message"}
      </Button>
    </form>
  );
}
