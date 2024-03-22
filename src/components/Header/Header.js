import "./Header.css";
import Search from "../Search/Search";
import {Link} from "react-router-dom";
import Logo from "../../images/AniManga-logo.png";

const Header = ({onCreateModal, onLoginModal}) => {
  return (
    <header className="header">
      <div className="header__menu-left">
        <div>
          <Link to='/'>
            <img src={Logo} alt="AniManga logo" className="header__logo"/>
          </Link>
        </div>
      </div>
      <Search />
      {/* {loggedIn ? (
        <div className="header__menu-right">
          <div>
            <Link to='/' className="header__tab">
              Anime
            </Link>
          </div>
          <div>
            <Link to='/manga' className="header__tab">
              Manga
            </Link>
          </div>
          <div>
            <Link to='/profile' className="header__user">
              User
            </Link>
          </div>
          <div className="header__avatar">
            {showAvatar ? (
              <Link to='/profile'>
                <img src='' alt="profile image" className="header__avatar-default" />
              </Link>
            ) : (
              <p className="header__avatar-default">{name[0]?.toUpperCase()}</p>
            )}
          </div>
        </div>
      ) : ( */}
        <div className="header__menu-right">
          <div>
            <Link to='/' className="header__tab">
              Anime
            </Link>
          </div>
          <div>
            <Link to='/manga' className="header__tab">
              Manga
            </Link>
          </div>
          {/* <button
            className="header__button"
            type="text"
            // onClick={onRegiserModal}
            >
              Sign Up
          </button> */}
          <button
            className="header__button"
            type="text"
            onClick={onLoginModal}
          >
            Log In
          </button>
        </div>
      {/* )} */}
    </header>
  );
}

export default Header;
