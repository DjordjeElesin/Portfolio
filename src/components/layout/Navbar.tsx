import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../../style/components/layout/Navigation.scss";
import { User, House, Stack, EnvelopeOpen, } from "@phosphor-icons/react";

export default function Navbar() {
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

  return (
    <div className="navigation">
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
      <span className="break"></span>
      <ul>
        {navItems.map((item) => (
          <li
            key={item.path}
            className={isActive(item.path) ? "isActiveLink" : ""}
          >
            <div className="iconContr">
              <div>
                {item.icon}
              </div>
              <div>
                {item.icon}
              </div>
            </div>
            <NavLink to={item.path}>{item.label}</NavLink>
          </li>
        ))}
      </ul>
      <span className="break"></span>
    </div>
  );
}
