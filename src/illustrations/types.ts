export type Species =
  | "coelho"
  | "urso"
  | "ursoPolar"
  | "raposa"
  | "gato"
  | "passarinho"
  | "pato"
  | "coruja"
  | "elefante"
  | "esquilo"
  | "sapo"
  | "cachorro";

export type Accessory =
  | "nenhum"
  | "lenco"
  | "suete"
  | "laco"
  | "oculos"
  | "gorro"
  | "boina"
  | "chapeuPalha"
  | "bone";

export type Expression = "feliz" | "neutro" | "surpreso" | "triste" | "sonolento" | "animado";

export type Position = "esquerda" | "centro" | "direita" | "fundo-esquerda" | "fundo-direita";

export interface CharacterDef {
  id: string;
  nome: string;
  species: Species;
  corCorpo: string;
  corDetalhe: string;
  accessory: Accessory;
  corAccessory?: string;
}

export type BackgroundId =
  | "florestaDia"
  | "florestaNoite"
  | "quartoDia"
  | "quartoNoite"
  | "fazenda"
  | "praia"
  | "jardim"
  | "parquinho"
  | "rioLagoa"
  | "montanha"
  | "vilaAlegre"
  | "ceuNuvens"
  | "cavernaAconchegante"
  | "biblioteca";

export type PropId =
  | "lua"
  | "estrelas"
  | "sol"
  | "nuvem"
  | "arcoIris"
  | "bola"
  | "pipa"
  | "guardaChuva"
  | "cestaPiquenique"
  | "flor"
  | "borboleta"
  | "balao"
  | "livro"
  | "lanterna"
  | "presente";

export interface CharacterInScene {
  characterId: string;
  pose?: Expression;
  position: Position;
  scale?: number;
}

export interface SceneIllustration {
  background: BackgroundId;
  characters: CharacterInScene[];
  props?: PropId[];
}

export type AgeGroup = 2 | 3 | 4 | 5;

export type Category =
  | "Hora de Dormir"
  | "Animais"
  | "Amizade"
  | "Sentimentos"
  | "Aventuras"
  | "Aprender Brincando";

export interface Scene {
  id: string;
  text: string;
  illustration: SceneIllustration;
}

export interface Story {
  id: string;
  title: string;
  synopsis: string;
  ageGroup: AgeGroup;
  category: Category;
  cover: SceneIllustration;
  scenes: Scene[];
  familyQuestion?: string;
}
