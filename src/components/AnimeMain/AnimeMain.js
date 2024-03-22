import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, EffectFade, Pagination } from "swiper/modules";
import "./AnimeMain.css";
import TrendingCard from "../TrendingCard/TrendingCard";

const AnimeMain = ({ trendingAnimeList, animeList }) => {
  return (
    <div className="trending-container">
      <Swiper
        modules={[Navigation, EffectFade, Pagination]}
        pagination={{ clickable: true }}
        navigation
        effect={"fade"}
        slidesPerView={1}
        spaceBetween={50}
        loop
        className="my-swiper"
      >
        {trendingAnimeList.map((anime) => {
          return (
            <SwiperSlide className="swiper-slide" key={anime.mal_id}>
              <div className="swiper-card">
                <TrendingCard anime={anime} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="anime__container">
        <div className="anime__list">
          {animeList.map((anime) => {
            console.log(anime)
            return <TrendingCard anime={anime}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default AnimeMain;
