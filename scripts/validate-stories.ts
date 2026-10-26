import { CHARACTERS } from "../src/illustrations/characters";
import type { AgeGroup, BackgroundId, Category, PropId, SceneIllustration, Story } from "../src/illustrations/types";

const VALID_BACKGROUNDS: BackgroundId[] = [
  "florestaDia", "florestaNoite", "quartoDia", "quartoNoite", "fazenda", "praia", "jardim",
  "parquinho", "rioLagoa", "montanha", "vilaAlegre", "ceuNuvens", "cavernaAconchegante", "biblioteca",
];
const VALID_PROPS: PropId[] = [
  "lua", "estrelas", "sol", "nuvem", "arcoIris", "bola", "pipa", "guardaChuva", "cestaPiquenique",
  "flor", "borboleta", "balao", "livro", "lanterna", "presente",
];
const VALID_CATEGORIES: Category[] = [
  "Hora de Dormir", "Animais", "Amizade", "Sentimentos", "Aventuras", "Aprender Brincando",
];

const NARRATION_WPM = 120;

function countWords(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function validateIllustration(illustration: SceneIllustration, context: string, errors: string[]) {
  if (!VALID_BACKGROUNDS.includes(illustration.background)) {
    errors.push(`${context}: background inválido "${illustration.background}"`);
  }
  for (const c of illustration.characters) {
    if (!CHARACTERS[c.characterId]) {
      errors.push(`${context}: characterId inválido "${c.characterId}"`);
    }
  }
  for (const p of illustration.props ?? []) {
    if (!VALID_PROPS.includes(p)) {
      errors.push(`${context}: prop inválido "${p}"`);
    }
  }
}

async function loadAge(age: AgeGroup): Promise<Story[] | null> {
  try {
    const mod = await import(`../src/data/stories/age${age}.ts`);
    return mod.default as Story[];
  } catch (err) {
    console.log(`  (age${age}.ts ainda não disponível ou com erro de import: ${(err as Error).message.split("\n")[0]})`);
    return null;
  }
}

async function main() {
  const errors: string[] = [];
  const warnings: string[] = [];
  const allIds = new Set<string>();

  for (const age of [2, 3, 4, 5] as AgeGroup[]) {
    const stories = await loadAge(age);
    if (!stories) continue;

    console.log(`\n=== ${age} anos: ${stories.length} história(s) ===`);
    if (stories.length !== 10) {
      errors.push(`age${age}: esperado 10 histórias, encontrado ${stories.length}`);
    }

    const categoryCount: Record<string, number> = {};

    for (const story of stories) {
      const ctx = `[${age}a] "${story.title}" (${story.id})`;

      if (allIds.has(story.id)) errors.push(`${ctx}: id duplicado`);
      allIds.add(story.id);

      if (story.ageGroup !== age) errors.push(`${ctx}: ageGroup inconsistente (${story.ageGroup})`);
      if (!VALID_CATEGORIES.includes(story.category)) errors.push(`${ctx}: categoria inválida "${story.category}"`);
      categoryCount[story.category] = (categoryCount[story.category] ?? 0) + 1;

      if (!story.scenes || story.scenes.length === 0) {
        errors.push(`${ctx}: sem cenas`);
        continue;
      }

      const totalWords = story.scenes.reduce((sum, s) => sum + countWords(s.text), 0);
      const minutes = totalWords / NARRATION_WPM;
      const status = minutes >= 10 && minutes <= 15 ? "OK" : "FORA DA FAIXA";
      console.log(`  - ${story.title}: ${story.scenes.length} cenas, ${totalWords} palavras, ~${minutes.toFixed(1)} min [${status}]`);

      if (minutes < 9.5 || minutes > 15.5) {
        errors.push(`${ctx}: duração estimada ${minutes.toFixed(1)} min fora de 10-15 min (total ${totalWords} palavras)`);
      } else if (minutes < 10 || minutes > 15) {
        warnings.push(`${ctx}: duração estimada ${minutes.toFixed(1)} min levemente fora de 10-15 min`);
      }

      validateIllustration(story.cover, `${ctx} cover`, errors);
      story.scenes.forEach((scene, i) => {
        if (!scene.text || !scene.text.trim()) errors.push(`${ctx} cena ${i + 1}: texto vazio`);
        validateIllustration(scene.illustration, `${ctx} cena ${i + 1}`, errors);
      });

      if (!story.familyQuestion || !story.familyQuestion.trim()) {
        warnings.push(`${ctx}: sem familyQuestion`);
      }
      if (!story.synopsis || !story.synopsis.trim()) {
        warnings.push(`${ctx}: sem synopsis`);
      }
    }

    console.log(`  Categorias: ${JSON.stringify(categoryCount)}`);
  }

  console.log(`\n--- Resumo ---`);
  console.log(`Total de histórias com id único: ${allIds.size}`);

  if (warnings.length) {
    console.log(`\nAvisos (${warnings.length}):`);
    warnings.forEach((w) => console.log(`  ! ${w}`));
  }

  if (errors.length) {
    console.log(`\nErros (${errors.length}):`);
    errors.forEach((e) => console.log(`  x ${e}`));
    process.exitCode = 1;
  } else {
    console.log(`\nNenhum erro encontrado nos arquivos carregados.`);
  }
}

main();
