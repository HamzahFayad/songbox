import "./App.min.css";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App grid-width-wide">
      <Navbar />
      <section className="Header space-top grid-width-wide">
        <div className="Header-left">
          <h1>
            Jukebox and <br /> Rhythms
          </h1>
          <p>
            These headlines and slogans aim to capture the essence of blending
            retro aesthetics with modern functionality in your web app.
          </p>
        </div>
        <div className="Header-right">
          <div>
            <p>Hello</p>
          </div>
          <div>
            <p>Hello</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
