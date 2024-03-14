import logo from '../../logo.svg';
import './App.css';
import Header from '../Header/Header';
import { useState, useEffect } from 'react';
import Preloader from '../Preloader/Preloader';

function App() {
  const [animeList,SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState([]);

  return (
    <div className="App">
      <Header />
      <Preloader />
    </div>
  );
}

export default App;
