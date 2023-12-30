function Sidebar({ nr, headline, searchInput, handleSearch, handleSubmit }) {
  return (
    <>
      {nr == 1 && (
        <div className="sidebar-wrap">
          <h4>{headline}</h4>
          <br />
          <label htmlFor="search"></label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Find Your Song ♪"
            value={searchInput}
            onChange={handleSearch}
          />
        </div>
      )}
      {nr == 2 && (
        <div className="sidebar-wrap">
          <h4>{headline}</h4>
          <form onSubmit={handleSubmit}>
            <label className="custom-file-upload">
              <input
                name="audio-file"
                placeholder="Audio MP3"
                type="file"
                accept="mp3"
              />{" "}
              Upload Song
            </label>
            <input name="song-title" placeholder="Song Title" type="text" />
            <input name="artist-name" placeholder="Artist Name" type="text" />
            <button type="submit">Add Song</button>
          </form>
        </div>
      )}
    </>
  );
}
export default Sidebar;
