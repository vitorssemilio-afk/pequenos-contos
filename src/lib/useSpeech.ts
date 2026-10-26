import { useCallback, useEffect, useRef, useState } from "react";

function pickPortugueseVoice(voices: SpeechSynthesisVoice[]) {
  return (
    voices.find((v) => v.lang === "pt-BR") ||
    voices.find((v) => v.lang?.toLowerCase().startsWith("pt")) ||
    null
  );
}

export function useSpeech() {
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [speaking, setSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (!supported) return;

    function updateVoice() {
      setVoice(pickPortugueseVoice(window.speechSynthesis.getVoices()));
    }

    updateVoice();
    window.speechSynthesis.addEventListener("voiceschanged", updateVoice);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", updateVoice);
  }, [supported]);

  const cancel = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
  }, [supported]);

  const speak = useCallback(
    (text: string, onEnd?: () => void) => {
      if (!supported) return;
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      if (voice) utterance.voice = voice;
      utterance.lang = "pt-BR";
      utterance.rate = 0.92;
      utterance.pitch = 1.05;
      utterance.onstart = () => setSpeaking(true);
      utterance.onend = () => {
        setSpeaking(false);
        onEnd?.();
      };
      utterance.onerror = () => setSpeaking(false);
      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    [supported, voice],
  );

  useEffect(() => cancel, [cancel]);

  return {
    supported,
    voiceAvailable: Boolean(voice),
    speaking,
    speak,
    cancel,
  };
}
