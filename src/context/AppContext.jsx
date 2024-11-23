import React, { createContext, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:3000/users");
    setUsers(res.data);
  };

  const fetchRoles = async () => {
    const res = await axios.get("http://localhost:3000/roles");
    setRoles(res.data);
  };

  const addUser = async (user) => {
    const res = await axios.post("http://localhost:3000/users", user);
    setUsers([...users, res.data]);
  };

  const addRole = async (role) => {
    const res = await axios.post("http://localhost:3000/roles", role);
    setRoles([...roles, res.data]);
  };

  const updateUser = async (user) => {
    const res = await axios.put(`http://localhost:3000/users/${user.id}`, user);
    setUsers(users.map((u) => (u.id === user.id ? res.data : u)));
  };

  const updateRole = async (role) => {
    const res = await axios.put(`http://localhost:3000/roles/${role.id}`, role);
    setRoles(roles.map((r) => (r.id === role.id ? res.data : r)));
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    setUsers(users.filter((u) => u.id !== id));
  };

  const deleteRole = async (id) => {
    await axios.delete(`http://localhost:3000/roles/${id}`);
    setRoles(roles.filter((r) => r.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        users,
        roles,
        fetchUsers,
        fetchRoles,
        addUser,
        addRole,
        updateUser,
        updateRole,
        deleteUser,
        deleteRole,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
