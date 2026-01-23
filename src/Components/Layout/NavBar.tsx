import { Link } from "react-router-dom"
import { CloseIcon } from "../../utils/icons"
import { navLinks } from "../../utils/icons"

function NavBar({navBarStatus,toggleNavBar}) {
  return (
    <nav className="relative">
  {/* Mobile Menu */}
  <ul
    className={`
      absolute z-30 w-full h-screen top-0 md:hidden
      bg-muted text-base
      dark:bg-surface dark:text-muted
      transition-all duration-700
      ${navBarStatus ? "-left-full" : "left-0"}
    `}
  >
    <li className="w-full flex justify-end p-3">
      <CloseIcon
        onClick={toggleNavBar}
        className="cursor-pointer text-primary"
      />
    </li>

    {navLinks.map((value, id) => (
      <li
        key={id}
        className="
          p-3 text-center
          border-b border-primary/10
          hover:text-primary
          transition-colors duration-300
        "
      >
        <Link to={value.path}>{value.name}</Link>
      </li>
    ))}
  </ul>

  {/* Desktop Menu */}
  <ul className="hidden md:flex items-center gap-3 px-3">
    {navLinks.map((value, id) => (
      <li
        key={id}
        className="
          px-3 py-1 rounded-md
          text-base dark:text-muted
          hover:bg-primary/10
          hover:text-primary
          transition-all duration-300
        "
      >
        <Link to={value.path}>{value.name}</Link>
      </li>
    ))}
  </ul>
</nav>

  )
}

export default NavBar