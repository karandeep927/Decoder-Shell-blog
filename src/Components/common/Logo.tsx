import logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";

function Logo({className=""}) {
  return (
      <Link to="/" className={className}>
        <img src={logo} alt="Decoder Shell logo" className="w-32"/>
      </Link>
  );
}

export default Logo;
