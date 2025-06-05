import { useEffect, useRef } from "react";
import "./ThemeTransition.css";

export default function ThemeTransition({ toDark }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    
    // Inicia la animación después de que el DOM se actualice
    requestAnimationFrame(() => {
      overlay.classList.add("active");
    });

    // Limpia después de la animación
    const timer = setTimeout(() => {
      overlay.classList.remove("active");
    }, 1000);

    return () => clearTimeout(timer);
  }, [toDark]);

  return (
    <div 
      ref={overlayRef}
      className={`theme-transition-overlay ${toDark ? "to-dark" : "to-light"}`}
    />
  );
}