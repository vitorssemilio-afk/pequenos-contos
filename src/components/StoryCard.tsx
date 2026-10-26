import { Link } from "react-router-dom";
import type { Story } from "../illustrations/types";
import SceneIllustration from "../illustrations/SceneIllustration";
import { estimateDurationMinutes } from "../lib/duration";
import { useAppData } from "../context/AppDataContext";
import "../illustrations/scene.css";

interface Props {
  story: Story;
}

export default function StoryCard({ story }: Props) {
  const { isFavorite, toggleFavorite, getProgress } = useAppData();
  const favorite = isFavorite(story.id);
  const progress = getProgress(story.id);
  const duration = estimateDurationMinutes(story);

  return (
    <div className="story-card-mini">
      <Link to={`/historia/${story.id}`} className="story-card-cover" aria-label={`Abrir história ${story.title}`}>
        <SceneIllustration illustration={story.cover} />
        {progress && !progress.completed && (
          <span className="progress-pill">Continuar</span>
        )}
      </Link>
      <button
        type="button"
        className={`favorite-btn ${favorite ? "is-favorite" : ""}`}
        onClick={() => toggleFavorite(story.id)}
        aria-label={favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        aria-pressed={favorite}
      >
        {favorite ? "★" : "☆"}
      </button>
      <div className="story-card-info">
        <Link to={`/historia/${story.id}`} className="story-card-title">
          {story.title}
        </Link>
        <span className="story-card-meta">
          {story.ageGroup} anos · {duration} min
        </span>
      </div>
    </div>
  );
}
