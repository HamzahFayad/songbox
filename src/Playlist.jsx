function Playlist({ playlist }) {
  return (
    <div className="playlist grid-width-wide">
      <h2>Playlist</h2>
      <br />
      {playlist.map((p) => {
        return (
          <div key={p.id}>
            {p.name} -- {p.title}
          </div>
        );
      })}
    </div>
  );
}

export default Playlist;
