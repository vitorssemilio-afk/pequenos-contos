import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppData } from "../context/AppDataContext";
import { CATEGORIES } from "../data/categories";
import StoryCard from "../components/StoryCard";
import type { AgeGroup, Category } from "../illustrations/types";

const AGES: (AgeGroup | "todas")[] = ["todas", 2, 3, 4, 5];

export default function Library() {
  const { allStories } = useAppData();
  const [params, setParams] = useSearchParams();
  const categoriaParam = params.get("categoria") as Category | null;

  const [age, setAge] = useState<AgeGroup | "todas">("todas");
  const [category, setCategory] = useState<Category | "todas">(categoriaParam ?? "todas");

  const filtered = useMemo(
    () =>
      allStories.filter((s) => {
        if (age !== "todas" && s.ageGroup !== age) return false;
        if (category !== "todas" && s.category !== category) return false;
        return true;
      }),
    [allStories, age, category],
  );

  function handleCategory(next: Category | "todas") {
    setCategory(next);
    if (next === "todas") {
      params.delete("categoria");
      setParams(params, { replace: true });
    }
  }

  return (
    <div className="library">
      <header className="library-header">
        <h1>Biblioteca</h1>
      </header>

      <div className="filter-row">
        <label className="filter-label">
          Idade
          <select value={age} onChange={(e) => setAge(e.target.value === "todas" ? "todas" : (Number(e.target.value) as AgeGroup))}>
            {AGES.map((a) => (
              <option key={a} value={a}>
                {a === "todas" ? "Todas" : `${a} anos`}
              </option>
            ))}
          </select>
        </label>

        <label className="filter-label">
          Categoria
          <select value={category} onChange={(e) => handleCategory(e.target.value as Category | "todas")}>
            <option value="todas">Todas</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="empty-state">Nenhuma história encontrada com esses filtros.</p>
      ) : (
        <div className="shelf-grid">
          {filtered.map((s) => (
            <StoryCard key={s.id} story={s} />
          ))}
        </div>
      )}
    </div>
  );
}
