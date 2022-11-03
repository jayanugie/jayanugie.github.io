import { faWhatsapp, faLinkedin, faGit } from "@fortawesome/free-brands-svg-icons";
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
            <a href="#whwatsapp">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </div>

      {/* home page */}
      <div id="home">
        <div className="container mx-auto lg:px-48 md:px-0">
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
                  className="rounded-full h-32 border-2 border-b-white"
                />
                <div className="ml-3 mt-14">
                  <p className="font-bold">Nugie Jaya Nugraha</p>
                  <p className="text-xs italic">Frontned Developer</p>
                </div>
              </div>
            </div>
            
            {/* link */}
            <div className="relative">
              <div className="absolute right-10 bottom-24">
                <FontAwesomeIcon icon={faLinkedin} className="cursor-pointer mx-4 h-5"/>
                <FontAwesomeIcon icon={faGit} className="cursor-pointer h-5" />
              </div>
            </div>

            {/* skills */}
            <div className="ml-14">
              <p className="font-bold">Skills</p>
              <div className="flex w-96 mt-1 text-center">
                <p className="flex-auto rounded-lg mx-1 p-2 text-xs bg-gray-800">JavaScript</p>
                <p className="flex-auto rounded-lg mx-1 p-2 text-xs bg-gray-800">ReactJS</p>
                <p className="flex-auto rounded-lg mx-1 p-2 text-xs bg-gray-800">NextJS</p>
                <p className="flex-auto rounded-lg mx-1 p-2 text-xs bg-gray-800">PostgreSQL</p>
                <p className="flex-auto rounded-lg mx-1 p-2 text-xs bg-gray-800">Tailwind</p>
              </div>
            </div>

            {/* others */}
            <div className="ml-14 mt-10">
              <p>in processing</p>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
