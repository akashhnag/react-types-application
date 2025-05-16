import React from "react";
import { useState } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Matt", age: 20 },
  { name: "Joby", age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const handleClick = () => {
    const userDetails = users.find((user) => user.name === name);
    setUser(userDetails);
  };

  return (
    <div>
      User Search:
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={handleClick}>Find</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
