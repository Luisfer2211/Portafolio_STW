import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <motion.section
      className="landing"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="landing-wrapper">
        <div className="landing-content">
          <h1>¡Hola! Soy Luis 👋</h1>
          <p className="subtitle">Desarrollador web apasionado por crear experiencias únicas.</p>
          <a href="/sobre-mi" className="landing-button">Sobre Mí</a>
        </div>

       <motion.div
  className="buttons-wrapper"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 1 }}
>
  <div className="button-row">
    <Link to="/proyectos" className="projects-button">
      🚀 Ver proyectos
      <span className="shine"></span>
    </Link>
  </div>

  <div className="button-row">
    <Link to="/habilidades" className="skills-button">
      🌟 Ver habilidades
    </Link>
  </div>
</motion.div>

      </div>
    </motion.section>
  );
}
