import { useEffect, useState } from "react";

function DemoItem({ demoInfo, playCurrentSong, playSong, addToPlaylist }) {
  const playCurrent = () => {
    playCurrentSong(demoInfo);
    playSong();
  };

  const addSong = () => {
    addToPlaylist(demoInfo);
  };

  const [playlistIds, setPlaylistIds] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/playlist", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        const extractedIds = data.map((item) => item.id);
        setPlaylistIds(extractedIds);
      })
      .catch((error) => console.error(error));
  }, []);

  const isInPlaylist = playlistIds.includes(demoInfo.id);

  return (
    <div className="demo-song">
      <img src={demoInfo.img} alt={demoInfo.name} onClick={playCurrent} />
      <p className="demo-name inPlaylist">
        {demoInfo.title}{" "}
        <span
          className={`add-to-playlist ${isInPlaylist ? "fill-heart" : ""}`}
          onClick={addSong}
        >
          ♡
        </span>
      </p>
    </div>
  );
}

export default DemoItem;
