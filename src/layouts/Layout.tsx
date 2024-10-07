import React from "react";
import Navbar from "../components/layout/Navbar";
import { Outlet } from "react-router-dom";
import Status from "../components/ui/Status";
import Footer from "../components/layout/Footer";
import Toggle from "../components/ui/Toggle";
import { Switch } from "@mui/material";
import { useRef } from "react";

const styles = {
  height: '10px',
  'background-color': "#1A1A1A"
}

export default function Layout() {
  return (
    <div className="flex h-screen" data-theme='light'>
      <Navbar />
      <main className="p-8 pb-0 w-full">
        <div className="mb-8 flex justify-between">
          <Status isAvailable/>
          <Toggle />
        </div>
        <Outlet />
        <Footer/>
      </main>
    </div>
  );
}
