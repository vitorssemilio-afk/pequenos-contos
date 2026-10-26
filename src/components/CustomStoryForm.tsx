import { useEffect, useState, type FormEvent } from "react";
import { useAppData } from "../context/AppDataContext";
import { CHARACTERS } from "../illustrations/characters";
import SceneIllustration from "../illustrations/SceneIllustration";
import type { AgeGroup, Story } from "../illustrations/types";
import { estimateDurationMinutes } from "../lib/duration";
import "../illustrations/scene.css";

const AGES: AgeGroup[] = [2, 3, 4, 5];

export default function CustomStoryForm() {
  const { addCustomStory } = useAppData();
  const [aiConfigured, setAiConfigured] = useState<boolean | null>(null);

  const [childAge, setChildAge] = useState<AgeGroup>(3);
  const [nickname, setNickname] = useState("");
  const [character, setCharacter] = useState("coelhoNino");
  const [theme, setTheme] = useState("");
  const [setting, setSetting] = useState("");
  const [durationMinutes, setDurationMinutes] = useState(12);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [draft, setDraft] = useState<Story | null>(null);

  useEffect(() => {
    fetch("/api/ai-status")
      .then((r) => r.json())
      .then((data) => setAiConfigured(Boolean(data.configured)))
      .catch(() => setAiConfigured(false));
  }, []);

  async function handleGenerate(e: FormEvent) {
    e.preventDefault();
    if (!theme.trim()) {
      setError("Descreva um tema para a história.");
      return;
    }
    setLoading(true);
    setError(null);
    setDraft(null);

    try {
      const response = await fetch("/api/custom-story", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ childAge, nickname, character, theme, setting, durationMinutes }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Não foi possível gerar a história.");
      setDraft(data as Story);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro inesperado.");
    } finally {
      setLoading(false);
    }
  }

  function handleApprove() {
    if (!draft) return;
    addCustomStory(draft);
    setDraft(null);
    setTheme("");
    setSetting("");
    setNickname("");
  }

  function handleDiscard() {
    setDraft(null);
  }

  function updateDraftText(sceneIndex: number, text: string) {
    if (!draft) return;
    const scenes = draft.scenes.map((s, i) => (i === sceneIndex ? { ...s, text } : s));
    setDraft({ ...draft, scenes });
  }

  if (aiConfigured === false) {
    return (
      <div className="ai-not-configured">
        <h3>Histórias personalizadas por IA</h3>
        <p>
          Esse recurso ainda não está configurado neste servidor: falta definir a chave <code>ANTHROPIC_API_KEY</code>{" "}
          no arquivo <code>.env</code>. Peça a um adulto responsável técnico para configurá-la. Enquanto isso, as 40
          histórias do catálogo continuam disponíveis normalmente.
        </p>
      </div>
    );
  }

  if (draft) {
    const duration = estimateDurationMinutes(draft);
    return (
      <div className="custom-story-review">
        <h3>Revise antes de salvar</h3>
        <p className="review-hint">
          Leia a história gerada. Você pode editar o texto de cada cena antes de aprovar, ou descartar e gerar outra.
        </p>
        <div className="draft-card">
          <h4>{draft.title}</h4>
          <p className="draft-meta">
            {draft.ageGroup} anos · {draft.category} · ~{duration} min
          </p>
          <div className="draft-cover">
            <SceneIllustration illustration={draft.cover} />
          </div>
          {draft.scenes.map((scene, i) => (
            <div key={scene.id} className="draft-scene">
              <div className="draft-scene-illustration">
                <SceneIllustration illustration={scene.illustration} />
              </div>
              <textarea value={scene.text} onChange={(e) => updateDraftText(i, e.target.value)} rows={3} />
            </div>
          ))}
          {draft.familyQuestion && (
            <p className="draft-family-question">Pergunta de família: {draft.familyQuestion}</p>
          )}
        </div>
        <div className="draft-actions">
          <button type="button" className="btn-secondary" onClick={handleDiscard}>
            Descartar
          </button>
          <button type="button" className="btn-primary" onClick={handleApprove}>
            Aprovar e salvar na biblioteca
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="custom-story-form" onSubmit={handleGenerate}>
      <h3>Criar história personalizada</h3>

      <label className="field">
        <span>Idade da criança</span>
        <select value={childAge} onChange={(e) => setChildAge(Number(e.target.value) as AgeGroup)}>
          {AGES.map((a) => (
            <option key={a} value={a}>
              {a} anos
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        <span>Apelido do protagonista (opcional)</span>
        <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="Ex: Pequeno Exploradora" />
      </label>

      <label className="field">
        <span>Personagem principal</span>
        <select value={character} onChange={(e) => setCharacter(e.target.value)}>
          {Object.values(CHARACTERS).map((c) => (
            <option key={c.id} value={c.id}>
              {c.nome}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        <span>Tema</span>
        <textarea value={theme} onChange={(e) => setTheme(e.target.value)} rows={3} placeholder="Ex: aprender a dividir brinquedos com um amigo novo" required />
      </label>

      <label className="field">
        <span>Cenário (opcional)</span>
        <input type="text" value={setting} onChange={(e) => setSetting(e.target.value)} placeholder="Ex: um jardim florido" />
      </label>

      <label className="field">
        <span>Duração: {durationMinutes} minutos</span>
        <input
          type="range"
          min={10}
          max={15}
          value={durationMinutes}
          onChange={(e) => setDurationMinutes(Number(e.target.value))}
        />
      </label>

      {error && <p className="error-banner">{error}</p>}

      <button type="submit" className="btn-primary" disabled={loading}>
        {loading ? "Criando história..." : "Gerar história"}
      </button>
    </form>
  );
}
