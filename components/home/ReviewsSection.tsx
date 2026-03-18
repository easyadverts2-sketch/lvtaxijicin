"use client";

import { useState, useEffect } from "react";

const REVIEWS = [
  { text: "Rychlé jednání, řidič přijel do pár minut. Doporučuji!", name: "Petr K.", stars: 5 },
  { text: "Spolehlivá taxislužba v Jičíně, férová cena.", name: "Marie S.", stars: 5 },
  { text: "Volám opakovaně, vždy bez problémů.", name: "Jan N.", stars: 5 },
  { text: "Skvělý přístup, čisté auto.", name: "Eva V.", stars: 5 },
  { text: "Přijeli přesně včas, příjemná cesta. Děkuji.", name: "Tomáš P.", stars: 5 },
];

const Stars = ({ count }: { count: number }) => (
  <span className="inline-flex text-yellow-400" aria-hidden>
    {"★".repeat(count)}
  </span>
);

export function ReviewsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const review = REVIEWS[index];

  return (
    <section className="border-t border-neutral-200 bg-white py-12 dark:border-neutral-800 dark:bg-neutral-900" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 id="reviews-heading" className="text-2xl font-bold text-neutral-900 dark:text-white text-center">
          Co říkají zákazníci
        </h2>
        <div className="mt-8 relative min-h-[120px]">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className={`text-center transition-opacity duration-300 ${i === index ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}
              aria-hidden={i !== index}
            >
              <p className="text-lg text-neutral-700 dark:text-neutral-300">
                „{r.text}&rdquo;
              </p>
              <p className="mt-3 font-medium text-neutral-900 dark:text-white">
                {r.name}
              </p>
              <p className="mt-1">
                <Stars count={r.stars} />
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Výběr recenze">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              role="tab"
              aria-selected={i === index}
              aria-label={`Recenze ${i + 1}`}
              className={`h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-900 ${
                i === index ? "w-8 bg-yellow-400" : "w-2 bg-neutral-300 dark:bg-neutral-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
