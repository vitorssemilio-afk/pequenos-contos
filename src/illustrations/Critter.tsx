import type { Accessory, CharacterDef, Expression } from "./types";

interface Props {
  character: CharacterDef;
  expression?: Expression;
  mirror?: boolean;
  label?: boolean;
}

function Eyes({ expression }: { expression: Expression }) {
  if (expression === "sonolento") {
    return (
      <>
        <path d="M80 68 q8 6 16 0" stroke="#3A3A3A" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M104 68 q8 6 16 0" stroke="#3A3A3A" strokeWidth="3" fill="none" strokeLinecap="round" />
      </>
    );
  }
  if (expression === "surpreso") {
    return (
      <>
        <circle cx="88" cy="68" r="7" fill="#3A3A3A" />
        <circle cx="112" cy="68" r="7" fill="#3A3A3A" />
        <circle cx="90" cy="65" r="2" fill="#fff" />
        <circle cx="114" cy="65" r="2" fill="#fff" />
      </>
    );
  }
  if (expression === "triste") {
    return (
      <>
        <circle cx="88" cy="70" r="5" fill="#3A3A3A" />
        <circle cx="112" cy="70" r="5" fill="#3A3A3A" />
        <path d="M80 60 q8 -4 14 -1" stroke="#3A3A3A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M106 59 q8 -3 14 1" stroke="#3A3A3A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </>
    );
  }
  return (
    <>
      <circle cx="88" cy="68" r="5.5" fill="#3A3A3A" />
      <circle cx="112" cy="68" r="5.5" fill="#3A3A3A" />
      <circle cx="90" cy="66" r="1.6" fill="#fff" />
      <circle cx="114" cy="66" r="1.6" fill="#fff" />
    </>
  );
}

function Mouth({ expression }: { expression: Expression }) {
  switch (expression) {
    case "feliz":
    case "animado":
      return <path d="M86 80 q14 14 28 0" stroke="#3A3A3A" strokeWidth="3" fill="none" strokeLinecap="round" />;
    case "surpreso":
      return <ellipse cx="100" cy="82" rx="6" ry="8" fill="#B5544B" />;
    case "triste":
      return <path d="M86 86 q14 -10 28 0" stroke="#3A3A3A" strokeWidth="3" fill="none" strokeLinecap="round" />;
    case "sonolento":
      return <path d="M92 82 q8 4 16 0" stroke="#3A3A3A" strokeWidth="2.5" fill="none" strokeLinecap="round" />;
    default:
      return <path d="M90 80 q10 8 20 0" stroke="#3A3A3A" strokeWidth="3" fill="none" strokeLinecap="round" />;
  }
}

function Blush() {
  return (
    <>
      <circle cx="74" cy="78" r="6" fill="#FFB7B7" opacity="0.6" />
      <circle cx="126" cy="78" r="6" fill="#FFB7B7" opacity="0.6" />
    </>
  );
}

function EarsAndHead({ species, corCorpo, corDetalhe }: { species: CharacterDef["species"]; corCorpo: string; corDetalhe: string }) {
  switch (species) {
    case "coelho":
      return (
        <>
          <ellipse cx="80" cy="18" rx="10" ry="30" fill={corCorpo} stroke="#0003" strokeWidth="1" />
          <ellipse cx="120" cy="18" rx="10" ry="30" fill={corCorpo} stroke="#0003" strokeWidth="1" />
          <ellipse cx="80" cy="20" rx="5" ry="22" fill={corDetalhe} />
          <ellipse cx="120" cy="20" rx="5" ry="22" fill={corDetalhe} />
          <circle cx="100" cy="68" r="40" fill={corCorpo} />
        </>
      );
    case "urso":
    case "ursoPolar":
      return (
        <>
          <circle cx="68" cy="34" r="16" fill={corCorpo} />
          <circle cx="132" cy="34" r="16" fill={corCorpo} />
          <circle cx="68" cy="34" r="8" fill={corDetalhe} />
          <circle cx="132" cy="34" r="8" fill={corDetalhe} />
          <circle cx="100" cy="68" r="40" fill={corCorpo} />
          <ellipse cx="100" cy="82" rx="14" ry="10" fill={corDetalhe} />
        </>
      );
    case "raposa":
      return (
        <>
          <path d="M62 10 L84 38 L54 42 Z" fill={corCorpo} />
          <path d="M138 10 L116 38 L146 42 Z" fill={corCorpo} />
          <path d="M66 20 L80 36 L62 36 Z" fill={corDetalhe} />
          <path d="M134 20 L120 36 L138 36 Z" fill={corDetalhe} />
          <circle cx="100" cy="68" r="40" fill={corCorpo} />
          <path d="M84 72 Q100 92 116 72 Q108 86 100 86 Q92 86 84 72" fill={corDetalhe} />
        </>
      );
    case "gato":
      return (
        <>
          <path d="M64 42 L72 8 L92 36 Z" fill={corCorpo} />
          <path d="M136 42 L128 8 L108 36 Z" fill={corCorpo} />
          <path d="M72 34 L76 18 L86 32 Z" fill={corDetalhe} />
          <path d="M128 34 L124 18 L114 32 Z" fill={corDetalhe} />
          <circle cx="100" cy="68" r="40" fill={corCorpo} />
        </>
      );
    case "passarinho":
      return (
        <>
          <circle cx="100" cy="62" r="36" fill={corCorpo} />
          <path d="M94 68 L70 72 L94 78 Z" fill="#F2924B" />
          <ellipse cx="100" cy="96" rx="26" ry="18" fill={corDetalhe} />
          <path d="M70 48 Q78 32 92 38 Q82 44 78 54 Z" fill={corDetalhe} />
        </>
      );
    case "pato":
      return (
        <>
          <circle cx="100" cy="64" r="38" fill={corCorpo} />
          <path d="M92 72 Q100 82 108 72 Q104 80 100 80 Q96 80 92 72" fill="#F2924B" />
        </>
      );
    case "coruja":
      return (
        <>
          <path d="M66 24 Q72 8 84 20 Z" fill={corDetalhe} />
          <path d="M134 24 Q128 8 116 20 Z" fill={corDetalhe} />
          <circle cx="100" cy="66" r="40" fill={corCorpo} />
          <circle cx="86" cy="66" r="16" fill="#FFF7E8" />
          <circle cx="114" cy="66" r="16" fill="#FFF7E8" />
          <path d="M96 78 L100 86 L104 78 Z" fill="#F2924B" />
        </>
      );
    case "elefante":
      return (
        <>
          <ellipse cx="54" cy="66" rx="16" ry="24" fill={corCorpo} />
          <ellipse cx="146" cy="66" rx="16" ry="24" fill={corCorpo} />
          <ellipse cx="54" cy="66" rx="9" ry="16" fill={corDetalhe} />
          <ellipse cx="146" cy="66" rx="9" ry="16" fill={corDetalhe} />
          <circle cx="100" cy="68" r="42" fill={corCorpo} />
          <path d="M100 92 Q92 118 100 128 Q108 118 100 92" fill={corCorpo} stroke={corDetalhe} strokeWidth="2" />
        </>
      );
    case "esquilo":
      return (
        <>
          <circle cx="74" cy="32" r="14" fill={corCorpo} />
          <circle cx="126" cy="32" r="14" fill={corCorpo} />
          <circle cx="74" cy="32" r="7" fill={corDetalhe} />
          <circle cx="126" cy="32" r="7" fill={corDetalhe} />
          <circle cx="100" cy="68" r="38" fill={corCorpo} />
        </>
      );
    case "sapo":
      return (
        <>
          <circle cx="76" cy="40" r="16" fill={corCorpo} />
          <circle cx="124" cy="40" r="16" fill={corCorpo} />
          <circle cx="76" cy="40" r="7" fill="#2E2E2E" />
          <circle cx="124" cy="40" r="7" fill="#2E2E2E" />
          <ellipse cx="100" cy="76" rx="42" ry="34" fill={corCorpo} />
        </>
      );
    case "cachorro":
      return (
        <>
          <ellipse cx="62" cy="54" rx="16" ry="26" fill={corDetalhe} transform="rotate(-10 62 54)" />
          <ellipse cx="138" cy="54" rx="16" ry="26" fill={corDetalhe} transform="rotate(10 138 54)" />
          <circle cx="100" cy="68" r="40" fill={corCorpo} />
          <ellipse cx="100" cy="82" rx="16" ry="11" fill="#FFF3E6" />
        </>
      );
    default:
      return <circle cx="100" cy="68" r="40" fill={corCorpo} />;
  }
}

function Snout({ species }: { species: CharacterDef["species"] }) {
  if (species === "coelho" || species === "urso" || species === "ursoPolar" || species === "cachorro") {
    return <ellipse cx="100" cy="76" rx="5" ry="4" fill="#3A3A3A" />;
  }
  if (species === "raposa" || species === "gato" || species === "esquilo") {
    return <path d="M96 76 L100 82 L104 76 Z" fill="#3A3A3A" />;
  }
  return null;
}

function AccessoryLayer({ accessory, color }: { accessory: Accessory; color?: string }) {
  const c = color || "#E85D5D";
  switch (accessory) {
    case "lenco":
      return (
        <>
          <path d="M70 100 Q100 116 130 100 L124 112 Q100 124 76 112 Z" fill={c} />
          <path d="M96 112 L92 128 L104 120 Z" fill={c} />
        </>
      );
    case "suete":
      return <path d="M60 104 Q100 92 140 104 L140 142 Q100 154 60 142 Z" fill={c} />;
    case "laco":
      return (
        <>
          <path d="M92 20 L76 8 L80 26 Z" fill={c} />
          <path d="M108 20 L124 8 L120 26 Z" fill={c} />
          <circle cx="100" cy="20" r="6" fill={c} />
        </>
      );
    case "oculos":
      return (
        <>
          <circle cx="88" cy="68" r="12" fill="none" stroke="#4A4A4A" strokeWidth="3" />
          <circle cx="112" cy="68" r="12" fill="none" stroke="#4A4A4A" strokeWidth="3" />
          <path d="M100 68 h0" stroke="#4A4A4A" strokeWidth="3" />
        </>
      );
    case "gorro":
      return (
        <>
          <path d="M62 44 Q100 4 138 44 Z" fill={c} />
          <circle cx="100" cy="8" r="7" fill="#fff" />
        </>
      );
    case "boina":
      return <ellipse cx="100" cy="30" rx="34" ry="12" fill={c} />;
    case "chapeuPalha":
      return (
        <>
          <ellipse cx="100" cy="34" rx="48" ry="10" fill={c} />
          <ellipse cx="100" cy="22" rx="24" ry="14" fill={c} />
        </>
      );
    case "bone":
      return (
        <>
          <path d="M64 40 Q100 10 136 40 Q100 30 64 40" fill={c} />
          <ellipse cx="134" cy="42" rx="14" ry="6" fill={c} />
        </>
      );
    default:
      return null;
  }
}

function hasTail(species: CharacterDef["species"]) {
  return ["raposa", "gato", "esquilo", "cachorro", "coelho"].includes(species);
}

function Tail({ species, corCorpo, corDetalhe }: { species: CharacterDef["species"]; corCorpo: string; corDetalhe: string }) {
  if (!hasTail(species)) return null;
  if (species === "esquilo") {
    return <path d="M138 98 Q172 70 150 30 Q180 60 150 112 Z" fill={corCorpo} stroke={corDetalhe} strokeWidth="2" />;
  }
  if (species === "raposa") {
    return <path d="M138 110 Q170 118 162 92 Q176 118 142 128 Z" fill={corCorpo} />;
  }
  if (species === "coelho") {
    return <circle cx="140" cy="118" r="9" fill="#fff" />;
  }
  return <ellipse cx="138" cy="116" rx="10" ry="7" fill={corCorpo} />;
}

export default function Critter({ character, expression = "feliz", mirror = false, label = false }: Props) {
  const { species, corCorpo, corDetalhe, accessory, corAccessory, nome } = character;

  return (
    <svg
      viewBox="0 0 200 200"
      width="100%"
      height="100%"
      role="img"
      aria-label={`${nome}, ${expression}`}
      style={{ transform: mirror ? "scaleX(-1)" : undefined }}
    >
      <Tail species={species} corCorpo={corCorpo} corDetalhe={corDetalhe} />

      <ellipse cx="100" cy="150" rx="46" ry="42" fill={corCorpo} />
      <ellipse cx="78" cy="170" rx="12" ry="9" fill={corDetalhe} />
      <ellipse cx="122" cy="170" rx="12" ry="9" fill={corDetalhe} />
      <ellipse cx="66" cy="148" rx="11" ry="18" fill={corCorpo} />
      <ellipse cx="134" cy="148" rx="11" ry="18" fill={corCorpo} />

      <EarsAndHead species={species} corCorpo={corCorpo} corDetalhe={corDetalhe} />
      <Blush />
      <Eyes expression={expression} />
      <Snout species={species} />
      <Mouth expression={expression} />
      <AccessoryLayer accessory={accessory} color={corAccessory} />
      {label && (
        <text x="100" y="196" textAnchor="middle" fontSize="14" fontFamily="Baloo 2, sans-serif" fill="#4a3b55">
          {nome}
        </text>
      )}
    </svg>
  );
}
