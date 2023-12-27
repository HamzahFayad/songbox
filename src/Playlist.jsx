function Playlist({ playlist }) {
  return (
    <div className="playlist grid-width-wide">
      <h2>Playlist</h2>
      <br />
      {playlist.map((p) => {
        return (
          <div key={p.id} className={"playlist-wrap inPlaylist-" + p.id}>
            <p>
              <strong>[0{p.id}]</strong>
            </p>
            <figure>
              <img src={p.img} alt={p.name} className="playlist-wrap-img" />
            </figure>
            <h2>
              <strong>{p.title}</strong>
            </h2>
            <h3>by {p.name}</h3>
            <hr
              style={{ borderTop: "1px solid #34332f", marginBottom: "1rem" }}
            ></hr>
          </div>
        );
      })}
    </div>
  );
}

export default Playlist;
