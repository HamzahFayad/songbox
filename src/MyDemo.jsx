import { useState } from "react";
import { demodata } from "./data/demo-data";
import DemoItem from "./DemoItem";

function MyDemo() {
  const [isHome, setIsHome] = useState(true);

  const [current, setCurrent] = useState({});

  const [playlist, setPlaylist] = useState([]);

  let toggleView = () => {
    setIsHome(!isHome);
  };

  //ADDING TO PLAYLIST - not working yet
  //  const [added, setAdded] = useState(false);
  // let colorRed = (e) => {
  //   setAdded(!added);
  //   if (!e.target.classList.contains("added")) {
  //     e.target.classList.add("added");
  //   } else {
  //     e.target.classList.remove("added");
  //   }
  // };

  let playCurrentSong = (song) => {
    //adds to playlist, but for new page not done yet
    setPlaylist([...playlist, song]);
    //set current song for demo
    setCurrent(song);

    setTimeout(() => {
      console.log(song);
    }, 500);
  };

  return (
    <section id="demo" className="Demo space-top">
      <div className="demo-wrap grid-width-wide">
        <h4>[SONG BOX]</h4>
        <div className="demo-wrapper">
          <aside className="demo-sidebar">
            <p>Sidebar</p>
          </aside>
          {isHome && (
            <div className="demo-playlist demo-view">
              {demodata.map((d) => {
                return (
                  <DemoItem
                    playSong={toggleView}
                    key={d.id}
                    demoInfo={d}
                    //colorRed={colorRed}
                    playCurrentSong={playCurrentSong}
                  />
                );
              })}
            </div>
          )}
          {!isHome && (
            <div className="demo-current-song demo-view">
              <p>Song Playing</p>
              <button onClick={toggleView}>Home</button>
              {current && (
                <div className="playing-song" style={{ color: "white" }}>
                  <h2>{current.title}</h2>
                  <h3>by {current.name}</h3>
                  <div className="image-container">
                    <div className="inner"></div>
                    <img src={current.img} alt="" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default MyDemo;
