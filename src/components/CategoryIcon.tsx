import type { Category } from "../illustrations/types";

interface Props {
  category: Category;
  size?: number;
}

export default function CategoryIcon({ category, size = 28 }: Props) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none" } as const;

  switch (category) {
    case "Hora de Dormir":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" fill="currentColor" />
        </svg>
      );
    case "Animais":
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="12" cy="14" r="6" fill="currentColor" />
          <circle cx="6" cy="7" r="2.4" fill="currentColor" />
          <circle cx="18" cy="7" r="2.4" fill="currentColor" />
          <circle cx="12" cy="4.5" r="2" fill="currentColor" />
        </svg>
      );
    case "Amizade":
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="8" cy="10" r="4" fill="currentColor" />
          <circle cx="16" cy="10" r="4" fill="currentColor" />
          <path d="M3 20c0-3 2.5-5 5-5s5 2 5 5M11 20c0-3 2.5-5 5-5s5 2 5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      );
    case "Sentimentos":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M12 20s-7.5-4.6-9.3-9.2C1.6 8 3 5 6.2 5c2 0 3.6 1.3 4.3 2.9C11.2 6.3 12.8 5 14.8 5 18 5 19.4 8 18.3 10.8 17.5 15.4 12 20 12 20Z"
            fill="currentColor"
          />
        </svg>
      );
    case "Aventuras":
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M15 9l-2 5-5 2 2-5 5-2Z" fill="currentColor" />
        </svg>
      );
    case "Aprender Brincando":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="3" y="3" width="8" height="8" rx="2" fill="currentColor" />
          <rect x="13" y="3" width="8" height="8" rx="2" fill="currentColor" opacity="0.6" />
          <rect x="3" y="13" width="8" height="8" rx="2" fill="currentColor" opacity="0.6" />
          <rect x="13" y="13" width="8" height="8" rx="2" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}
