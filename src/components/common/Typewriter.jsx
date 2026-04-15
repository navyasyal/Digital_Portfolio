import React, { useState, useEffect } from "react";

export default function Typewriter({ text, speed = 50, delay = 0 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setComplete(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay]);

  return (
    <span className="font-mono">
      {displayedText}
      {!complete && (
        <span className="w-2 h-4 bg-neon-green ml-1 inline-block animate-pulse" />
      )}
    </span>
  );
}
