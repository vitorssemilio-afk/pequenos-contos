import { NavLink, Outlet } from "react-router-dom";

function HomeGlyph() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 11l9-7 9 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BookGlyph() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22.5V4.5Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

function StarGlyph() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l2.6 5.9 6.4.6-4.8 4.3 1.4 6.2-5.6-3.4-5.6 3.4 1.4-6.2L2.9 9.5l6.4-.6L12 3Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

function FamilyGlyph() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="8.5" r="2.3" stroke="currentColor" strokeWidth="2" />
      <path d="M3 21v-1c0-3 2.7-5 6-5s6 2 6 5v1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M15 21v-0.6c0-2-1.6-3.6-3.6-4.2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default function Layout() {
  return (
    <div className="layout">
      <main className="layout-content">
        <Outlet />
      </main>
      <nav className="tab-bar" aria-label="Navegação principal">
        <NavLink to="/" end className="tab-item">
          <HomeGlyph />
          <span>Início</span>
        </NavLink>
        <NavLink to="/biblioteca" className="tab-item">
          <BookGlyph />
          <span>Biblioteca</span>
        </NavLink>
        <NavLink to="/favoritas" className="tab-item">
          <StarGlyph />
          <span>Favoritas</span>
        </NavLink>
        <NavLink to="/responsaveis" className="tab-item">
          <FamilyGlyph />
          <span>Responsáveis</span>
        </NavLink>
      </nav>
    </div>
  );
}
