import { Link } from "react-router-dom";
import { navLinks } from "../../utils/icons";
import Logo from "../common/Logo";
import SocialLink from "../common/SocialLink";


function Footer() {
  return (
    <footer className="bg-muted text-base dark:bg-base dark:text-muted py-4">
  <div className="flex flex-col sm:flex-row sm:justify-around">

    {/* Footer logo & summary */}
    <div className="sm:max-w-xs">
      <div className="flex justify-between items-center my-1 px-2">
        <Logo className="my-3" />
        <SocialLink className="sm:hidden mr-2" />
      </div>

      <div className="px-2 py-1 text-sm leading-relaxed">
        <p>
          Decoder Shell is a space where complex programming concepts are
          broken down into clear, practical ideas. We focus on JavaScript,
          web development, and real-world coding patterns used in production.
        </p>
      </div>

      <SocialLink className="hidden sm:flex sm:justify-start my-3 ml-2" />
    </div>

    {/* Footer Links */}
    <div className="m-2 sm:max-w-xs">
      <span className="text-lg font-semibold text-primary inline-block mb-2">
        Links
      </span>

      <ul>
        {navLinks.map((item, index) => (
          <li className="capitalize list-none my-1" key={index}>
            <Link
              to={item.path}
              className="
                border-b border-transparent
                hover:text-primary
                hover:border-primary
                transition-colors
              "
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>

  </div>

  <p className="text-center text-sm text-surface dark:text-muted mt-4">
    © 2026 Decoder Shell
  </p>
</footer>

  );
}
export default Footer;
