import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search GitHub Users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border px-2 py-1 rounded"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-1 ml-2 rounded">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
