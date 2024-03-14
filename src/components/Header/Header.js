import React from "react";

function Header() {
  return (
    <header>
      <h1>AniManga</h1>
      <div>
        <form className="search-box">
          <input 
            type="search" 
            placeholder="Search for an anime" 
            required 
          />
        </form>
      </div>
    </header>
  );
}

export default Header;
