import "./Search.css";
import Banner from "../../images/anime-banner.png";
import Icon from "../../images/search-icon.png";

function Search() {
  return (
    // <div className="container">
    //   <div className="content">
    //     <div className="content__icon">
    //       <img src={Banner} alt="anime banner" className="content__banner" />
    //     </div>
        <div className="content__search">
          <form>
            <input
              type="text"
              placeholder="Find an Anime..."
              className="content__search-input"
              required
            />
            <button type="submit" className="content__search-submit">
                <img src={Icon} alt="Submit" className="content__search-icon"/>
            </button>
          </form>
        </div>
    //   </div>
    // </div>
  );
}

export default Search;
