function DemoItem({ demoInfo, playCurrentSong, playSong, addToPlaylist }) {
  const playCurrent = () => {
    playCurrentSong(demoInfo);
    playSong();
  };

  const addSong = () => {
    addToPlaylist(demoInfo);
  };

  return (
    <div className="demo-song">
      <img src={demoInfo.img} alt={demoInfo.name} onClick={playCurrent} />
      <p className="demo-name">
        {demoInfo.title}{" "}
        <span className="add-to-playlist" onClick={addSong}>
          ♡
        </span>
      </p>
    </div>
  );
}

export default DemoItem;
