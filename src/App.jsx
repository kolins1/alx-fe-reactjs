import React, { useState } from "react";
import SearchBar from "./components/searchBar";
import UserCard from "./components/userCard";
import { fetchGitHubUsers } from "./services/githubService";

const App = () => {
  const [users, setUsers] = useState([]);

  const handleSearch = async (query) => {
    try {
      const results = await fetchGitHubUsers(query);
      setUsers(results);
    } catch (error) {
      console.error("Error fetching GitHub users:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;
