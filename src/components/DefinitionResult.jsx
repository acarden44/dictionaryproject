import React from "react";

export default function DefinitionResult({ data }) {
  if (!data || !data.meanings) return null;

  return (
    <div className="definition card p-4 mb-5 shadow-sm text-start">
      <h2 className="text-capitalize mb-4">{data.word}</h2>

      {data.meanings.map((meaning, index) => (
        <div key={index} className="mb-3">
          <h5 className="text-muted">{meaning.partOfSpeech}</h5>
          <ul className="list-unstyled ps-3">
            <li className="mb-2">• {meaning.definition}</li>
            {meaning.example && (
              <li className="fst-italic text-secondary">"{meaning.example}"</li>
            )}
            {meaning.synonyms && meaning.synonyms.length > 0 && (
              <li className="mt-2">
                <strong>Synonyms:</strong> {meaning.synonyms.join(", ")}
              </li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}
