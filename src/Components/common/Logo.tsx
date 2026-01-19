import logo from "@/assets/images/logo.png";

function Logo({className=""}) {
  return (
      <a href="/" className={className}>
        <img src={logo} alt="Decoder Shell logo" className="w-32"/>
      </a>
  );
}

export default Logo;
