import axios from "axios";

export const fetchGitHubUsers = async (query) => {
  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return response.data.items;
};
