import "./TrendingCard.css";

function TrendingCard({ anime }) {
  return (
    <div className="card-content" key={anime.mal_id}>
      <h3 className="card-title">
        {anime.title_english === null ? anime.title : anime.title_english}
      </h3>
      <img
        src={anime.images.jpg.image_url}
        alt="cover art"
        className="card-img"
      />
    </div>
  );
}

export default TrendingCard;
