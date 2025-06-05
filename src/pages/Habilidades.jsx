import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaReact, FaHtml5, FaJs, FaPython, FaJava, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiPostgresql, SiCplusplus } from "react-icons/si";

const habilidades = [
  { nombre: "Python", icono: <FaPython color="#3776AB" />, porcentaje: 90 },
  { nombre: "Java", icono: <FaJava color="#E76F00" />, porcentaje: 80 },
  { nombre: "PostgreSQL", icono: <SiPostgresql color="#336791" />, porcentaje: 70 },
  { nombre: "C++", icono: <SiCplusplus color="#00599C" />, porcentaje: 55 },
  { nombre: "HTML", icono: <FaHtml5 color="#e34c26" />, porcentaje: 65 },
  { nombre: "JavaScript", icono: <FaJs color="#f7df1e" />, porcentaje: 75 },
  { nombre: "Docker", icono: <FaDocker color="#0db7ed" />, porcentaje: 50 },
  { nombre: "React", icono: <FaReact color="#61dafb" />, porcentaje: 60 },
  { nombre: "Git", icono: <FaGitAlt color="#f34f29" />, porcentaje: 85 },
];

export default function Habilidades() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const navigate = useNavigate();

  const volverAPrincipal = () => {
    navigate("/");
  };

  return (
    <section ref={ref} style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      {/* Botón de volver */}
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

      <h2 style={{ fontSize: "2rem", marginBottom: "30px", textAlign: "center", color: "#66ff66" }}>
        ⚙️ Habilidades
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>
        {habilidades.map((hab, idx) => (
          <div key={idx}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "8px", gap: "10px" }}>
              <span title={hab.nombre} style={{ fontSize: "1.6rem" }}>
                {hab.icono}
              </span>
              <strong style={{ fontSize: "1rem", color: "#fff" }}>{hab.nombre}</strong>
            </div>
            <div style={{ background: "#333", height: "10px", borderRadius: "5px", overflow: "hidden" }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: inView ? `${hab.porcentaje}%` : 0 }}
                transition={{ duration: 1.2, delay: idx * 0.1 }}
                style={{
                  height: "100%",
                  background: "#66ff66",
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
