import React from "react";
import Navbar from "../components/layout/Navbar";
import { Outlet } from "react-router-dom";
import Status from "../components/ui/Status";
import Footer from "../components/layout/Footer";
import "../style/components/layout/Layout.scss";
import { Moon, Sun } from "@phosphor-icons/react";
import Toggle from "../components/ui/Toggle";
import "../style/layout/Layout.scss";
import useTheme from "../hooks/useTheme";
import BackToTopButton from "../components/ui/BackToTopButton";

export default function Layout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="container" id="container" data-theme={theme}>
      <Navbar />
      <main className="p-8 pb-0 w-full">
        <div className="mb-8 flex justify-between">
          <Status isAvailable />
          <Toggle
            onChange={toggleTheme}
            checked={theme !== "light"}
            uncheckedLabel={<Moon size={30} />}
            checkedLabel={<Sun size={30} />}
          />
        </div>
        <Outlet />
        <Footer />
      </main>
      <BackToTopButton/>
    </div>
  );
}
