'use client'
import React, { useState, useEffect, useRef } from "react";
import css from "./Stars.module.css";

interface StarsProps {
  rows: number;
  columns: number;
}

export const Stars: React.FC<StarsProps> = ({ rows, columns }) => {
  const [stars, setStars] = useState<boolean[]>(Array(rows * columns).fill(false));
  const [isHovered, setIsHovered] = useState(false);
  const starElementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const starElements = starElementsRef.current;

    let startTime = Date.now();

    starElements.forEach((starElement, index) => {
      const randomDelay = index < rows * columns && Date.now() - startTime < 1000
        ? Math.random() * 50
        : Math.random() * 1000;

      starElement.style.animationDelay = `${randomDelay}s`;
    });
  }, []);

  return (
    <div className={css.starsBox}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isHovered ? (
          <div className={css.stars}>
            {stars.map((value, index) => (
              <div
                key={`${index}-${value}`}
                className={css.star}
                ref={(el) => starElementsRef.current[index] = el}
              />
            ))}
          </div>
        ) : (
          <div className={css.stars}>
            {stars.map((value, index) => (
              <div
                key={`${index}-${value}`}
                className={css.unity}
                ref={(el) => starElementsRef.current[index] = el}
              />
            ))}
          </div>
        )}
      </div>
      <h1>The universe is you.</h1>
    </div>
  );
};

