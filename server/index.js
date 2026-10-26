import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-5";

const CHARACTER_IDS = [
  "coelhoNino", "ursoBento", "raposaMel", "gatinhaLuna", "passarinhoPipo", "patinhoTom",
  "corujaSabia", "elefantinhoDoce", "esquilaNoz", "ursinhaMimosa", "sapinhoCoco", "cachorrinhoBolinha",
];
const BACKGROUND_IDS = [
  "florestaDia", "florestaNoite", "quartoDia", "quartoNoite", "fazenda", "praia", "jardim",
  "parquinho", "rioLagoa", "montanha", "vilaAlegre", "ceuNuvens", "cavernaAconchegante", "biblioteca",
];
const PROP_IDS = [
  "lua", "estrelas", "sol", "nuvem", "arcoIris", "bola", "pipa", "guardaChuva", "cestaPiquenique",
  "flor", "borboleta", "balao", "livro", "lanterna", "presente",
];
const CATEGORIES = ["Hora de Dormir", "Animais", "Amizade", "Sentimentos", "Aventuras", "Aprender Brincando"];

app.use(cors());
app.use(express.json());

app.get("/api/ai-status", (_req, res) => {
  res.json({ configured: Boolean(ANTHROPIC_API_KEY) });
});

function ageGuidelines(age) {
  switch (Number(age)) {
    case 2:
      return "Frases muito curtas, vocabulário concreto, repetições naturais e sons de animais. Uma sequência simples de acontecimentos. 11 a 15 cenas bem curtas (15 a 35 palavras cada).";
    case 3:
      return "Frases curtas e diálogos simples. Pequenas descobertas do cotidiano, com repetição que incentive participação. 9 a 12 cenas (45 a 85 palavras cada).";
    case 4:
      return "Enredo com começo, meio e fim bem definidos, com pequenos desafios e soluções compreensíveis. 7 a 10 cenas (130 a 190 palavras cada).";
    case 5:
    default:
      return "Aventura um pouco mais elaborada, personagem com objetivo claro, desafio resolvido com criatividade e colaboração. 6 a 9 cenas (160 a 230 palavras cada).";
  }
}

function buildSystemPrompt(age, durationMinutes) {
  const minutes = Math.min(15, Math.max(10, Number(durationMinutes) || 12));
  const targetWords = minutes * 120;
  return `Você é um escritor de histórias infantis para o app "Pequenos Contos". Gere UMA história original, completa, acolhedora, sem violência, terror ou humilhação, para uma criança de ${age} anos.

Diretrizes para essa idade: ${ageGuidelines(age)}

O total de palavras de todas as cenas somadas deve resultar em aproximadamente ${minutes} minutos de narração calma (use 120 palavras por minuto como referência, ou seja, cerca de ${targetWords} palavras no total, podendo variar um pouco para a narrativa ficar natural).

Responda APENAS com um JSON válido, sem texto fora do JSON, no formato exato:
{
  "title": "...",
  "synopsis": "...",
  "category": "uma destas: ${CATEGORIES.join(" | ")}",
  "cover": { "background": "um destes: ${BACKGROUND_IDS.join(", ")}", "characters": [{"characterId": "um destes: ${CHARACTER_IDS.join(", ")}", "pose": "feliz|neutro|surpreso|triste|sonolento|animado", "position": "esquerda|centro|direita|fundo-esquerda|fundo-direita"}], "props": ["0 a 3 destes: ${PROP_IDS.join(", ")}"] },
  "scenes": [
    { "text": "...", "illustration": { "background": "...", "characters": [...], "props": [...] } }
  ],
  "familyQuestion": "pergunta aberta e carinhosa para conversar em família, sem certo ou errado"
}

Use SOMENTE os ids de personagens, cenários e props listados acima. Mantenha os mesmos personagens (characterId) em todas as cenas da história, para garantir consistência visual. A ilustração de cada cena deve corresponder ao que acontece no texto daquela cena.`;
}

app.post("/api/custom-story", async (req, res) => {
  const { childAge, nickname, character, theme, setting, durationMinutes } = req.body || {};

  if (!childAge || !theme) {
    return res.status(400).json({ error: "Informe ao menos a idade da criança e o tema da história." });
  }

  if (!ANTHROPIC_API_KEY) {
    return res.status(503).json({
      error:
        "A geração de histórias por IA não está configurada neste servidor. Peça a um adulto para configurar a chave ANTHROPIC_API_KEY no arquivo .env.",
    });
  }

  const userMessage = [
    `Idade da criança: ${childAge} anos`,
    nickname ? `Apelido do protagonista: ${nickname}` : null,
    character ? `Personagem principal desejado (characterId sugerido, pode ajustar se necessário): ${character}` : null,
    `Tema: ${theme}`,
    setting ? `Cenário principal: ${setting}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 4000,
        system: buildSystemPrompt(childAge, durationMinutes),
        messages: [{ role: "user", content: userMessage }],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Erro da API Anthropic:", response.status, errText);
      return res.status(502).json({ error: "Não foi possível gerar a história agora. Tente novamente em instantes." });
    }

    const data = await response.json();
    const rawText = data?.content?.[0]?.text ?? "";

    let parsed;
    try {
      const jsonMatch = rawText.match(/\{[\s\S]*\}/);
      parsed = JSON.parse(jsonMatch ? jsonMatch[0] : rawText);
    } catch (parseErr) {
      console.error("Falha ao interpretar resposta da IA:", parseErr, rawText);
      return res.status(502).json({ error: "A IA retornou um formato inesperado. Tente novamente." });
    }

    if (!parsed.scenes || !Array.isArray(parsed.scenes) || parsed.scenes.length === 0) {
      return res.status(502).json({ error: "A história gerada ficou incompleta. Tente novamente." });
    }

    res.json({
      id: `custom-${Date.now()}`,
      title: parsed.title || "Uma história especial",
      synopsis: parsed.synopsis || "",
      ageGroup: Number(childAge),
      category: parsed.category || "Aventuras",
      cover: parsed.cover,
      scenes: parsed.scenes.map((scene, i) => ({
        id: `custom-scene-${i}`,
        text: scene.text,
        illustration: scene.illustration,
      })),
      familyQuestion: parsed.familyQuestion,
    });
  } catch (err) {
    console.error("Erro inesperado ao gerar história personalizada:", err);
    res.status(500).json({ error: "Erro inesperado ao gerar a história." });
  }
});

const distPath = path.join(__dirname, "..", "dist");
app.use(express.static(distPath));
app.use((req, res) => {
  if (req.path.startsWith("/api")) return res.status(404).json({ error: "Rota não encontrada" });
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor do Pequenos Contos rodando em http://localhost:${PORT}`);
});
