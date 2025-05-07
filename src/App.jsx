import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import DefinitionResult from "./components/DefinitionResult";
import TranslationList from "./components/TranslationList";
import ImageGallery from "./components/ImageGallery";

export default function App() {
  const [keyword, setKeyword] = useState("");
  const [definition, setDefinition] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!keyword) return;

    setLoading(true);
    setDefinition(null);

    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
      );
      setDefinition(response.data[0]);
    } catch (error) {
      console.error("Definition not found.");
      setDefinition(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App container py-5">
      <h1 className="text-center mb-4">
        📚 <strong>Dictionary App</strong>
      </h1>

      <form
        onSubmit={handleSearch}
        className="d-flex justify-content-center mb-5"
      >
        <input
          type="search"
          className="form-control me-2"
          placeholder="Search for a word"
          onChange={(e) => setKeyword(e.target.value)}
          style={{ maxWidth: "300px" }}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      {loading && <div className="text-center">🔄 Searching...</div>}

      {definition && (
        <>
          <DefinitionResult data={definition} />
          <TranslationList word={keyword} />
          <ImageGallery keyword={keyword} />
        </>
      )}

      <footer className="text-center mt-5 text-muted small">
        Built by{" "}
        <a href="https://github.com/acarden44" target="_blank" rel="noreferrer">
          April Carden
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/acarden44/dictionaryproject"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://cardendictionaryapp.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}
