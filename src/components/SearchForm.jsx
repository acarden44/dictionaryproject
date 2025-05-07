import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (input.trim() !== "") {
      onSearch(input);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="row justify-content-center mb-4">
      <div className="col-md-6 col-8">
        <input
          type="text"
          placeholder="Search a word"
          className="form-control"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}
