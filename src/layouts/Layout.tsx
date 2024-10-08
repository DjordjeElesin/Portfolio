import React from "react";
import Navbar from "../components/layout/Navbar";
import { Outlet } from "react-router-dom";
import Status from "../components/ui/Status";
import Footer from "../components/layout/Footer";
import Toggle from "../components/ui/Toggle";
import { Moon, Sun } from '@phosphor-icons/react';
import '../style/layout/Layout.scss'


export default function Layout() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')

  const handleThemeChange = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <div className="container" data-theme={theme}>
      <Navbar />
      <main className="p-8 pb-0 w-full">
        <div className="mb-8 flex justify-between">
          <Status isAvailable/>
          <Toggle onChange={handleThemeChange} uncheckedLabel={<Moon size={30}/>} checkedLabel={<Sun size={30}/>}/>
        </div>
        <Outlet />
        <Footer/>
      </main>
    </div>
  );
}
