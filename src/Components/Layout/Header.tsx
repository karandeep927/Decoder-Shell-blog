import { useState } from "react";
import { BarsIcon, MoonIcon, SunIcon } from "../../utils/icons";
import InputBox from "../common/InputBox";
import Logo from "../common/Logo";
import NavBar from "./NavBar";

function Header() {
    const [navBarStatus, setNavBarStatus] = useState(true);
  const [isDarkModeOn, setDarkMode] = useState(true);
  function toggleNavBar() {
    setNavBarStatus((prev) => !prev);
  }
  return (
    <header className="sticky top-0 z-20 bg-navBar text-primary bg-base">
  <div className="h-14 w-full flex items-center justify-between px-4">
    
    {/* Left */}
    <div className="flex items-center gap-2">
      <BarsIcon
        className="text-xl cursor-pointer md:hidden"
        onClick={toggleNavBar}
      />
      <Logo />
    </div>

    {/* Center */}
    <NavBar
      navBarStatus={navBarStatus}
      toggleNavBar={toggleNavBar}
    />

    {/* Right */}
    <div className="flex items-center gap-3">
      <div className="hidden sm:block">
        <InputBox placeholder="Search…" />
      </div>

      <button
        aria-label="Toggle theme"
        onClick={() => setDarkMode(!isDarkModeOn)}
        className="p-1 rounded hover:bg-black/10 transition"
      >
        {isDarkModeOn ? (
          <MoonIcon size={20} className="text-forth" />
        ) : (
          <SunIcon size={20} className="text-forth" />
        )}
      </button>
    </div>

  </div>
</header>

  )
}

export default Header