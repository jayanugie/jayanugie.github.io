import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

function App() {
  return (
    <div className="text-white">
      {/* navbar */}
      <div className="p-3 bg-sky-900">
        <div className="container mx-auto p-1 flex flex-row">
          <div className="basis-2/6">
            <div className="flex username">
              <img src="/profile.jpeg" alt="profile" className="rounded-full mx-3 bg-auto"/>
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
          <div className="basis-2/6 text-right mx-3">
            <a href="#whwatsapp">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
