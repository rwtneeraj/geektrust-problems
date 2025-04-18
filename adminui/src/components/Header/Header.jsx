import React, { useContext, useEffect } from "react";
import "./Header.css";
import Users from "./../../data/data.json";
import { UserContext } from "../context/UserContextProvider";

const FilteredUser = (input, setUsers) => {
  const filteredUsers = Users.filter(
    ({ name, email, role }) =>
      name.includes(input) || email.includes(input) || role.includes(input)
  );
  setUsers(filteredUsers);
};

export default function Header() {
  const { setUsers } = useContext(UserContext);
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="search by name, email, and role"
        onChange={(e) => FilteredUser(e.target.value, setUsers)}
      />
    </div>
  );
}
