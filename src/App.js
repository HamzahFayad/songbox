import "./App.min.css";
import Navbar from "./Navbar";
import GalleryList from "./GalleryList";

function App() {
  return (
    <div className="App grid-width-wide">
      <Navbar />
      <section className="Header space-top grid-width-wide">
        <div className="Header-left">
          <h1 className="Headline">
            Jukebox
            <span style={{ textTransform: "lowercase" }}>
              {" "}
              and a big portion of
            </span>
            <br />
            Rhythm &#9834;&#9834;&#9834;
          </h1>
          <p style={{ textAlign: "justify" }}>
            Retro music in a modern hue, our jukebox echoes the essence of
            vintage tunes. Embark on a melodic time travel as our digital
            jukebox breathes life into the classics - a dance between vintage
            vibes and modern convenience, for an unforgettable musical voyage
            through the ages.
          </p>
          <button>See more</button>
          <div className="features space-top">
            <p>Our Features</p>
          </div>
        </div>
        <>
          <GalleryList />
        </>
      </section>

      <section className="Demo grid-width-wide space-top">
        <h2>Demo</h2>
        <audio src="./assets/Jordan-Critz-Meris.mp3" controls />
      </section>
    </div>
  );
}

export default App;
