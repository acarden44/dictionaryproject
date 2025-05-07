import React from "react";

export default function TranslationList({ translations }) {
  if (!translations?.length) return null;

  return (
    <div className="mb-4">
      <h4>Translations</h4>
      <ul>
        {translations.map((item, index) => (
          <li key={index}>
            {item.language}: {item.translation}
          </li>
        ))}
      </ul>
    </div>
  );
}
