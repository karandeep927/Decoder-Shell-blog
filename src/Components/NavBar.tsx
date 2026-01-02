import { CloseIcon } from "../utils/icons"

function NavBar({navBarStatus,setNavBarStatus}) {
  const navTabs = ['Home','Blogs','About','Contact Us']
    console.log(navBarStatus)
  return (
    <ul className="text-white">
      {/* mobile first */}
      <div className={`absolute bg-primary w-full top-0 sm:hidden transition-all duration-700  ${navBarStatus ? "-left-full" : "left-0"}`}>
        <div className="w-full flex items-center justify-end p-2" >
          <CloseIcon onClick={()=>setNavBarStatus((prev)=>!prev)}  className="cursor-pointer"/>
        </div>
      {navTabs.map((value,id)=>(
        <li key={`${id}`} className=" p-2 text-center transition-all duration-500 border-b rounded hover:bg-second" ><a href={`/${value}`}>{value}</a></li>
      ))}
      </div>

      {/* Desktop version */}
      <div className="p-1 mx-2 hidden sm:flex items-center justify-between gap-3">
        {navTabs.map((value,id)=>(
        <li key={`${id}`}  className="mx-2 py-1 px-3 rounded transition-all duration-500 hover:bg-second"><a href={`/${value}`}>{value}</a></li>
      ))}
      </div>
       
    </ul>
  )
}

export default NavBar