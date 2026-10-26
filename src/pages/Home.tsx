import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAppData } from "../context/AppDataContext";
import { CATEGORIES } from "../data/categories";
import CategoryIcon from "../components/CategoryIcon";
import StoryCard from "../components/StoryCard";
import SceneIllustration from "../illustrations/SceneIllustration";
import type { AgeGroup } from "../illustrations/types";
import "../illustrations/scene.css";

const AGES: AgeGroup[] = [2, 3, 4, 5];

export default function Home() {
  const { allStories, settings, updateSettings, progress, favorites } = useAppData();
  const [age, setAge] = useState<AgeGroup>(settings.childAge);

  const storiesForAge = useMemo(() => allStories.filter((s) => s.ageGroup === age), [allStories, age]);

  const featured = storiesForAge[0];

  const continuing = useMemo(
    () =>
      storiesForAge.filter((s) => {
        const p = progress[s.id];
        return p && !p.completed;
      }),
    [storiesForAge, progress],
  );

  const favoriteStories = useMemo(
    () => allStories.filter((s) => favorites.includes(s.id)).slice(0, 6),
    [allStories, favorites],
  );

  function handleAgeChange(next: AgeGroup) {
    setAge(next);
    updateSettings({ ...settings, childAge: next });
  }

  return (
    <div className="home">
      <header className="home-header">
        <h1>Pequenos Contos</h1>
        <p>Histórias para ouvir e ler juntos</p>
      </header>

      <section className="age-picker" aria-label="Escolher idade">
        {AGES.map((a) => (
          <button
            key={a}
            type="button"
            className={`age-chip ${a === age ? "is-active" : ""}`}
            onClick={() => handleAgeChange(a)}
          >
            {a} anos
          </button>
        ))}
      </section>

      {featured && (
        <section className="featured-story" aria-label="História em destaque">
          <Link to={`/historia/${featured.id}`} className="featured-link">
            <div className="featured-cover">
              <SceneIllustration illustration={featured.cover} />
            </div>
            <div className="featured-info">
              <span className="featured-tag">Destaque de hoje</span>
              <h2>{featured.title}</h2>
              <p>{featured.synopsis}</p>
            </div>
          </Link>
        </section>
      )}

      {continuing.length > 0 && (
        <section className="shelf">
          <h3>Continuar a história</h3>
          <div className="shelf-row">
            {continuing.map((s) => (
              <StoryCard key={s.id} story={s} />
            ))}
          </div>
        </section>
      )}

      <section className="shelf">
        <h3>Categorias</h3>
        <div className="category-grid">
          {CATEGORIES.map((cat) => (
            <Link key={cat} to={`/biblioteca?categoria=${encodeURIComponent(cat)}`} className="category-tile">
              <CategoryIcon category={cat} />
              <span>{cat}</span>
            </Link>
          ))}
        </div>
      </section>

      {favoriteStories.length > 0 && (
        <section className="shelf">
          <h3>Favoritas</h3>
          <div className="shelf-row">
            {favoriteStories.map((s) => (
              <StoryCard key={s.id} story={s} />
            ))}
          </div>
        </section>
      )}

      <section className="shelf">
        <h3>Histórias para {age} anos</h3>
        <div className="shelf-grid">
          {storiesForAge.map((s) => (
            <StoryCard key={s.id} story={s} />
          ))}
        </div>
      </section>
    </div>
  );
}
