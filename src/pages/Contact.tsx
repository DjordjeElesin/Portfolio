import {
  Envelope,
  Phone,
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
} from "@phosphor-icons/react";
import CopyButton from "../components/ui/CopyButton";
import "../style/pages/Contact.scss";
import { Link } from "react-router-dom";
import ContactForm from "../components/ui/ContactForm";

export default function Contact() {
  return (
    <div className="contactPageContr">
      <div className="contactHeading">
        <h1 className="fs-h1 fw-bold">Let's Connect!</h1>
        <p className="text-dark-300">
          Feel free to reach out with your projects, questions, or to connect.
          I'll respond promptly, and we can explore opportunities together.
        </p>
      </div>
      <div className="contactMainContr">
        <div className="contactContr">
          <h2 className="fs-h3 fw-bold">Contact</h2>
          <div className="contactItem">
            <div>
              <Envelope size={20} />
              <span>elesindjordje10@gmail.com</span>
            </div>
            <CopyButton
              textToCopy="elesindjordje10@gmail.com"
              className="bg-dark-100 text-light-100 p-1 rounded-md"
            />
          </div>
          <div className="contactItem">
            <div>
              <Phone size={20} />
              <span>+381 69 2510 220</span>
            </div>
            <CopyButton
              textToCopy="+381 69 2510 220"
              className="bg-dark-100 text-light-100 p-1 rounded-md"
            />
          </div>
        </div>

        <div className="socialsContr">
          <h2 className="fs-h3 fw-bold">Socials</h2>
          <div className="socialsItem">
            <Link to="https://www.instagram.com/djoleelesin/">
              <InstagramLogo size={20} />
            </Link>
            <span>Instagram</span>
          </div>
          <div className="socialsItem">
            <Link to="https://www.linkedin.com/in/%C4%91or%C4%91e-elesin-14a066299/">
              <LinkedinLogo size={20} />
            </Link>
            <span>Linkedin</span>
          </div>
          <div className="socialsItem">
            <Link to="https://github.com/DjordjeElesin">
              <GithubLogo size={20} />
            </Link>
            <span>Github</span>
          </div>
        </div>
        <ContactForm/>
      </div>
    </div>
  );
}
