// src/pages/Proyectos.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import proyectos from "../assets/proyectosData";
import "./Proyectos.css";
import { useNavigate } from "react-router-dom";


export default function Proyectos() {
  const [proyectoActivo, setProyectoActivo] = useState(null);
  const navigate = useNavigate();


  return (
    <section className="proyectos">
      <button
  onClick={() => navigate("/")}
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

      <h2 className="proyectos-titulo">🌟 Mis Proyectos</h2>

      <div className="proyectos-grid">
        {proyectos.map((proyecto) => (
          <motion.div
            key={proyecto.id}
            className="proyecto-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setProyectoActivo(proyecto)}
          >
            <img src={proyecto.imagen} alt={proyecto.nombre} />
            <h3>{proyecto.nombre}</h3>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {proyectoActivo && (
          <motion.div
            className="proyecto-detalle-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setProyectoActivo(null)}
          >
            <motion.div
              className="proyecto-detalle"
              initial={{ scale: 0.85, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="cerrar-detalle"
                onClick={() => setProyectoActivo(null)}
              >
                ✖
              </button>
              <img src={proyectoActivo.imagen} alt={proyectoActivo.nombre} />
              <h3>{proyectoActivo.nombre}</h3>
              <p>{proyectoActivo.descripcion}</p>

              <div className="botones-proyecto">
                <a
                  href={proyectoActivo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proyecto-link"
                >
                  🌐 Ver Proyecto
                </a>

                {proyectoActivo.repositorio && (
                  <a
                    href={proyectoActivo.repositorio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proyecto-repo"
                  >
                    💻 Ver Repositorio
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
