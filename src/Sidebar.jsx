function Sidebar({ headline, searchInput, handleSearch }) {
  return (
    <>
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
    </>
  );
}
export default Sidebar;
