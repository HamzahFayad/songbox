function Playlist({ playlist }) {
  return (
    <div className="playlist grid-width-wide">
      <h2>Playlist</h2>
      {playlist.map((p) => {
        return (
          <div>
            {p.id} {p.title}
          </div>
        );
      })}
    </div>
  );
}

export default Playlist;
