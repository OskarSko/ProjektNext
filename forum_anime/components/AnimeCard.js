export default function AnimeCard({ anime }) {
    return (
      <div className="anime-card">
        <h2>{anime.title}</h2>
        <p>{anime.description}</p>
        <p><strong>Gatunek:</strong> {anime.genre}</p>
        <p><strong>Platforma:</strong> {anime.platform}</p>
      </div>
    );
  }