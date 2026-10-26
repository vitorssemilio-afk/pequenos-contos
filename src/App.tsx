import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppDataProvider } from "./context/AppDataContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Favorites from "./pages/Favorites";
import ParentArea from "./pages/ParentArea";
import Reader from "./pages/Reader";
import "./App.css";

export default function App() {
  return (
    <AppDataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/historia/:storyId" element={<Reader />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/biblioteca" element={<Library />} />
            <Route path="/favoritas" element={<Favorites />} />
            <Route path="/responsaveis" element={<ParentArea />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppDataProvider>
  );
}
