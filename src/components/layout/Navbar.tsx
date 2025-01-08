import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../../style/components/layout/Navigation.scss";
import {
  User,
  House,
  Stack,
  EnvelopeOpen,
  Suitcase,
  List,
  X,
} from "@phosphor-icons/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  type NavItem = {
    path: string;
    label: string;
    icon: React.ReactElement;
  };

  const navItems: NavItem[] = [
    {
      path: "/",
      label: "Home",
      icon: <House size={20} />,
    },
    {
      path: "/about",
      label: "About",
      icon: <User size={20} />,
    },
    {
      path: "/projects",
      label: "Projects",
      icon: <Suitcase size={20}/>
    },
    {
      path: "/stack",
      label: "Stack",
      icon: <Stack size={20} />,
    },
    {
      path: "/contact",
      label: "Contact",
      icon: <EnvelopeOpen size={20} />,
    },
  ];

  const handleOptionClick = () => {
    if(isMenuOpen){
      setIsMenuOpen(false)
    }else{
      return
    }
  }

  return (
    <div className="navigation">
      <div className="navigationHeading">
        <div className="profileContr">
          <div className="profileImgContr">
            <Link to="/about">
              <img alt="ProfilePicture" src="assets/ProfileBW.jpg" />
            </Link>
          </div>
          <div className="profileInfoContr">
            <Link to="/about">
              <p>Đorđe Elesin</p>
              <span>Frontend Developer</span>
            </Link>
          </div>
        </div>
        {isMenuOpen ? (
          <X
            className="hamburgerMenu"
            size={50}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        ) : (
          <List
            className="hamburgerMenu"
            size={50}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        )}
      </div>
      <div className={`navigationList ${isMenuOpen ? "openMenu" : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li
              key={item.path}
              className={isActive(item.path) ? "isActiveLink" : ""}
              onClick={handleOptionClick}
            >
              <NavLink to={item.path}>
                <div className="iconContr">
                  <div>{item.icon}</div>
                  <div>{item.icon}</div>
                </div>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <span className="break"></span>
      </div>
    </div>
  );
}
