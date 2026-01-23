import "./App.css";
import "react-multi-carousel/lib/styles.css";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import ReadPage from "./Pages/ReadPage";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Layout from "./Pages/Layout";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<ReadPage />} />
      </Route>
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
