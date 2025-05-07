import React from "react";

export default function Synonyms({ synonyms }) {
  if (!synonyms || synonyms.length === 0) return null;

  return (
    <li className="mt-2">
      <strong>Synonyms:</strong> {synonyms.join(", ")}
    </li>
  );
}
