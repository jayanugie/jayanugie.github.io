import "./App.css";

function App() {
  return (
    <div className="text-white">
      {/* navbar */}
      <div className="border border-sky-500 p-3">
        <div className="container mx-auto p-1 flex flex-row text-center">
          <div className="font-bold basis-2/12">
            jayanugie
          </div>
          <div className=" basis-4/6">
            <div className="flex flex-row">
              <div className="basis-1/4">home</div>
              <div className="basis-1/4">about me</div>
              <div className="basis-1/4">projects</div>
              <div className="basis-1/4">contact</div>
            </div>
          </div>
          <div className=" basis-2/12">whasap</div>
        </div>
      </div>
    </div>
  );
}

export default App;
