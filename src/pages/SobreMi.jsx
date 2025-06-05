import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SobreMi() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("quien");
  const [jugadorSeleccionado, setJugadorSeleccionado] = useState("Lionel Messi");
  const [jugadorInfo, setJugadorInfo] = useState(null);

  const jugadores = [
    "Lionel Messi",
    "Ansu Fati",
    "Andrés Iniesta",
    "Xavi Hernández",
    "Sergi Busquets",
    "Lamine Yamal",
    "Luis Suárez",
    "Pedri González",
    "Frenkie de Jong",
    "Cristiano Ronaldo",
    "Neymar",
    "Mohamed Salah",
    "Roberto Firmino",
  ];

  useEffect(() => {
    const fetchJugador = async () => {
      try {
        const res = await axios.get(
          `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${encodeURIComponent(
            jugadorSeleccionado
          )}`
        );
        setJugadorInfo(res.data.player?.[0] || null);
      } catch (error) {
        console.error("Error al obtener datos del jugador:", error);
        setJugadorInfo(null);
      }
    };

    fetchJugador();
  }, [jugadorSeleccionado]);

  const volverAPrincipal = () => {
    navigate("/");
  };

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
      <button
        onClick={volverAPrincipal}
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          padding: "10px 14px",
          fontSize: "14px",
          borderRadius: "8px",
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          zIndex: 999,
        }}
      >
        ← Inicio
      </button>

      <h1 style={{ marginBottom: "20px", color: "var(--accent, #66ff66)" }}>Sobre Mí</h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "30px" }}>
        {[
          { key: "quien", label: "¿Quién soy?" },
          { key: "quehago", label: "¿Qué hago?" },
          { key: "queofrezco", label: "¿Qué ofrezco?" },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            style={{
              padding: "10px 16px",
              borderRadius: "20px",
              border: "1px solid #4caf50",
              backgroundColor: tab === key ? "#4caf50" : "rgba(255,255,255,0.05)",
              color: tab === key ? "#fff" : "#a0ffa0",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: tab === key ? "0 0 10px rgba(76, 175, 80, 0.7)" : "none",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.05)",
          padding: "20px",
          borderRadius: "12px",
          textAlign: "justify",
        }}
      >
        {tab === "quien" && (
          <p>
            Me llamo <span style={{ color: "#4caf50", fontWeight: "bold" }}>Luis Fernando Palacios López</span>, pero mis amigos me llaman <strong>Luisfer</strong>. Soy una persona apasionada por la tecnología, el desarrollo de software y la innovación en el mundo digital. Actualmente curso el quinto semestre de la carrera de Ingeniería en Ciencias de la Computación y Tecnologías de la Información en la Universidad del Valle, donde he adquirido conocimientos sólidos en estructuras de datos, programación orientada a objetos, inteligencia artificial, bases de datos y sistemas distribuidos.
            <br /><br />
            Mi enfoque no solo está en la teoría, sino también en la aplicación práctica. Me gusta abordar problemas complejos y encontrar soluciones eficientes que optimicen procesos y mejoren la experiencia del usuario. Busco continuamente oportunidades para aprender y aplicar nuevas tecnologías en proyectos personales y colaborativos.
          </p>
        )}
        {tab === "quehago" && (
          <p>
            Me especializo en el desarrollo de aplicaciones y páginas web, enfocándome principalmente en el frontend. Aunque el diseño visual no es mi fuerte, siempre me esfuerzo en que la estructura y el funcionamiento de las aplicaciones sean óptimos. Mi prioridad es crear productos que sean rápidos, accesibles y escalables.
            <br /><br />
            Además del frontend, tengo conocimientos en backend y bases de datos, lo que me permite construir sistemas más robustos y completos. Me interesa el desarrollo de software de calidad, con buenas prácticas de código limpio, modular y mantenible. También disfruto trabajar en proyectos colaborativos donde puedo aportar mis habilidades y aprender de otros profesionales.
          </p>
        )}
        {tab === "queofrezco" && (
          <p>
            Ofrezco un conjunto sólido de habilidades en trabajo en equipo, liderazgo, comunicación efectiva y resolución de problemas. Me considero una persona proactiva y con gran capacidad de adaptación a distintos entornos, lo que me permite aprender rápidamente nuevas tecnologías y metodologías de trabajo.
            <br /><br />
            Poseo experiencia en metodologías ágiles, como Scrum y Kanban, que me han ayudado a gestionar mejor los proyectos y optimizar el flujo de trabajo. Mi enfoque analítico y mi pensamiento crítico me permiten identificar áreas de mejora, plantear estrategias eficientes y desarrollar soluciones que aporten valor.
            <br /><br />
            Además, me interesa la mejora continua y el crecimiento profesional, por lo que siempre busco oportunidades para ampliar mis conocimientos a través de cursos, certificaciones y proyectos prácticos. Me comprometo a aportar ideas innovadoras y estratégicas que beneficien a los equipos y a los proyectos en los que participo.
          </p>
        )}
      </div>

      <div style={{ marginTop: "60px" }}>
        <h2>⚽ Mis Jugadores Favoritos</h2>
        <p style={{ marginTop: "10px", marginBottom: "20px", fontStyle: "italic" }}>
          Ya que llegaste hasta aquí, puedes ver algunos de mis jugadores de fútbol favoritos usando una API ✨
        </p>

        <select
          value={jugadorSeleccionado}
          onChange={(e) => setJugadorSeleccionado(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "2px solid #4caf50",
            backgroundColor: "#1e1e1e",
            color: "#a0ffa0",
          }}
        >
          {jugadores.map((nombre) => (
            <option key={nombre} value={nombre}>
              {nombre}
            </option>
          ))}
        </select>

        {jugadorInfo ? (
          <div
            style={{
              marginTop: "30px",
              backgroundColor: "rgba(0,0,0,0.2)",
              borderRadius: "12px",
              padding: "20px",
              maxWidth: "350px",
              marginInline: "auto",
              border: "2px solid #66ff66",
            }}
          >
            <img
              src={jugadorInfo.strCutout || jugadorInfo.strThumb || ""}
              alt={jugadorInfo.strPlayer}
              style={{
                width: "100%",
                borderRadius: "12px",
                marginBottom: "10px",
                border: "3px solid #66ff66",
              }}
            />
            <h3 style={{ color: "#66ff66" }}>{jugadorInfo.strPlayer}</h3>
            <p style={{ opacity: 0.85 }}>{jugadorInfo.strTeam || "Equipo desconocido"}</p>
          </div>
        ) : (
          <p style={{ marginTop: "20px", color: "#ccc" }}>Cargando información del jugador...</p>
        )}
      </div>
    </div>
  );
}
