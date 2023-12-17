import "./App.min.css";
import Navbar from "./Navbar";
import Gallery from "./Gallery";

function App() {
  return (
    <div className="App grid-width-wide">
      <Navbar />
      <section className="Header space-top grid-width-wide">
        <div className="Header-left">
          <h1>
            Jukebox
            <span style={{ textTransform: "lowercase" }}>
              {" "}
              and a big portion of
            </span>
            <br />
            Rhythm &#9834;
          </h1>
          <p>
            Retro music in a modern hue, our jukebox echoes the essence of
            vintage tunes. Step into a time capsule where the past harmonizes
            with today, delivering the best of both worlds through a fusion of
            vintage charm and modern style.
          </p>
          <button>See more</button>
        </div>
        <div className="Header-right">
          <Gallery />
        </div>
      </section>

      <section className="Demo grid-width-wide space-top">
        <h2>Demo</h2>
      </section>
    </div>
  );
}

export default App;
