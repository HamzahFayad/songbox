import GalleryList from "./GalleryList";

function Header() {
  let play = () => {
    console.log("play");
  };

  let handleHearts = () => {};
  return (
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
          Retro music in a modern hue, our jukebox echoes the essence of vintage
          tunes. Embark on a melodic time travel as our digital jukebox breathes
          life into the classics - a dance between vintage vibes and modern
          convenience, for an unforgettable musical voyage through the ages.
        </p>
        <button>
          <a href="#demo">See more</a>
        </button>
        <div className="features" onClick={play}>
          <span className="top">&#8514;</span>
          <img className="heartshape" src="./assets/hearts.png" alt="heart" />
          <img
            src="./assets/walkman.png"
            className="walkman"
            alt="walkman"
            style={{ transform: "rotate(-90deg" }}
          />
          <img className="heartshape" src="./assets/hearts.png" alt="heart" />
          <span className="btm">&#8514;</span>
        </div>

        <p className="love">
          <strong>
            <em>made with love. ♥</em>
          </strong>
        </p>
      </div>
      <>
        <GalleryList />
      </>
    </section>
  );
}

export default Header;
