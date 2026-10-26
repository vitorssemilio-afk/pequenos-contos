import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppData } from "../context/AppDataContext";
import SceneIllustration from "../illustrations/SceneIllustration";
import { useSpeech } from "../lib/useSpeech";
import { playPageTurn, playChime } from "../lib/sound";
import "../illustrations/scene.css";

type Mode = "familia" | "ouvir";

export default function Reader() {
  const { storyId = "" } = useParams();
  const navigate = useNavigate();
  const { findStory, getProgress, updateProgress, resetProgress, settings } = useAppData();
  const story = findStory(storyId);

  const existingProgress = getProgress(storyId);
  const [sceneIndex, setSceneIndex] = useState(() =>
    existingProgress && !existingProgress.completed ? existingProgress.sceneIndex : 0,
  );
  const [mode, setMode] = useState<Mode>("familia");
  const [finished, setFinished] = useState(false);
  const autoPlayRef = useRef(false);
  const speech = useSpeech();

  const totalScenes = story?.scenes.length ?? 0;
  const scene = story?.scenes[sceneIndex];

  useEffect(() => {
    if (!story) return;
    updateProgress(story.id, sceneIndex, false);
  }, [story, sceneIndex, updateProgress]);

  const stopNarration = useCallback(() => {
    autoPlayRef.current = false;
    speech.cancel();
  }, [speech]);

  function goTo(index: number, playSound = true) {
    stopNarration();
    if (playSound && settings.soundEffectsEnabled) playPageTurn();
    setSceneIndex(index);
  }

  function handleNext() {
    if (!story) return;
    if (sceneIndex < totalScenes - 1) {
      goTo(sceneIndex + 1);
    } else {
      finishStory();
    }
  }

  function handlePrev() {
    if (sceneIndex > 0) goTo(sceneIndex - 1);
  }

  function finishStory() {
    if (!story) return;
    stopNarration();
    updateProgress(story.id, totalScenes - 1, true);
    if (settings.soundEffectsEnabled) playChime();
    setFinished(true);
  }

  function restart() {
    if (!story) return;
    resetProgress(story.id);
    setFinished(false);
    setSceneIndex(0);
  }

  function speakCurrentScene() {
    if (!scene) return;
    autoPlayRef.current = true;
    speech.speak(scene.text, () => {
      if (!autoPlayRef.current) return;
      if (sceneIndex < totalScenes - 1) {
        setSceneIndex((i) => i + 1);
      } else {
        finishStory();
      }
    });
  }

  useEffect(() => {
    if (mode === "ouvir" && autoPlayRef.current && scene) {
      speech.speak(scene.text, () => {
        if (!autoPlayRef.current) return;
        if (sceneIndex < totalScenes - 1) {
          setSceneIndex((i) => i + 1);
        } else {
          finishStory();
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sceneIndex]);

  function handleModeChange(next: Mode) {
    stopNarration();
    setMode(next);
  }

  function togglePlayPause() {
    if (speech.speaking) {
      stopNarration();
    } else {
      speakCurrentScene();
    }
  }

  useEffect(() => stopNarration, [stopNarration]);

  if (!story) {
    return (
      <div className="reader-missing">
        <p>Não encontramos essa história.</p>
        <Link to="/biblioteca">Voltar para a biblioteca</Link>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="reader-finished">
        <div className="finished-card">
          <h2>Fim da história ✨</h2>
          <p>Vocês leram "{story.title}" juntos.</p>
          {story.familyQuestion && (
            <div className="family-question">
              <h3>Para conversar em família</h3>
              <p>{story.familyQuestion}</p>
            </div>
          )}
          <div className="reader-finished-actions">
            <button type="button" className="btn-secondary" onClick={restart}>
              Ler de novo
            </button>
            <button type="button" className="btn-primary" onClick={() => navigate("/biblioteca")}>
              Escolher outra história
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="reader">
      <header className="reader-top">
        <button type="button" className="icon-btn" onClick={() => navigate(-1)} aria-label="Voltar">
          ←
        </button>
        <span className="reader-title">{story.title}</span>
        <span className="reader-progress">
          {sceneIndex + 1} / {totalScenes}
        </span>
      </header>

      <div className="reader-illustration">
        <SceneIllustration illustration={scene!.illustration} />
      </div>

      <div className="reader-text-area">
        <p>{scene!.text}</p>
      </div>

      {!speech.supported && mode === "ouvir" && (
        <p className="audio-warning">
          A narração por voz não está disponível neste navegador. Você ainda pode ler a história com "Ler em família".
        </p>
      )}
      {speech.supported && !speech.voiceAvailable && mode === "ouvir" && (
        <p className="audio-warning">
          Não encontramos uma voz em português neste dispositivo, então a narração pode sair em outro idioma ou não
          funcionar. O texto continua disponível para leitura.
        </p>
      )}

      <div className="reader-mode-toggle" role="group" aria-label="Modo de leitura">
        <button
          type="button"
          className={`mode-btn ${mode === "familia" ? "is-active" : ""}`}
          onClick={() => handleModeChange("familia")}
        >
          📖 Ler em família
        </button>
        <button
          type="button"
          className={`mode-btn ${mode === "ouvir" ? "is-active" : ""}`}
          onClick={() => handleModeChange("ouvir")}
        >
          🔊 Ouvir história
        </button>
      </div>

      <div className="reader-controls">
        <button type="button" className="control-btn" onClick={handlePrev} disabled={sceneIndex === 0} aria-label="Página anterior">
          ⟨
        </button>

        {mode === "ouvir" && speech.supported && (
          <button type="button" className="control-btn control-btn-main" onClick={togglePlayPause} aria-label={speech.speaking ? "Pausar narração" : "Iniciar narração"}>
            {speech.speaking ? "⏸️" : "▶️"}
          </button>
        )}

        <button type="button" className="control-btn" onClick={handleNext} aria-label="Próxima página">
          {sceneIndex === totalScenes - 1 ? "Terminar ⟩" : "⟩"}
        </button>
      </div>
    </div>
  );
}
