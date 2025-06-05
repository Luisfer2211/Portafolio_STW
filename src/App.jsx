// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeTransition from "./components/ThemeTransition";
import Landing from "./components/Landing";
import SobreMi from "./pages/SobreMi"; // Asegúrate de crear este archivo
import Habilidades from "./pages/Habilidades";

function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleTheme = () => {
    if (isTransitioning) return;

    const goingDark = !darkMode;
    setIsTransitioning(true);
    setDarkMode(goingDark);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  return (
    <Router>
      <div>
        <button
          onClick={toggleTheme}
          disabled={isTransitioning}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "var(--button-bg)",
            color: "var(--button-text)",
            border: "none",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            zIndex: 10000,
            opacity: isTransitioning ? 0.5 : 1,
          }}
        >
          {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
        </button>

        {isTransitioning && <ThemeTransition toDark={!darkMode} />}

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/habilidades" element={<Habilidades />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
