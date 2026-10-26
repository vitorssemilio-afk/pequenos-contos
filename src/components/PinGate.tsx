import { useState, type FormEvent, type ReactNode } from "react";
import { getPinHash, hashPin, savePinHash } from "../lib/storage";

interface Props {
  children: ReactNode;
}

export default function PinGate({ children }: Props) {
  const [unlocked, setUnlocked] = useState(false);
  const [hasPin, setHasPin] = useState(() => Boolean(getPinHash()));
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function handleCreatePin(e: FormEvent) {
    e.preventDefault();
    if (pin.length < 4) {
      setError("Use um PIN com pelo menos 4 números.");
      return;
    }
    if (pin !== confirmPin) {
      setError("Os PINs não são iguais. Tente novamente.");
      return;
    }
    const hash = await hashPin(pin);
    savePinHash(hash);
    setHasPin(true);
    setUnlocked(true);
    setError(null);
  }

  async function handleUnlock(e: FormEvent) {
    e.preventDefault();
    const storedHash = getPinHash();
    const attemptHash = await hashPin(pin);
    if (attemptHash === storedHash) {
      setUnlocked(true);
      setError(null);
    } else {
      setError("PIN incorreto. Tente novamente.");
      setPin("");
    }
  }

  if (unlocked) return <>{children}</>;

  if (!hasPin) {
    return (
      <div className="pin-gate">
        <div className="pin-card">
          <h2>Criar PIN da área dos responsáveis</h2>
          <p>Esse PIN protege as configurações e a criação de histórias. Guarde-o em local seguro.</p>
          <form onSubmit={handleCreatePin}>
            <label className="field">
              <span>Novo PIN (4 ou mais números)</span>
              <input
                type="password"
                inputMode="numeric"
                pattern="[0-9]*"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                autoFocus
              />
            </label>
            <label className="field">
              <span>Confirme o PIN</span>
              <input
                type="password"
                inputMode="numeric"
                pattern="[0-9]*"
                value={confirmPin}
                onChange={(e) => setConfirmPin(e.target.value)}
              />
            </label>
            {error && <p className="error-banner">{error}</p>}
            <button type="submit" className="btn-primary">
              Criar PIN e entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="pin-gate">
      <div className="pin-card">
        <h2>Área dos responsáveis</h2>
        <p>Digite o PIN para continuar.</p>
        <form onSubmit={handleUnlock}>
          <label className="field">
            <span>PIN</span>
            <input
              type="password"
              inputMode="numeric"
              pattern="[0-9]*"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              autoFocus
            />
          </label>
          {error && <p className="error-banner">{error}</p>}
          <button type="submit" className="btn-primary">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
