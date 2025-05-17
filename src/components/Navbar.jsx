import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav id="home" className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="pl-6 mx-2 h-7 w-full" src={logo} alt="Logo" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
        <a
          href="https://www.linkedin.com/in/aruppatra"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/aruppatra04"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/arup_patra04"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://instagram.com/arup.patra04"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
