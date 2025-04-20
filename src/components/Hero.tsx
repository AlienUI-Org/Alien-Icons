import { FaGithub } from "react-icons/fa";

function Hero() {
  return (
    <div className="bg-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="font-medium text-sm mb-10 text-center">
          <span className="text-gray-500">React · Vue · React Native</span>
        </div>
        <div className="mb-10">
          <h1 className="font-bold text-4xl text-center">
            Awesome customizable SVG icons, built on Heroicons.
          </h1>
        </div>
        <div className="flex justify-center">
          <a href="https://github.com/khaymanii/Alien-Icons">
            <button className="bg-purple-500 px-6 rounded-full py-2 flex gap-3 cursor-pointer">
              <FaGithub className="text-2xl" />
              <span className="font-semibold">Documentation</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
