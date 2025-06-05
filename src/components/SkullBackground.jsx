import './SkullBackground.css';
import skull from '../assets/calavera.png';

export default function SkullBackground() {
  const skulls = Array.from({ length: 200 });

  return (
    <div className="skull-background">
      {skulls.map((_, i) => {
        const randomRotation = Math.random() * 360;
        const randomDuration = 10 + Math.random() * 10;
        const randomDelay = Math.random() * 10;
        const randomLeft = Math.random() * 100;

        return (
          <img
            key={i}
            src={skull}
            alt="Calavera"
            className="skull"
            style={{
              left: `${randomLeft}vw`,
              bottom: `-60px`,
              animationDuration: `${randomDuration}s`,
              animationDelay: `${randomDelay}s`,
              transform: `rotate(${randomRotation}deg)`,
            }}
          />
        );
      })}
    </div>
  );
}
