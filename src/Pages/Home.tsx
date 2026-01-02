import { useState } from "react";
import NavBar from "../Components/NavBar";
import { BarsIcon, MoonIcon, SunIcon } from "../utils/icons";
import Logo from "../Components/Logo";
import InputBox from "../Components/InputBox";

function Home() {
  const [navBarStatus, setNavBarStatus] = useState(false);
  const [isDarkModeOn, setDarkMode] = useState(true);
  return (
    <div>
      <header>
        <div className="bg-primary w-full flex items-center justify-between relative px-4 py-2">
          <div className="flex items-center gap-2">
            <BarsIcon className="text-[20px] cursor-pointer sm:hidden text-forth" onClick={()=>setNavBarStatus((prev)=>!prev)} />
            <Logo />
          </div>
          <NavBar  navBarStatus={navBarStatus} setNavBarStatus={setNavBarStatus}/>
          <div className=" flex items-center justify-between gap-3 mx-2">
          <InputBox placeholder={"search..."}/>
            <div
              className="cursor-pointer"
              onClick={() => {
                setDarkMode(!isDarkModeOn);
              }}
            >
              {isDarkModeOn ? <MoonIcon className="text-forth" size={'20px'}/> : <SunIcon size={'20px'} className="text-forth" />}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
