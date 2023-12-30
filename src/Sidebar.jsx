function Sidebar({ nr, headline, searchInput, handleSearch }) {
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
        </div>
      )}
    </>
  );
}
export default Sidebar;
