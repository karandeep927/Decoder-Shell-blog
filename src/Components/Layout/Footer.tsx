import Logo from "../common/Logo";
import SocialLink from "../common/SocialLink";

type FooterProps = {
  navTabs: string[];
};

function Footer({ navTabs }: FooterProps) {
  return (
    <footer className="bg-primary py-2">
      <div className="text-white flex flex-col sm:flex-row sm:justify-around ">
        {/* footer logo and summary */}
        <div className="sm:max-w-xs">
          <div className="flex justify-between items-center my-1 px-2">
            <Logo className="my-3" />
            <SocialLink className="sm:hidden mr-2" />
          </div>
          <div className="px-2 py-0.5 tracking-normal">
            <p>
              Decoder Shell is a space where complex programming concepts are
              broken down into clear, practical ideas. We focus on JavaScript,
              web development, and real-world coding patterns used in
              production.
            </p>
          </div>
          <SocialLink className="hidden sm:flex sm:justify-start my-3 ml-2" />
        </div>
        {/* footer Links */}
        <div className="m-2 sm:max-w-xs">
          <span className="text-xl font-bold inline-block mb-2">Links</span>
          <div>
            {navTabs.map((item, index) => (
              <li className="capitalize list-none my-1 " key={index}>
                <a
                  href=""
                  className="border-b border-b-transparent hover:border-b-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center my-3 text-white bg-red-700 py-1">
        Copyright ©2026 Decoder Shell
      </p>
    </footer>
  );
}
export default Footer;
