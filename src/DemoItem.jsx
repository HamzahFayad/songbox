function DemoItem({ demoInfo, playCurrentSong, playSong }) {
  const playCurrent = () => {
    playCurrentSong(demoInfo);
    playSong();
  };
  return (
    <div className="demo-song" onClick={playCurrent}>
      <img src={demoInfo.img} alt={demoInfo.name} />
      <p className="demo-name">
        {demoInfo.title} <span className="add-to-playlist">♡</span>
      </p>
    </div>
  );
}

export default DemoItem;
