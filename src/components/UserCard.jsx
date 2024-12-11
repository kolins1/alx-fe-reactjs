import React from "react";

const UserCard = ({ user }) => (
  <div className="p-4 border rounded shadow-md">
    <img
      src={user.avatar_url}
      alt={`${user.login} avatar`}
      className="w-16 h-16 rounded-full"
    />
    <h2 className="text-lg font-bold">{user.login}</h2>
    <a
      href={user.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500"
    >
      View Profile
    </a>
  </div>
);

export default UserCard;
