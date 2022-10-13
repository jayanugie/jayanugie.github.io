import "./App.css";

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
              <blockquote>
                <p class="text-lg font-medium">
                  “Lorem Ipsum is simply dummy text of the printing and typesetting industry.”
                </p>
              </blockquote>
              <figcaption class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">
                  Nugie Jaya Nugraha
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  Frontend Developer
                </div>
              </figcaption>
            </div>
          </figure>{" "}
        </div>
      </header>
    </div>
  );
}

export default App;
