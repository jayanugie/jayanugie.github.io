import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGit, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img
              class="w-24 h-24 md:w-48 md:h-auto rounded-lg mx-auto object-cover"
              src="/profile.png"
              alt=""
              width="384"
              height="512"
            />
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
              <figcaption class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">
                  Nugie Jaya Nugraha
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  Frontend Developer
                </div>
                <section className="mt-5 flex space-x-2">
                  <a className="border rounded  px-2" href="https://www.github.com/jayanugie" target='blank'>
                    <FontAwesomeIcon icon={faGit} />
                  </a>
                  <a className="border rounded px-2" href="https://www.linkedin.com/in/jayanugie" target='blank'>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </section>
              </figcaption>
            </div>
          </figure>{" "}
        </div>
      </header>
    </div>
  );
}

export default App;
