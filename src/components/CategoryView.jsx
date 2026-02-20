import React from "react";

export default function CategoryView({ quotes, type }) {
  // Group quotes by top and sub categories
  const topGroups = {};
  quotes.forEach(q => {
    const { top, sub } = q.categoryType[type];
    if (!topGroups[top]) topGroups[top] = {};
    if (!topGroups[top][sub]) topGroups[top][sub] = [];
    topGroups[top][sub].push(q);
  });

  return (
    <div>
      {Object.entries(topGroups).map(([top, subGroups]) => (
        <div key={top}>
          <h2>{top}</h2>
          {Object.entries(subGroups).map(([sub, quotes]) => (
            <div key={sub}>
              <h3>{sub}</h3>
              <div className="cards-container">
                {quotes.map(q => (
                  <div className="card" key={q.id}>
                    <p>{q.text}</p>
                    <small>- {q.author}</small>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}