import { useState } from "react";
import { BarsIcon, MoonIcon, SunIcon } from "../utils/icons";
import Logo from "../Components/common/Logo";
import InputBox from "../Components/common/InputBox";
import Slider from "../Components/common/Slider";
import BlogCard from "../Components/blog/BlogCard";
import NavBar from "../Components/Layout/NavBar";
import HomeMainNews from "./HomeMainNews";
import Footer from "../Components/Layout/Footer";

function Home() {
  const navTabs = ['Home','Blogs','About','Contact Us']
  const [navBarStatus, setNavBarStatus] = useState(true);
  const [isDarkModeOn, setDarkMode] = useState(true);
  function toggleNavBar() {
    setNavBarStatus((prev) => !prev);
  }
  return (
    <div className="w-full h-screen overflow-x-hidden">
      <header className="sticky top-0 z-20 text-bodyPrimary">
        <div className="bg-navBar w-full flex items-center justify-between relative px-4 py-2">
          <div className="flex items-center gap-2">
            <BarsIcon
              className="text-[20px] cursor-pointer md:hidden text-bodyPrimary"
              onClick={toggleNavBar}
            />
            <Logo />
          </div>
          <NavBar navBarStatus={navBarStatus} toggleNavBar={toggleNavBar} navTabs={navTabs}/>
          <div className=" flex items-center justify-between gap-3 mx-2">
            <InputBox placeholder={"search..."} />
            <div
              className="cursor-pointer"
              onClick={() => {
                setDarkMode(!isDarkModeOn);
              }}
            >
              {isDarkModeOn ? (
                <MoonIcon className="text-forth" size={"20px"} />
              ) : (
                <SunIcon size={"20px"} className="text-forth" />
              )}
            </div>
          </div>
        </div>
      </header>
      <main className="w-full h-fit bg-pageBg p-3">
        <h1 className="text-2xl text-heading mb-2">Latest</h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-2 w-full sm:min-w-72 sm:min-h-96 justify-items-stretch">
            <Slider>
              <HomeMainNews />
              <HomeMainNews />
              <HomeMainNews />
            </Slider>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 sm:grid-rows-2 sm:grid-cols-1">
            <HomeMainNews />
            <HomeMainNews />
          </div>
        </div>
        <section>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl text-heading my-3">Top News</h1>
            <p className="sm:hidden cursor-pointer">See more</p>
          </div>
          <div className="max-h-64 grid gap-4 grid-cols-2 sm:grid-cols-4  p-3 overflow-hidden">
            <BlogCard imgUrl="" tags={[]} title="title" />
            <BlogCard imgUrl="" tags={[]} title="title" />
            <BlogCard imgUrl="" tags={[]} title="title" />
            <BlogCard imgUrl="" tags={[]} title="title" />
            <BlogCard imgUrl="" tags={[]} title="title" />
          </div>
        </section>
        <section>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl text-heading my-3">Popular Articles</h1>
            <p className="sm:hidden cursor-pointer">See more</p>
          </div>
          <div className="max-h-64 grid gap-4 grid-cols-2 sm:grid-cols-4  p-3 overflow-hidden">
            <BlogCard imgUrl="" tags={[]} title="title" />
            <BlogCard imgUrl="" tags={[]} title="title" />
            <BlogCard imgUrl="" tags={[]} title="title" />
            <BlogCard imgUrl="" tags={[]} title="title" />
            <BlogCard imgUrl="" tags={[]} title="title" />
          </div>
        </section>
      </main>
      <Footer navTabs={navTabs}/>
    </div>
  );
}

export default Home;
