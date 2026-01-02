function Logo() {
  return (
    <div className=" font-bold text-xl text-forth cursor-pointer">
      <a href="/">
        <h1 className="hidden sm:block">
        Decoder <span>Shell</span>
      </h1>
      <h1 className="sm:hidden">
        D<span>S</span>
      </h1>
      </a>
    </div>
  );
}

export default Logo;
