import React from "react";

export default function DefinitionResult({ data }) {
  if (!data) return null;

  return (
    <div className="definition card p-4 mb-5 shadow-sm text-start">
      <h2 className="text-capitalize mb-4">{data.word}</h2>

      {data.meanings.map((meaning, index) => (
        <div key={index} className="mb-3">
          <h5 className="text-muted">{meaning.partOfSpeech}</h5>
          <ul className="list-unstyled ps-3">
            {meaning.definitions.map((def, i) => (
              <li key={i} className="mb-2">
                • {def.definition}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
