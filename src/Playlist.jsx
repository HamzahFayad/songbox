function Playlist({ playlist }) {
  return (
    <div className="playlist grid-width-wide">
      <h2>Playlist</h2>
      <br />
      {playlist.map((p) => {
        return (
          <div key={p.id} className={"playlist-wrap inPlaylist-" + p.id}>
            <h2>
              <strong>{p.title}</strong>
            </h2>
            <h3>by {p.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Playlist;
