import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Table from "./Table";
import Modal from "./Modal";

const UserManagement = () => {
  const { users, fetchUsers, addUser, updateUser, deleteUser } = useContext(AppContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSave = (user) => {
    currentUser ? updateUser(user) : addUser(user);
    setModalOpen(false);
  };

  return (
    <div>
      <h1>User Management</h1>
      <button onClick={() => setModalOpen(true)}>Add User</button>
      <Table
        data={users}
        onEdit={(user) => {
          setCurrentUser(user);
          setModalOpen(true);
        }}
        onDelete={deleteUser}
      />
      {isModalOpen && (
        <Modal
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
          initialData={currentUser}
        />
      )}
    </div>
  );
};

export default UserManagement;
