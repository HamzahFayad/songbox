import { useState, useEffect } from "react";
import { demodata } from "./data/demo-data";
import DemoItem from "./DemoItem";
import Playlist from "./Playlist";

function MyDemo() {
  const [isHome, setIsHome] = useState(true);

  const [current, setCurrent] = useState({});

  //const [playlist, setPlaylist] = useState([]);

  const [myplaylist, setMyPlaylist] = useState([]);

  const [refreshKey, setRefreshKey] = useState(0);

  let toggleView = () => {
    setIsHome(!isHome);
  };

  useEffect(() => {
    fetch("http://localhost:8000/playlist", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setMyPlaylist(data);
      })
      .catch((error) => console.error(error));
  }, [refreshKey]);

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
    //display current song for demo
    setCurrent(song);

    setTimeout(() => {
      console.log(song);
    }, 500);
  };

  // let addToPlaylist = (song) => {
  //   //adds to playlist, or remove
  //   const songIndex = playlist.findIndex((p) => p.id === song.id);
  //   if (songIndex === -1) {
  //     //song not in the playlist, add it
  //     setPlaylist([...playlist, song]);
  //   } else {
  //     //song already in the playlist, remove it
  //     const updatedPlaylist = [...playlist];
  //     updatedPlaylist.splice(songIndex, 1);
  //     setPlaylist(updatedPlaylist);
  //   }
  // };

  async function postToPlaylist(song) {
    const songIndex = myplaylist.findIndex((p) => p.id === song.id);
    console.log(songIndex);
    if (songIndex === -1) {
      //song not in the playlist, add it
      await fetch("http://localhost:8000/playlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(song),
      }).then((response) => {
        console.log(response);
        setRefreshKey((oldKey) => oldKey + 1);
      });
    } else {
      await fetch(`http://localhost:8000/playlist/${song.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(song),
      }).then((response) => {
        console.log(response);
        setRefreshKey((oldKey) => oldKey - 1);
      });
    }
  }

  // useEffect(() => {
  //   console.log("useEffect", playlist);
  // }, [playlist]);

  return (
    <>
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
                      addToPlaylist={postToPlaylist}
                    />
                  );
                })}
              </div>
            )}
            {!isHome && (
              <div className="demo-current-song demo-view">
                <button className="homebtn" onClick={toggleView}>
                  &#8592; Home
                </button>
                {current && (
                  <div className="playing-song" style={{ color: "white" }}>
                    <h2>{current.title}</h2>
                    <h3>by {current.name}</h3>
                    <div className="image-container">
                      <div className="inner"></div>
                      <img src={current.img} alt="" />
                      <audio
                        style={{ display: "none" }}
                        src={current.audio}
                        controls
                        autoPlay
                        loop
                      />
                    </div>
                    <p
                      className="lyrics"
                      style={{
                        color: "white",
                        maxWidth: "400px",
                        maxHeight: "220px",
                        overflowY: "scroll",
                        textAlign: "center",
                        margin: "2rem auto",
                      }}
                    >
                      {current.lyrics}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <br />
        <br />
        <div style={{ height: "40vh" }}></div>
      </section>
      <div className="my-playlist" id="playlist">
        <Playlist playlist={myplaylist} />
      </div>
    </>
  );
}

export default MyDemo;
