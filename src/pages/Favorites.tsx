import { useAppData } from "../context/AppDataContext";
import StoryCard from "../components/StoryCard";

export default function Favorites() {
  const { allStories, favorites } = useAppData();
  const favoriteStories = allStories.filter((s) => favorites.includes(s.id));

  return (
    <div className="library">
      <header className="library-header">
        <h1>Favoritas</h1>
      </header>

      {favoriteStories.length === 0 ? (
        <p className="empty-state">
          Toque na estrela ☆ de uma história para guardá-la aqui.
        </p>
      ) : (
        <div className="shelf-grid">
          {favoriteStories.map((s) => (
            <StoryCard key={s.id} story={s} />
          ))}
        </div>
      )}
    </div>
  );
}
