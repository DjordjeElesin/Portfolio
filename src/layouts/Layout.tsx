import React from "react";
import Navbar from "../components/layout/Navbar";
import { Outlet } from "react-router-dom";
import Status from "../components/ui/Status";
import Footer from "../components/layout/Footer";

export default function Layout() {
  return (
    <div className="flex h-screen">
      <Navbar />
      <main className="p-8 pb-0 w-full">
        <div className="mb-8">
          <Status isAvailable/>
        </div>
        <Outlet />
        <Footer/>
      </main>
    </div>
  );
}
