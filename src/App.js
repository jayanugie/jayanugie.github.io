import {
  faWhatsapp,
  faLinkedin,
  faGit,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { Carousel } from "flowbite-react";

function App() {
  return (
    <div className="text-white">
      {/* navbar */}
      <div className="p-3 bg-sky-900">
        <div className="container mx-auto lg:px-20 px-2 flex flex-row">
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
      <div id="#home">
        <div className="container mx-auto lg:px-56 px-1">
          <div className="mt-3 rounded-lg bg-card">
            <img
              alt="cover"
              src="cover.jpg"
              className="p-1 rounded-lg w-full h-52 object-cover"
            />
            {/* profile, name, title */}
            <div className="relative">
              <div className="flex relative left-3 bottom-12 lg:left-12">
                <img
                  alt="profile"
                  src="profile.jpeg"
                  className="rounded-full h-24 lg:h-32 border-2 border-sky-900"
                />
                <div className="mt-12 ml-1 lg:mt-14 lg:ml-3">
                  <p className="font-bold text-xs lg:text-lg">
                    Nugie Jaya Nugraha
                  </p>
                  <p className="text-xs lg:text-sm italic">
                    Frontned Developer
                  </p>
                </div>
              </div>
            </div>

            {/* link */}
            <div className="relative">
              <div className="absolute right-10 bottom-16 lg:bottom-20">
                <a
                  href="mailto:jayanugie14@gmail.com"
                  className="mr-2 lg:mr-4"
                  target="blank"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="cursor-pointer h-4 hover:h-5 lg:h-6 lg:hover:h-7"
                  />
                </a>
                <a
                  href="https://www.instagram.com/jayanugie/"
                  className="mr-2 lg:mr-4"
                  target="blank"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="cursor-pointer h-4 hover:h-5 lg:h-6 lg:hover:h-7"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/jayanugie/"
                  className="mr-2 lg:mr-4"
                  target="blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="cursor-pointer h-4 hover:h-5 lg:h-6 lg:hover:h-7"
                  />
                </a>
                <a href="https://github.com/jayanugie" target="blank">
                  <FontAwesomeIcon
                    icon={faGit}
                    className="cursor-pointer h-4 hover:h-5 lg:h-6 lg:hover:h-7"
                  />
                </a>
              </div>
            </div>

            {/* About */}
            <div className="mx-6" id="#about">
              <div className="px-5 lg:px-16 rounded-lg text-center">
                <p className="font-bold font-title text-4xl lg:text-6xl">
                  About me
                </p>
                <p className="text-xs lg:text-sm font-thin">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="m-5 bg-sky-900 p-1 rounded-md px-3">
                  <button className="text-sm">Contact me</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="#projects" className=" h-96">
        <div className="container mx-auto lg:px-56 px-1">
          <div className="mt-3 rounded-lg bg-card p-5">
            <p className="text-4xl lg:text-6xl font-bold font-title">
              Projects
            </p>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 m-3">
              <Carousel>
                <img src="cover.jpg" alt="..." />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                  alt="..."
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
