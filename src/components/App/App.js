import logo from "../../logo.svg";
import "./App.css";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import Search from "../Search/Search";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import AnimeMain from "../AnimeMain/AnimeMain";
import { getTrendingAnime, getAnime } from "../../utils/jikanApi";

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [trendingAnime, SetTrendingAnime] = useState([]);
  const [search, SetSearch] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getTrendingAnime().then((trendingList) => {
      // console.log(trendingList);
      SetTrendingAnime(trendingList.data);
    });
  }, []);

  useEffect(() => {
    getAnime().then((animeList) => {
      console.log(animeList);
      SetAnimeList(animeList.data);
    });
  }, []);

  // console.log(trendingAnime);
  console.log(animeList);

  // const handleLogin = (email, password) => {
  //   signIn({ email, password })
  //     .then((res) => {
  //       if (res.token) {
  //         localStorage.setItem("jwt", res.token);
  //         setLoggedIn(true);
  //         handleCloseModal();
  //         return res;
  //       } else {
  //         console.log("handleLogin error");
  //       }
  //     })
  //     .catch(console.error);
  // };

  // const handleRegisterSubmit = (email, password, name, avatar) => {
  //   signUp({ email, password, name, avatar })
  //     .then((res) => {
  //       handleCloseModal();
  //       handleLogin(email, password);
  //     })
  //     .catch(console.error);
  // };

  useEffect(() => {
    if (!activeModal) {
      return;
    }

    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  const handleOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header
        onCreateModal={handleCreateModal}
        onLoginModal={handleLoginModal}
      />
      <Search />
      <AnimeMain trendingAnimeList={trendingAnime} animeList={animeList} />
      {activeModal === "login" && (
        <LoginModal
          handleCloseModal={handleCloseModal}
          onClose={handleCloseModal}
          isOpen={activeModal === "login"}
          // onLogin={handleLogin}
          setActiveModal={setActiveModal}
          onClick={handleOverlay}
        />
      )}
      {activeModal === "register" && (
        <RegisterModal
          handleCloseModal={handleCloseModal}
          onClose={handleCloseModal}
          isOpen={activeModal === "register"}
          // onRegister={handleRegisterSubmit}
          setActiveModal={setActiveModal}
          onClick={handleOverlay}
        />
      )}
    </CurrentUserContext.Provider>
  );
}

export default App;
