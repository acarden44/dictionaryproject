import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-4 mt-5 text-muted small">
      Built by{" "}
      <a
        href="https://github.com/aprilcarden"
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none"
      >
        April Carden
      </a>
      , open-sourced on{" "}
      <a
        href="https://github.com/acarden44/dictionaryproject"
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none"
      >
        GitHub
      </a>
      , and hosted on{" "}
      <a
        href="https://cardendictionaryapp.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none"
      >
        Netlify
      </a>
      .
    </footer>
  );
}
