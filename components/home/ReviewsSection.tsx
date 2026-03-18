"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Star } from "lucide-react";

const REVIEWS = [
  { text: "Rychlé jednání, řidič přijel do pár minut. Doporučuji!", name: "Petr K.", stars: 5 },
  { text: "Spolehlivá taxislužba v Jičíně, férová cena.", name: "Marie S.", stars: 5 },
  { text: "Volám opakovaně, vždy bez problémů.", name: "Jan N.", stars: 5 },
  { text: "Skvělý přístup, čisté auto.", name: "Eva V.", stars: 5 },
  { text: "Přijeli přesně včas, příjemná cesta. Děkuji.", name: "Tomáš P.", stars: 5 },
];

const INTERVAL_MS = 8000;

export function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % REVIEWS.length), []);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) next();
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section
      className="relative overflow-hidden border-t border-neutral-200 bg-white py-16 dark:border-neutral-800 dark:bg-neutral-900 sm:py-20"
      aria-labelledby="reviews-heading"
    >
      <div className="relative z-[1] mx-auto max-w-4xl px-4 sm:px-6">
        <h2
          id="reviews-heading"
          className="text-center text-3xl font-extrabold text-neutral-900 dark:text-white sm:text-4xl"
        >
          Co říkají zákazníci
        </h2>
        <div
          className="relative mt-12 min-h-[200px]"
          onMouseEnter={() => {
            paused.current = true;
          }}
          onMouseLeave={() => {
            paused.current = false;
          }}
        >
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-700 ease-in-out ${
                i === index
                  ? "relative z-[1] opacity-100"
                  : "pointer-events-none absolute inset-0 z-0 opacity-0"
              }`}
              aria-hidden={i !== index}
            >
              <p className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-neutral-800 dark:text-neutral-100 sm:text-2xl">
                „{r.text}&rdquo;
              </p>
              <div className="mt-2 flex justify-center gap-0.5 text-orange-500 dark:text-orange-400" aria-hidden>
                {Array.from({ length: r.stars }).map((_, si) => (
                  <Star key={si} className="h-7 w-7 fill-current sm:h-8 sm:w-8" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-5 text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">{r.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center gap-2" role="tablist" aria-label="Výběr recenze">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              role="tab"
              aria-selected={i === index}
              aria-label={`Recenze ${i + 1}`}
              className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-900 ${
                i === index ? "w-10 bg-orange-500 dark:bg-orange-400" : "w-2.5 bg-neutral-300 dark:bg-neutral-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
