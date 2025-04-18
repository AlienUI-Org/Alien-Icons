import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-purple-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="/">
              <h2 className="text-3xl font-bold">Ai</h2>
            </a>
          </div>

          <div className="flex items-center lg:gap-4 gap-3">
            <a href="https://linkedin.com/company/alien-ui">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="https://x.com/alienui">
              <FaXTwitter className="text-xl" />
            </a>
            <a href="https://github.com/khaymanii/Alien-Icons">
              <FaGithub className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
