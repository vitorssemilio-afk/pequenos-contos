import { useState } from "react";
import PinGate from "../components/PinGate";
import CustomStoryForm from "../components/CustomStoryForm";
import { useAppData } from "../context/AppDataContext";
import type { AgeGroup } from "../illustrations/types";

type Tab = "config" | "criar" | "historias" | "dados";

function ParentContent() {
  const { settings, updateSettings, customStories, removeCustomStory, wipeAllData } = useAppData();
  const [tab, setTab] = useState<Tab>("config");
  const [confirmErase, setConfirmErase] = useState(false);

  function handleErase() {
    wipeAllData();
    setConfirmErase(false);
  }

  return (
    <div className="parent-area">
      <header className="parent-header">
        <h1>Área dos responsáveis</h1>
      </header>

      <nav className="parent-tabs">
        <button type="button" className={tab === "config" ? "is-active" : ""} onClick={() => setTab("config")}>
          Configurações
        </button>
        <button type="button" className={tab === "criar" ? "is-active" : ""} onClick={() => setTab("criar")}>
          Criar história
        </button>
        <button type="button" className={tab === "historias" ? "is-active" : ""} onClick={() => setTab("historias")}>
          Minhas histórias
        </button>
        <button type="button" className={tab === "dados" ? "is-active" : ""} onClick={() => setTab("dados")}>
          Privacidade e dados
        </button>
      </nav>

      {tab === "config" && (
        <section className="parent-section">
          <h3>Configurações</h3>

          <label className="field">
            <span>Idade padrão da criança</span>
            <select
              value={settings.childAge}
              onChange={(e) => updateSettings({ ...settings, childAge: Number(e.target.value) as AgeGroup })}
            >
              {[2, 3, 4, 5].map((a) => (
                <option key={a} value={a}>
                  {a} anos
                </option>
              ))}
            </select>
          </label>

          <label className="field-inline">
            <input
              type="checkbox"
              checked={settings.audioEnabled}
              onChange={(e) => updateSettings({ ...settings, audioEnabled: e.target.checked })}
            />
            <span>Permitir narração por voz</span>
          </label>

          <label className="field-inline">
            <input
              type="checkbox"
              checked={settings.soundEffectsEnabled}
              onChange={(e) => updateSettings({ ...settings, soundEffectsEnabled: e.target.checked })}
            />
            <span>Efeitos sonoros (virar página, final da história)</span>
          </label>
        </section>
      )}

      {tab === "criar" && (
        <section className="parent-section">
          <CustomStoryForm />
        </section>
      )}

      {tab === "historias" && (
        <section className="parent-section">
          <h3>Histórias personalizadas criadas</h3>
          {customStories.length === 0 ? (
            <p className="empty-state">Nenhuma história personalizada ainda. Crie uma na aba "Criar história".</p>
          ) : (
            <ul className="custom-story-list">
              {customStories.map((s) => (
                <li key={s.id}>
                  <span>
                    {s.title} · {s.ageGroup} anos
                  </span>
                  <button type="button" className="btn-secondary" onClick={() => removeCustomStory(s.id)}>
                    Remover
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {tab === "dados" && (
        <section className="parent-section">
          <h3>Privacidade e dados</h3>
          <p>
            O Pequenos Contos funciona sem cadastro. Favoritos, progresso de leitura, configurações, o PIN e as
            histórias personalizadas são salvos apenas neste dispositivo e neste navegador (armazenamento local). Não
            coletamos nome completo, fotos, localização, data de nascimento ou gravações de voz da criança. Se você
            limpar os dados do navegador ou usar outro dispositivo, essas informações não estarão disponíveis.
          </p>

          {!confirmErase ? (
            <button type="button" className="btn-secondary danger" onClick={() => setConfirmErase(true)}>
              Excluir todos os dados salvos
            </button>
          ) : (
            <div className="confirm-erase">
              <p>Isso vai remover favoritos, progresso, PIN, configurações e histórias personalizadas deste dispositivo. Tem certeza?</p>
              <div className="draft-actions">
                <button type="button" className="btn-secondary" onClick={() => setConfirmErase(false)}>
                  Cancelar
                </button>
                <button type="button" className="btn-primary danger" onClick={handleErase}>
                  Sim, excluir tudo
                </button>
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
}

export default function ParentArea() {
  return (
    <PinGate>
      <ParentContent />
    </PinGate>
  );
}
