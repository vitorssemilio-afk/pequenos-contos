import type { BackgroundId } from "./types";

interface Props {
  id: BackgroundId;
}

function Stars() {
  const pts = [
    [40, 40], [120, 25], [280, 50], [340, 90], [60, 110], [220, 30], [370, 40], [20, 160],
  ];
  return (
    <>
      {pts.map(([x, y], i) => (
        <path
          key={i}
          d={`M${x} ${y - 6} l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2 Z`}
          fill="#FFF7D6"
          opacity={0.9}
        />
      ))}
    </>
  );
}

export default function Background({ id }: Props) {
  switch (id) {
    case "florestaDia":
      return (
        <>
          <rect width="400" height="300" fill="#CDEBC8" />
          <circle cx="330" cy="60" r="34" fill="#FFE89B" />
          <rect y="220" width="400" height="80" fill="#9FD88A" />
          {[40, 130, 260, 350].map((x, i) => (
            <g key={i}>
              <rect x={x - 6} y="170" width="12" height="60" fill="#8C5A38" />
              <circle cx={x} cy="150" r="40" fill="#5EA86B" />
            </g>
          ))}
        </>
      );
    case "florestaNoite":
      return (
        <>
          <rect width="400" height="300" fill="#2B2A4A" />
          <circle cx="330" cy="55" r="26" fill="#F5F0DC" />
          <Stars />
          <rect y="230" width="400" height="70" fill="#1F3A2E" />
          {[40, 140, 270, 360].map((x, i) => (
            <g key={i}>
              <rect x={x - 6} y="180" width="12" height="55" fill="#3B2A20" />
              <circle cx={x} cy="162" r="36" fill="#274A38" />
            </g>
          ))}
        </>
      );
    case "quartoDia":
      return (
        <>
          <rect width="400" height="300" fill="#FFF3DD" />
          <rect y="230" width="400" height="70" fill="#E8C9A0" />
          <rect x="30" y="40" width="90" height="70" rx="8" fill="#FFF" stroke="#E8C9A0" strokeWidth="4" />
          <circle cx="320" cy="60" r="30" fill="#FFE89B" />
        </>
      );
    case "quartoNoite":
      return (
        <>
          <rect width="400" height="300" fill="#2C2E55" />
          <Stars />
          <circle cx="330" cy="60" r="26" fill="#F5F0DC" />
          <rect y="230" width="400" height="70" fill="#1E2040" />
          <rect x="30" y="50" width="90" height="60" rx="8" fill="#3A3D70" />
        </>
      );
    case "fazenda":
      return (
        <>
          <rect width="400" height="300" fill="#CFEFFF" />
          <circle cx="330" cy="55" r="30" fill="#FFE89B" />
          <rect y="200" width="400" height="100" fill="#A7DB7E" />
          <polygon points="60,160 120,160 120,200 60,200" fill="#E8534D" />
          <polygon points="55,160 90,120 125,160" fill="#8C3A32" />
        </>
      );
    case "praia":
      return (
        <>
          <rect width="400" height="180" fill="#B7E3F7" />
          <rect y="180" width="400" height="120" fill="#F5E3B3" />
          <circle cx="330" cy="55" r="30" fill="#FFE89B" />
          <path d="M0 170 Q100 150 200 170 T400 170 V180 H0 Z" fill="#8FCBE8" />
        </>
      );
    case "jardim":
      return (
        <>
          <rect width="400" height="300" fill="#E9F7DA" />
          <rect y="220" width="400" height="80" fill="#A7DB7E" />
          {[50, 150, 250, 340].map((x, i) => (
            <circle key={i} cx={x} cy="250" r="14" fill={i % 2 === 0 ? "#F2A6C1" : "#F6D860"} />
          ))}
        </>
      );
    case "parquinho":
      return (
        <>
          <rect width="400" height="300" fill="#D9EEFF" />
          <circle cx="330" cy="55" r="28" fill="#FFE89B" />
          <rect y="230" width="400" height="70" fill="#C9B896" />
          <rect x="60" y="150" width="10" height="80" fill="#B9815C" />
          <rect x="160" y="150" width="10" height="80" fill="#B9815C" />
          <rect x="60" y="150" width="110" height="10" fill="#B9815C" />
        </>
      );
    case "rioLagoa":
      return (
        <>
          <rect width="400" height="300" fill="#CDEBC8" />
          <circle cx="330" cy="55" r="28" fill="#FFE89B" />
          <path d="M0 200 Q200 170 400 210 V300 H0 Z" fill="#8FCBE8" />
        </>
      );
    case "montanha":
      return (
        <>
          <rect width="400" height="300" fill="#E3F0FF" />
          <polygon points="0,220 120,90 230,220" fill="#C9D6E6" />
          <polygon points="150,220 260,110 400,220" fill="#AFC2D8" />
          <polygon points="100,110 120,90 140,110" fill="#fff" />
          <rect y="220" width="400" height="80" fill="#BFE3A6" />
        </>
      );
    case "vilaAlegre":
      return (
        <>
          <rect width="400" height="300" fill="#FFE8D6" />
          <circle cx="330" cy="55" r="28" fill="#FFE89B" />
          <rect y="230" width="400" height="70" fill="#D8C2A0" />
          {[40, 150, 260].map((x, i) => (
            <g key={i}>
              <rect x={x} y="170" width="70" height="60" fill={i % 2 === 0 ? "#F2A6C1" : "#B9D3E6"} />
              <polygon points={`${x - 8},170 ${x + 35},140 ${x + 78},170`} fill="#8C5A38" />
            </g>
          ))}
        </>
      );
    case "ceuNuvens":
      return (
        <>
          <rect width="400" height="300" fill="#CFE9FF" />
          <circle cx="330" cy="55" r="28" fill="#FFE89B" />
          {[60, 180, 300].map((x, i) => (
            <g key={i} fill="#fff" opacity={0.9}>
              <circle cx={x} cy={90 + i * 20} r="22" />
              <circle cx={x + 26} cy={90 + i * 20} r="28" />
              <circle cx={x + 55} cy={90 + i * 20} r="20" />
            </g>
          ))}
        </>
      );
    case "cavernaAconchegante":
      return (
        <>
          <rect width="400" height="300" fill="#3B2F4A" />
          <ellipse cx="200" cy="320" rx="260" ry="140" fill="#5C4A6E" />
          <circle cx="200" cy="150" r="46" fill="#F6D860" opacity="0.5" />
        </>
      );
    case "biblioteca":
      return (
        <>
          <rect width="400" height="300" fill="#FBEFD9" />
          <rect y="230" width="400" height="70" fill="#D8C2A0" />
          <rect x="30" y="40" width="340" height="140" fill="#E8C9A0" />
          {Array.from({ length: 8 }).map((_, i) => (
            <rect key={i} x={40 + i * 42} y="55" width="30" height="110" fill={i % 2 === 0 ? "#8C5A38" : "#B9815C"} />
          ))}
        </>
      );
    default:
      return <rect width="400" height="300" fill="#FFF4D6" />;
  }
}
