import './SkullBackground.css';
import skull from '../assets/calavera.png';

export default function SkullBackground() {
  const skulls = Array.from({ length: 40 });

  return (
    <div className="skull-background">
      {skulls.map((_, i) => (
        <img
          key={i}
          src={skull}
          alt="Calavera"
          className="skull"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${15 + Math.random() * 10}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );
}
