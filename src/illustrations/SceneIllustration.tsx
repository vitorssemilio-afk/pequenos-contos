import type { Position, SceneIllustration as SceneIllustrationConfig } from "./types";
import { CHARACTERS } from "./characters";
import Background from "./Background";
import Critter from "./Critter";
import Prop from "./Prop";

interface Props {
  illustration: SceneIllustrationConfig;
  className?: string;
}

const POSITION_STYLE: Record<Position, { left: string; width: string; zIndex: number }> = {
  "fundo-esquerda": { left: "6%", width: "22%", zIndex: 1 },
  "fundo-direita": { left: "72%", width: "22%", zIndex: 1 },
  esquerda: { left: "8%", width: "32%", zIndex: 2 },
  centro: { left: "36%", width: "34%", zIndex: 3 },
  direita: { left: "62%", width: "32%", zIndex: 2 },
};

const PROP_SPOTS: { x: number; y: number; size: number }[] = [
  { x: 20, y: 20, size: 36 },
  { x: 330, y: 215, size: 34 },
  { x: 350, y: 30, size: 30 },
  { x: 10, y: 230, size: 32 },
];

export default function SceneIllustration({ illustration, className }: Props) {
  const { background, characters, props = [] } = illustration;

  return (
    <div className={`scene-illustration ${className ?? ""}`}>
      <svg viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
        <Background id={background} />
        {props.map((propId, i) => {
          const spot = PROP_SPOTS[i % PROP_SPOTS.length];
          return <Prop key={`${propId}-${i}`} id={propId} x={spot.x} y={spot.y} size={spot.size} />;
        })}
      </svg>

      {characters.map((c, i) => {
        const def = CHARACTERS[c.characterId];
        if (!def) return null;
        const style = POSITION_STYLE[c.position];
        const mirror = c.position === "direita" || c.position === "fundo-direita";
        return (
          <div
            key={`${c.characterId}-${i}`}
            className="scene-character"
            style={{
              position: "absolute",
              bottom: "6%",
              left: style.left,
              width: style.width,
              zIndex: style.zIndex,
              transform: `scale(${c.scale ?? 1})`,
              transformOrigin: "bottom center",
            }}
          >
            <Critter character={def} expression={c.pose ?? "feliz"} mirror={mirror} />
          </div>
        );
      })}
    </div>
  );
}
