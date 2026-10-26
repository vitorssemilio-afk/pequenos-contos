import type { PropId } from "./types";

interface Props {
  id: PropId;
  x: number;
  y: number;
  size?: number;
}

export default function Prop({ id, x, y, size = 40 }: Props) {
  const s = size / 40;
  const t = `translate(${x} ${y}) scale(${s})`;

  switch (id) {
    case "lua":
      return (
        <g transform={t}>
          <path d="M20 0 A20 20 0 1 0 20 40 A15 15 0 1 1 20 0" fill="#F5F0DC" />
        </g>
      );
    case "estrelas":
      return (
        <g transform={t} fill="#FFE89B">
          <path d="M6 0 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2 Z" />
          <path d="M26 10 l1.4 4 4 1.4 -4 1.4 -1.4 4 -1.4 -4 -4 -1.4 4 -1.4 Z" />
        </g>
      );
    case "sol":
      return (
        <g transform={t}>
          <circle cx="20" cy="20" r="14" fill="#FFE89B" />
          {Array.from({ length: 8 }).map((_, i) => (
            <rect
              key={i}
              x="18"
              y="-2"
              width="4"
              height="8"
              rx="2"
              fill="#FFE89B"
              transform={`rotate(${i * 45} 20 20)`}
            />
          ))}
        </g>
      );
    case "nuvem":
      return (
        <g transform={t} fill="#fff">
          <circle cx="12" cy="18" r="10" />
          <circle cx="24" cy="14" r="13" />
          <circle cx="34" cy="20" r="9" />
        </g>
      );
    case "arcoIris":
      return (
        <g transform={t} fill="none" strokeWidth="4">
          <path d="M0 40 A20 20 0 0 1 40 40" stroke="#E85D5D" />
          <path d="M4 40 A16 16 0 0 1 36 40" stroke="#F6D860" />
          <path d="M8 40 A12 12 0 0 1 32 40" stroke="#5EA86B" />
          <path d="M12 40 A8 8 0 0 1 28 40" stroke="#5B9BE0" />
        </g>
      );
    case "bola":
      return (
        <g transform={t}>
          <circle cx="16" cy="16" r="16" fill="#E85D5D" />
          <path d="M16 0 V32 M0 16 H32" stroke="#fff" strokeWidth="2" />
        </g>
      );
    case "pipa":
      return (
        <g transform={t}>
          <polygon points="16,0 32,16 16,32 0,16" fill="#5B9BE0" />
          <path d="M16 32 Q10 42 16 50 Q22 42 16 32" fill="none" stroke="#5B9BE0" strokeWidth="2" />
        </g>
      );
    case "guardaChuva":
      return (
        <g transform={t}>
          <path d="M0 18 Q18 -6 36 18 Z" fill="#F2924B" />
          <rect x="16" y="18" width="4" height="22" fill="#8C5A38" />
        </g>
      );
    case "cestaPiquenique":
      return (
        <g transform={t}>
          <rect x="2" y="14" width="30" height="18" rx="4" fill="#C06B3E" />
          <path d="M2 14 Q17 0 32 14" fill="none" stroke="#8C5A38" strokeWidth="3" />
        </g>
      );
    case "flor":
      return (
        <g transform={t}>
          {[0, 72, 144, 216, 288].map((r) => (
            <ellipse key={r} cx="16" cy="6" rx="6" ry="9" fill="#F2A6C1" transform={`rotate(${r} 16 16)`} />
          ))}
          <circle cx="16" cy="16" r="5" fill="#F6D860" />
        </g>
      );
    case "borboleta":
      return (
        <g transform={t}>
          <ellipse cx="10" cy="10" rx="9" ry="7" fill="#A35BE0" />
          <ellipse cx="22" cy="10" rx="9" ry="7" fill="#5B9BE0" />
          <ellipse cx="10" cy="20" rx="7" ry="5" fill="#A35BE0" />
          <ellipse cx="22" cy="20" rx="7" ry="5" fill="#5B9BE0" />
          <rect x="15" y="4" width="2" height="22" fill="#3A3A3A" />
        </g>
      );
    case "balao":
      return (
        <g transform={t}>
          <ellipse cx="16" cy="16" rx="14" ry="18" fill="#E85D5D" />
          <path d="M16 34 L16 48" stroke="#8C5A38" strokeWidth="2" />
        </g>
      );
    case "livro":
      return (
        <g transform={t}>
          <rect x="0" y="4" width="36" height="26" rx="3" fill="#5B9BE0" />
          <rect x="4" y="8" width="28" height="18" fill="#fff" />
        </g>
      );
    case "lanterna":
      return (
        <g transform={t}>
          <rect x="8" y="6" width="16" height="22" rx="4" fill="#F6D860" />
          <rect x="12" y="0" width="8" height="8" fill="#8C5A38" />
        </g>
      );
    case "presente":
      return (
        <g transform={t}>
          <rect x="0" y="10" width="32" height="24" fill="#A35BE0" />
          <rect x="0" y="18" width="32" height="6" fill="#F6D860" />
          <rect x="13" y="10" width="6" height="24" fill="#F6D860" />
        </g>
      );
    default:
      return null;
  }
}
