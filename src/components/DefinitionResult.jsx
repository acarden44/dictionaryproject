import React from "react";
import Phonetic from "./Phonetic";
import Synonyms from "./Synonyms";

export default function DefinitionResult({ data }) {
  if (!data || !data.meanings) return null;

  return (
    <div className="definition card p-4 mb-5 shadow-sm text-start">
      <h2 className="text-capitalize mb-1">{data.word}</h2>
      <Phonetic phonetic={data.phonetic} />

      {data.meanings.map((meaning, index) => (
        <div key={index} className="mb-3">
          <h5 className="text-muted">{meaning.partOfSpeech}</h5>
          <ul className="list-unstyled ps-3">
            <li className="mb-2">• {meaning.definition}</li>
            {meaning.example && (
              <li className="fst-italic text-secondary">"{meaning.example}"</li>
            )}
            <Synonyms synonyms={meaning.synonyms} />
          </ul>
        </div>
      ))}
    </div>
  );
}
