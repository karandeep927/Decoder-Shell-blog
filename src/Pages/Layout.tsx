import { Outlet } from "react-router-dom"
import Header from "../Components/Layout/Header"
import Footer from "../Components/Layout/Footer"




const Layout = () => {
    
    return (
     <>
      <Header/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default Layout