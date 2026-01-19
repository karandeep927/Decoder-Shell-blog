import { CloseIcon } from "../../utils/icons"

function NavBar({navBarStatus,toggleNavBar,navTabs}) {
 
  return (
    <ul className="text-white">
      {/* mobile version */}
      <div className={`absolute z-30 bg-navBar w-full h-screen top-0 md:hidden transition-all duration-700  ${navBarStatus ? "-left-full" : "left-0"}`}>
        <div className="w-full flex items-center justify-end p-2" >
          <CloseIcon onClick={toggleNavBar}  className="cursor-pointer"/>
        </div>
      {navTabs.map((value,id)=>(
        <li key={`${id}`} className=" p-2 text-center text-navLinks transition-all duration-500 border-b rounded hover:bg-navLinksHover" ><a href={`/${value}`}>{value}</a></li>
      ))}
      </div>

      {/* Desktop version */}
      <div className="p-1 mx-2 hidden md:flex items-center justify-between gap-3 shadow-md">
        {navTabs.map((value,id)=>(
        <li key={`${id}`}  className="mx-2 py-1 px-3 rounded transition-all text-navLinks duration-500 hover:bg-navLinksHover"><a href={`/${value}`}>{value}</a></li>
      ))}
      </div>
       
    </ul>
  )
}

export default NavBar