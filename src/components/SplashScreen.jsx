import { useState, useEffect } from "react";

function SplashScreen({ onFinish }) {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const text = "Welcome to Disha's Portfolio";
  const letters = text.split("");

  useEffect(() => {
    const totalRevealTime = letters.length * 90 + 1200;
    const fadeTimer = setTimeout(() => setFadeOut(true), totalRevealTime);
    const removeTimer = setTimeout(() => {
      setVisible(false);
      onFinish();
    }, totalRevealTime + 700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onFinish, letters.length]);

  if (!visible) return null;

  return (
    <div className={`splash-screen ${fadeOut ? "splash-fade-out" : ""}`}>
      <h1 className="splash-text">
        {letters.map((char, i) => (
          <span
            key={i}
            className="splash-letter"
            style={{ animationDelay: `${i * 0.09}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default SplashScreen;