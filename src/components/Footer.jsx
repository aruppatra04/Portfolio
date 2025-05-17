import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaXTwitter,
  FaFacebook,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
        {/* Left Side */}
        <div className="space-y-4 md:w-1/3">
          <h2 className="text-2xl font-semibold">Arup Patra</h2>
          <p>Kolkata, WB, India</p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://linkedin.com/in/aruppatra"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/aruppatra04"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://instagram.com/arup.patra04"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://x.com/arup_patra04"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="https://www.facebook.com/share/1Bh6CYrWsA/?mibextid=wwXIfr.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500"
            >
              <FaFacebook size={20} />
            </a>
          </div>
        </div>

        {/* Right Side - Quick Links */}
        <div className="md:w-2/3">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2">
            <a href="#home" className="hover:text-purple-500">
              Home
            </a>
            <a href="#coding" className="hover:text-purple-500">
              Coding Journey
            </a>
            <a href="#education" className="hover:text-purple-500">
              Education
            </a>
            <a href="#about" className="hover:text-purple-500">
              About
            </a>
            <a href="#experience" className="hover:text-purple-500">
              Experience
            </a>
            <a href="#contact" className="hover:text-purple-500">
              Contact
            </a>
            <a href="#technologies" className="hover:text-purple-500">
              Technologies
            </a>
            <a href="#projects" className="hover:text-purple-500">
              Projects
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-10 text-neutral-500">
        © {new Date().getFullYear()} Arup Patra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
