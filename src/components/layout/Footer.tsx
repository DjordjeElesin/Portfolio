import {
  Copyright,
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import "../../style/components/layout/Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="copyrightContr">
        <div>
          <Copyright />
          <span>Copyright 2024. All rights Reserved</span>
        </div>
        <p>Made by Đorđe Elesin</p>
      </div>
      <div className="socialsContr">
        <Link to="https://www.instagram.com/djoleelesin/">
          <InstagramLogo size={20}/>
        </Link>
        <Link to="https://www.linkedin.com/in/%C4%91or%C4%91e-elesin-14a066299/">
          <LinkedinLogo size={20}/>
        </Link>
        <Link to="https://github.com/DjordjeElesin">
          <GithubLogo size={20}/>
        </Link>
      </div>
    </footer>
  );
}
