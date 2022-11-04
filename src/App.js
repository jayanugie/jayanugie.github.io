import {
  faWhatsapp,
  faLinkedin,
  faGit,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

function App() {
  return (
    <div className="text-white">
      {/* navbar */}
      <div className="p-3 bg-sky-900 sticky top-0">
        <div className="container mx-auto lg:px-20 md:px-0 flex flex-row">
          <div className="basis-2/6">
            <div className="flex username">
              <img
                src="profile.jpeg"
                alt="profile"
                className="rounded-full bg-auto mr-3"
              />
              <p>jayanugie</p>
            </div>
          </div>
          <div className="basis-2/6">
            <div className="md:flex flex-row text-center hidden">
              <div className="basis-1/4">
                <a className="hover:text-sky-500" href="#home">
                  Home
                </a>
              </div>
              <div className="basis-1/4">
                <a className="hover:text-sky-500" href="#about">
                  About
                </a>
              </div>
              <div className="basis-1/4">
                <a className="hover:text-sky-500" href="#projects">
                  Projects
                </a>
              </div>
              <div className="basis-1/4">
                <a className="hover:text-sky-500" href="#contact">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="basis-2/6 text-right">
            <a href="https://wa.me/+6285163575313" target="blank">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="cursor-pointer h-4 hover:h-5"
              />
            </a>
          </div>
        </div>
      </div>

      {/* home page */}
      <div id="home">
        <div className="container mx-auto lg:px-64 md:px-0">
          <div className="mt-3 rounded-lg bg-sky-900">
            <img
              alt="cover"
              src="cover.jpg"
              className="p-1 rounded-lg w-full h-52 object-cover"
            />
            {/* profile, name, title */}
            <div className="relative">
              <div className="flex relative left-12 bottom-12">
                <img
                  alt="profile"
                  src="profile.jpeg"
                  className="rounded-full h-32 border-2 border-sky-900"
                />
                <div className="ml-3 mt-14">
                  <p className="font-bold text-lg">Nugie Jaya Nugraha</p>
                  <p className="text-sm italic">Frontned Developer</p>
                </div>
              </div>
            </div>

            {/* link */}
            <div className="relative">
              <div className="absolute right-10 bottom-24">
                <a
                  href="mailto:jayanugie14@gmail.com"
                  className="mr-4"
                  target="blank"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="cursor-pointer h-5 hover:h-6"
                  />
                </a>
                <a
                  href="https://www.instagram.com/jayanugie/"
                  className="mr-4"
                  target="blank"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="cursor-pointer h-5 hover:h-6"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/jayanugie/"
                  className="mr-4"
                  target="blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="cursor-pointer h-5 hover:h-6"
                  />
                </a>
                <a href="https://github.com/jayanugie" target="blank">
                  <FontAwesomeIcon
                    icon={faGit}
                    className="cursor-pointer h-5 hover:h-6"
                  />
                </a>
              </div>
            </div>

            {/* About */}
            <div className="ml-14">
              <p className="font-bold">About</p>
            </div>

            {/* others */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
